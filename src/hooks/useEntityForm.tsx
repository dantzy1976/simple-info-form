
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
