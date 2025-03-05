
import { useState } from 'react';

export function useEntityName() {
  const [entityName, setEntityName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempEntityName, setTempEntityName] = useState("");

  const handleEditNameClick = () => {
    setTempEntityName(entityName);
    setIsEditingName(true);
  };

  const handleSaveName = (formValues: Record<string, any>, setFormValues: (values: Record<string, any>) => void) => {
    setEntityName(tempEntityName);
    setIsEditingName(false);
    
    const normalizedId = 'b_01.01.0020'.replace(/\./g, '_');
    setFormValues({
      ...formValues,
      [normalizedId]: tempEntityName,
    });
  };

  const handleCancelEdit = () => {
    setIsEditingName(false);
  };

  return {
    entityName,
    setEntityName,
    isEditingName,
    tempEntityName,
    setTempEntityName,
    handleEditNameClick,
    handleSaveName,
    handleCancelEdit
  };
}
