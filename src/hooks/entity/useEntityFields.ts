
import { useState } from 'react';
import { FormValues } from './types';

export function useEntityFields(initialValues: FormValues = {}) {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  // Handle field changes
  const handleFieldChange = (id: string, value: any) => {
    const normalizedId = id.replace(/\./g, '_');
    setFormValues((prev) => ({
      ...prev,
      [normalizedId]: value,
    }));
    
    return normalizedId;
  };

  // Handle creating new entity
  const handleNewEntity = () => {
    setFormValues({});
    return "";
  };

  return {
    formValues,
    setFormValues,
    handleFieldChange,
    handleNewEntity
  };
}
