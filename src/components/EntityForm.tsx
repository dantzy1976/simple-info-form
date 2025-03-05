
import React, { useState, useEffect } from 'react';
import EntityFormField from './EntityFormField';
import EntityFormHeader from './EntityFormHeader';
import EntityNameEditor from './EntityNameEditor';
import EntityFormActions from './EntityFormActions';
import { entityFormFields } from '../constants/formConstants';
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from '../utils/excelExport';

interface FormValues {
  [key: string]: any;
}

interface SavedEntity {
  name: string;
  data: FormValues;
}

const EntityForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [submitting, setSubmitting] = useState(false);
  const [entityName, setEntityName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempEntityName, setTempEntityName] = useState("");
  const [savedEntities, setSavedEntities] = useState<SavedEntity[]>([]);

  useEffect(() => {
    const entities = localStorage.getItem('savedEntities');
    if (entities) {
      setSavedEntities(JSON.parse(entities));
    }
  }, []);

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
      data: { ...formValues }
    };

    const existingIndex = savedEntities.findIndex(entity => entity.name === entityName);
    let updatedEntities: SavedEntity[];

    if (existingIndex >= 0) {
      updatedEntities = [...savedEntities];
      updatedEntities[existingIndex] = entityToSave;
    } else {
      updatedEntities = [...savedEntities, entityToSave];
    }

    setSavedEntities(updatedEntities);
    localStorage.setItem('savedEntities', JSON.stringify(updatedEntities));

    toast({
      title: "Entity saved",
      description: `Entity "${entityName}" has been saved successfully.`,
    });
  };

  const handleLoadEntity = (entityNameToLoad: string) => {
    const entityToLoad = savedEntities.find(entity => entity.name === entityNameToLoad);
    
    if (entityToLoad) {
      setFormValues(entityToLoad.data);
      setEntityName(entityToLoad.name);
      
      toast({
        title: "Entity loaded",
        description: `Entity "${entityNameToLoad}" has been loaded successfully.`,
      });
    }
  };

  const handleExport = () => {
    try {
      // Export all saved entities
      const allEntityData = savedEntities.map(entity => entity.data);
      
      if (allEntityData.length === 0) {
        // If no saved entities, export current form values
        exportToExcel(formValues);
        toast({
          title: "Export successful",
          description: "Current entity information has been exported to Excel.",
        });
      } else {
        // Export all saved entities
        exportToExcel(allEntityData);
        toast({
          title: "Export successful",
          description: `All ${allEntityData.length} entities have been exported to Excel.`,
        });
      }
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export failed",
        description: "There was an error exporting the data.",
        variant: "destructive",
      });
    }
  };

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

  const handleNewEntity = () => {
    setFormValues({});
    setEntityName("");
    
    toast({
      title: "New entity created",
      description: "You can now enter information for a new entity.",
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 form-container">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <EntityFormHeader 
          entityName={entityName}
          savedEntities={savedEntities}
          onLoadEntity={handleLoadEntity}
          onNew={handleNewEntity}
        />
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8">
          <EntityNameEditor 
            entityName={entityName}
            isEditingName={isEditingName}
            tempEntityName={tempEntityName}
            onEditClick={handleEditNameClick}
            onSaveName={handleSaveName}
            onCancelEdit={handleCancelEdit}
            onTempNameChange={setTempEntityName}
          />
        </div>
        
        <form onSubmit={handleSubmit} className="px-8 py-6">
          {entityFormFields.map((field, index) => (
            <EntityFormField
              key={field.id}
              field={field}
              value={formValues[field.id.replace(/\./g, '_')]}
              onChange={handleFieldChange}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
          
          <EntityFormActions 
            onExport={handleExport}
            onSave={saveEntityData}
            submitting={submitting}
          />
        </form>
      </div>
    </div>
  );
};

export default EntityForm;
