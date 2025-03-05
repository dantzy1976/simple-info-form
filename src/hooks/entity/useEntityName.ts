
import { useState } from 'react';
import { FormValues } from './types';

export function useEntityName(
  initialName: string = "",
  onEntityNameChange: (name: string, formValues: FormValues) => void
) {
  const [entityName, setEntityName] = useState(initialName);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempEntityName, setTempEntityName] = useState("");

  // Entity name editing functions
  const handleEditNameClick = () => {
    setTempEntityName(entityName);
    setIsEditingName(true);
  };

  const handleSaveName = (formValues: FormValues) => {
    setEntityName(tempEntityName);
    setIsEditingName(false);
    
    // Call the callback with the new name
    onEntityNameChange(tempEntityName, formValues);
  };

  const handleCancelEdit = () => {
    setIsEditingName(false);
  };

  return {
    entityName,
    isEditingName,
    tempEntityName,
    setEntityName,
    setTempEntityName,
    handleEditNameClick,
    handleSaveName,
    handleCancelEdit
  };
}
