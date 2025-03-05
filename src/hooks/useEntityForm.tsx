
import { useState, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Json } from '@/integrations/supabase/types';

interface FormValues {
  [key: string]: any;
}

interface SavedEntity {
  name: string;
  data: FormValues;
}

export function useEntityForm() {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [submitting, setSubmitting] = useState(false);
  const [entityName, setEntityName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempEntityName, setTempEntityName] = useState("");
  const [savedEntities, setSavedEntities] = useState<SavedEntity[]>([]);

  // Load saved entities from Supabase
  const loadSavedEntities = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('entities')
        .select('name, data');
      
      if (error) {
        throw error;
      }
      
      if (data) {
        // Convert Json to FormValues by ensuring it's an object
        const entities: SavedEntity[] = data.map(item => ({
          name: item.name,
          data: item.data as FormValues
        }));
        setSavedEntities(entities);
      }
    } catch (error) {
      console.error('Error loading entities:', error);
      toast({
        title: "Error loading entities",
        description: "There was a problem loading your saved entities.",
        variant: "destructive",
      });
    }
  }, []);

  // Handle field changes
  const handleFieldChange = (id: string, value: any) => {
    const normalizedId = id.replace(/\./g, '_');
    if (id === 'b_01.01.0020') {
      setEntityName(value || '');
    }
    setFormValues((prev) => ({
      ...prev,
      [normalizedId]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    saveEntityData();
    setTimeout(() => {
      console.log('Form submitted with values:', formValues);
      toast({
        title: "Form submitted successfully",
        description: "Your entity information has been registered and saved.",
      });
      setSubmitting(false);
    }, 1000);
  };

  // Save entity data to Supabase
  const saveEntityData = async () => {
    if (!entityName) {
      toast({
        title: "Error saving entity",
        description: "Entity name is required to save data.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Check if entity with this name already exists
      const { data: existingEntities } = await supabase
        .from('entities')
        .select('id')
        .eq('name', entityName)
        .maybeSingle();

      if (existingEntities) {
        // Update existing entity
        const { error } = await supabase
          .from('entities')
          .update({ 
            data: formValues,
            updated_at: new Date().toISOString()
          })
          .eq('name', entityName);

        if (error) throw error;
      } else {
        // Insert new entity
        const { error } = await supabase
          .from('entities')
          .insert({ 
            name: entityName, 
            data: formValues 
          });

        if (error) throw error;
      }

      // Refresh the list of saved entities
      loadSavedEntities();

      toast({
        title: "Entity saved",
        description: `Entity "${entityName}" has been saved successfully.`,
      });
    } catch (error) {
      console.error('Error saving entity:', error);
      toast({
        title: "Error saving entity",
        description: "There was a problem saving your entity data.",
        variant: "destructive",
      });
    }
  };

  // Handle loading entity from Supabase
  const handleLoadEntity = async (entityNameToLoad: string) => {
    try {
      const { data, error } = await supabase
        .from('entities')
        .select('name, data')
        .eq('name', entityNameToLoad)
        .maybeSingle();
      
      if (error) throw error;
      
      if (data) {
        // Cast the JSON data to FormValues type
        setFormValues(data.data as FormValues);
        setEntityName(data.name);
        
        toast({
          title: "Entity loaded",
          description: `Entity "${entityNameToLoad}" has been loaded successfully.`,
        });
      }
    } catch (error) {
      console.error('Error loading entity:', error);
      toast({
        title: "Error loading entity",
        description: "There was a problem loading your entity data.",
        variant: "destructive",
      });
    }
  };

  // Handle creating new entity
  const handleNewEntity = () => {
    setFormValues({});
    setEntityName("");
    
    toast({
      title: "New entity created",
      description: "You can now enter information for a new entity.",
    });
  };

  // Entity name editing functions
  const handleEditNameClick = () => {
    setTempEntityName(entityName);
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    setEntityName(tempEntityName);
    setIsEditingName(false);
    
    const normalizedId = 'b_01.01.0020'.replace(/\./g, '_');
    setFormValues((prev) => ({
      ...prev,
      [normalizedId]: tempEntityName,
    }));
  };

  const handleCancelEdit = () => {
    setIsEditingName(false);
  };

  return {
    formValues,
    entityName,
    isEditingName,
    tempEntityName,
    savedEntities,
    submitting,
    setTempEntityName,
    handleFieldChange,
    handleSubmit,
    handleLoadEntity,
    handleNewEntity,
    handleEditNameClick,
    handleSaveName,
    handleCancelEdit,
    saveEntityData,
    loadSavedEntities
  };
}

export type EntityFormHook = ReturnType<typeof useEntityForm>;
