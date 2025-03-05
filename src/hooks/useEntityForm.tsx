
import { useState, useCallback, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { FormValues, SavedEntity } from '@/types/entity.types';
import { loadEntities, saveEntity, loadEntityByName } from '@/services/entityService';
import { useEntityName } from '@/hooks/useEntityName';

export function useEntityForm() {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [submitting, setSubmitting] = useState(false);
  const [savedEntities, setSavedEntities] = useState<SavedEntity[]>([]);
  
  const {
    entityName,
    setEntityName,
    isEditingName,
    tempEntityName,
    setTempEntityName,
    handleEditNameClick,
    handleSaveName,
    handleCancelEdit
  } = useEntityName();

  // Load saved entities from Supabase
  const loadSavedEntities = useCallback(async () => {
    const entities = await loadEntities();
    setSavedEntities(entities);
  }, []);

  // Handle field changes
  const handleFieldChange = (id: string, value: any) => {
    const normalizedId = id.replace(/\./g, '_');
    
    // Synchronize fields between forms
    if (id === 'b_01.01.0010' || id === 'b_01.02.0010') {
      // LEI synchronization for all forms
      setFormValues((prev) => ({
        ...prev,
        'b_01_01_0010': value,
        'b_01_02_0010': value,
        // For form three, we sync the LEI to the head office field
        'b_01_03_0020': value, 
      }));
    } else if (id === 'b_01.03.0020') {
      // If LEI is updated in form three, sync back to forms 1 and 2
      setFormValues((prev) => ({
        ...prev,
        'b_01_01_0010': value,
        'b_01_02_0010': value,
        'b_01_03_0020': value,
      }));
    } else if (id === 'b_01.01.0020' || id === 'b_01.02.0020') {
      // Name synchronization for forms 1 and 2
      setEntityName(value || '');
      setFormValues((prev) => ({
        ...prev,
        'b_01_01_0020': value,
        'b_01_02_0020': value,
      }));
    } else if (id === 'b_01.01.0030' || id === 'b_01.02.0030') {
      // Country synchronization for forms 1 and 2
      setFormValues((prev) => ({
        ...prev,
        'b_01_01_0030': value,
        'b_01_02_0030': value,
      }));
    } else if (id === 'b_01.03.0040') {
      // For branch country, we only update the branch form
      setFormValues((prev) => ({
        ...prev,
        [normalizedId]: value,
      }));
    } else if (id === 'b_01.01.0040' || id === 'b_01.02.0040') {
      // Entity type synchronization
      setFormValues((prev) => ({
        ...prev,
        'b_01_01_0040': value,
        'b_01_02_0040': value,
      }));
    } else {
      // Regular field update
      setFormValues((prev) => ({
        ...prev,
        [normalizedId]: value,
      }));
    }
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
    const success = await saveEntity(entityName, formValues);
    if (success) {
      loadSavedEntities();
    }
  };

  // Handle loading entity from Supabase
  const handleLoadEntity = async (entityNameToLoad: string) => {
    const entity = await loadEntityByName(entityNameToLoad);
    
    if (entity) {
      setFormValues(entity.data);
      setEntityName(entity.name);
      
      toast({
        title: "Entity loaded",
        description: `Entity "${entityNameToLoad}" has been loaded successfully.`,
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

  // Modified to work with our useEntityName hook
  const handleSaveEntityName = () => {
    handleSaveName(formValues, setFormValues);
  };

  // Update the second form when entityName or country changes
  useEffect(() => {
    if (entityName) {
      setFormValues(prev => ({
        ...prev,
        'b_01_01_0020': entityName,
        'b_01_02_0020': entityName,
      }));
    }
    
    // Ensure country is synced between forms whenever form values change
    const country = formValues['b_01_01_0030'];
    if (country) {
      setFormValues(prev => ({
        ...prev,
        'b_01_02_0030': country,
      }));
    }
    
    // Ensure LEI is synced across all forms
    const lei = formValues['b_01_01_0010'];
    if (lei) {
      setFormValues(prev => ({
        ...prev,
        'b_01_02_0010': lei,
        'b_01_03_0020': lei, // Sync to third form's LEI field
      }));
    }
    
    // Sync LEI from third form if it's the source
    const thirdFormLei = formValues['b_01_03_0020'];
    if (thirdFormLei && (!lei || thirdFormLei !== lei)) {
      setFormValues(prev => ({
        ...prev,
        'b_01_01_0010': thirdFormLei,
        'b_01_02_0010': thirdFormLei,
      }));
    }
    
    // Ensure entity type is synced
    const entityType = formValues['b_01_01_0040'];
    if (entityType) {
      setFormValues(prev => ({
        ...prev,
        'b_01_02_0040': entityType,
      }));
    }
  }, [entityName, formValues]);

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
    handleSaveName: handleSaveEntityName,
    handleCancelEdit,
    saveEntityData,
    loadSavedEntities
  };
}

export type EntityFormHook = ReturnType<typeof useEntityForm>;
