
import { useCallback, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { useEntityLoader } from './useEntityLoader';
import { useEntitySaver } from './useEntitySaver';
import { useEntityName } from './useEntityName';
import { useEntityFields } from './useEntityFields';
import { FormValues } from './types';

export function useEntityForm() {
  const {
    formValues,
    setFormValues,
    handleFieldChange: baseHandleFieldChange,
    handleNewEntity: baseHandleNewEntity
  } = useEntityFields();

  const { 
    savedEntities, 
    loadSavedEntities,
    handleLoadEntity
  } = useEntityLoader();

  const handleEntityNameChange = useCallback((name: string, currentFormValues: FormValues) => {
    const normalizedId = 'b_01.01.0020'.replace(/\./g, '_');
    baseHandleFieldChange(normalizedId, name);
  }, [baseHandleFieldChange]);

  const {
    entityName,
    isEditingName,
    tempEntityName,
    setEntityName,
    setTempEntityName,
    handleEditNameClick,
    handleSaveName,
    handleCancelEdit
  } = useEntityName("", handleEntityNameChange);

  const {
    submitting,
    saveEntityData,
    handleSubmit
  } = useEntitySaver(entityName, formValues, loadSavedEntities);

  // Custom handler for field changes that also updates entity name if needed
  const handleFieldChange = (id: string, value: any) => {
    const normalizedId = baseHandleFieldChange(id, value);
    
    if (id === 'b_01.01.0020') {
      setEntityName(value || '');
    }
    
    return normalizedId;
  };

  // Custom handler for loading entities
  const handleEntityLoad = async (entityNameToLoad: string) => {
    const loadedEntity = await handleLoadEntity(entityNameToLoad);
    if (loadedEntity) {
      setFormValues(loadedEntity.data);
      setEntityName(loadedEntity.name);
      
      toast({
        title: "Entity loaded",
        description: `Entity "${entityNameToLoad}" has been loaded successfully.`,
      });
      
      return loadedEntity;
    }
    return null;
  };

  // Custom handler for new entities
  const handleNewEntity = () => {
    const emptyName = baseHandleNewEntity();
    setEntityName(emptyName);
    
    toast({
      title: "New entity created",
      description: "You can now enter information for a new entity.",
    });
  };

  const customHandleSaveName = () => {
    handleSaveName(formValues);
  };

  // Initial load of saved entities
  useEffect(() => {
    loadSavedEntities();
  }, [loadSavedEntities]);

  return {
    formValues,
    entityName,
    isEditingName,
    tempEntityName,
    savedEntities,
    submitting,
    setEntityName,
    setTempEntityName,
    handleFieldChange,
    handleSubmit,
    handleLoadEntity: handleEntityLoad,
    handleNewEntity,
    handleEditNameClick,
    handleSaveName: customHandleSaveName,
    handleCancelEdit,
    saveEntityData,
    loadSavedEntities,
    setFormValues
  };
}

export type EntityFormHook = ReturnType<typeof useEntityForm>;
