
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface FormValues {
  [key: string]: any;
}

interface SavedEntity {
  name: string;
  data: FormValues;
  formType: 'b_01.01' | 'b_01.02';
}

export function useEntityForm(formType: 'b_01.01' | 'b_01.02' = 'b_01.01') {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [submitting, setSubmitting] = useState(false);
  const [entityName, setEntityName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempEntityName, setTempEntityName] = useState("");
  const [savedEntities, setSavedEntities] = useState<SavedEntity[]>([]);

  const storageKey = `savedEntities_${formType}`;

  // Load saved entities from localStorage
  const loadSavedEntities = () => {
    const entities = localStorage.getItem(storageKey);
    if (entities) {
      setSavedEntities(JSON.parse(entities));
    }
  };

  // Handle field changes
  const handleFieldChange = (id: string, value: any) => {
    const normalizedId = id.replace(/\./g, '_');
    // For form 1, set entity name if it's the name field
    if ((formType === 'b_01.01' && id === 'b_01.01.0020') || 
        (formType === 'b_01.02' && id === 'b_01.02.0020')) {
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
      console.log(`Form ${formType} submitted with values:`, formValues);
      toast({
        title: "Form submitted successfully",
        description: "Your entity information has been registered and saved.",
      });
      setSubmitting(false);
    }, 1000);
  };

  // Save entity data
  const saveEntityData = () => {
    if (!entityName) {
      toast({
        title: "Error saving entity",
        description: "Entity name is required to save data.",
        variant: "destructive",
      });
      return;
    }

    const entityToSave: SavedEntity = {
      name: entityName,
      data: { ...formValues },
      formType
    };

    const existingIndex = savedEntities.findIndex(entity => entity.name === entityName && entity.formType === formType);
    let updatedEntities: SavedEntity[];

    if (existingIndex >= 0) {
      updatedEntities = [...savedEntities];
      updatedEntities[existingIndex] = entityToSave;
    } else {
      updatedEntities = [...savedEntities, entityToSave];
    }

    setSavedEntities(updatedEntities);
    localStorage.setItem(storageKey, JSON.stringify(updatedEntities));

    toast({
      title: "Entity saved",
      description: `Entity "${entityName}" has been saved successfully.`,
    });
  };

  // Handle loading entity
  const handleLoadEntity = (entityNameToLoad: string) => {
    const entityToLoad = savedEntities.find(entity => entity.name === entityNameToLoad && entity.formType === formType);
    
    if (entityToLoad) {
      setFormValues(entityToLoad.data);
      setEntityName(entityToLoad.name);
      
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

  // Entity name editing functions
  const handleEditNameClick = () => {
    setTempEntityName(entityName);
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    setEntityName(tempEntityName);
    setIsEditingName(false);
    
    const fieldId = formType === 'b_01.01' ? 'b_01.01.0020' : 'b_01.02.0020';
    const normalizedId = fieldId.replace(/\./g, '_');
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
    formType,
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
