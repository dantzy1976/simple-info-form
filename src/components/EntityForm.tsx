
import React, { useState, useEffect } from 'react';
import EntityFormField from './EntityFormField';
import { entityFormFields } from '../constants/formConstants';
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from '../utils/excelExport';
import { Download, Pencil, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

  // Load saved entities from localStorage on component mount
  useEffect(() => {
    const entities = localStorage.getItem('savedEntities');
    if (entities) {
      setSavedEntities(JSON.parse(entities));
    }
  }, []);

  const handleFieldChange = (id: string, value: any) => {
    // Convert field IDs with dots to underscores for easier handling in export
    const normalizedId = id.replace(/\./g, '_');
    
    // If this is the entity name field (b_01.01.0020), update the header
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
    
    // Save the entity data to localStorage
    saveEntityData();
    
    // Simulate form submission
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

    // Create a new entity object
    const entityToSave: SavedEntity = {
      name: entityName,
      data: { ...formValues }
    };

    // Check if this entity already exists
    const existingIndex = savedEntities.findIndex(entity => entity.name === entityName);
    let updatedEntities: SavedEntity[];

    if (existingIndex >= 0) {
      // Update existing entity
      updatedEntities = [...savedEntities];
      updatedEntities[existingIndex] = entityToSave;
    } else {
      // Add new entity
      updatedEntities = [...savedEntities, entityToSave];
    }

    // Update state and localStorage
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
      exportToExcel(formValues);
      toast({
        title: "Export successful",
        description: "Entity information has been exported to Excel.",
      });
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
    
    // Update the form value for entity name field as well
    const normalizedId = 'b_01.01.0020'.replace(/\./g, '_');
    setFormValues((prev) => ({
      ...prev,
      [normalizedId]: tempEntityName,
    }));
  };

  const handleCancelEdit = () => {
    setIsEditingName(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 form-container">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium text-white">b_01.01</h1>
            <p className="text-blue-100">Enter the details of the entity maintaining the register</p>
            
            {/* Entity selector */}
            {savedEntities.length > 0 && (
              <div className="mt-2 bg-white/10 rounded p-2">
                <div className="flex items-center gap-2">
                  <label className="text-white text-sm">Load saved entity:</label>
                  <Select onValueChange={handleLoadEntity}>
                    <SelectTrigger className="bg-white/10 border-blue-300 text-white w-48">
                      <SelectValue placeholder="Select entity" />
                    </SelectTrigger>
                    <SelectContent>
                      {savedEntities.map((entity) => (
                        <SelectItem key={entity.name} value={entity.name}>
                          {entity.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            
            <div className="mt-2 border-t border-blue-400 pt-2 flex items-center justify-between">
              {isEditingName ? (
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="text"
                    value={tempEntityName}
                    onChange={(e) => setTempEntityName(e.target.value)}
                    className="bg-white/10 text-white border border-blue-300 rounded px-2 py-1 w-full"
                    placeholder="Enter entity name"
                  />
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={handleSaveName}
                  >
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-white">
                    {entityName || 'Enter entity name'}
                  </h2>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-black hover:bg-gray-100 text-xs px-2 py-1 h-7"
                    onClick={handleEditNameClick}
                  >
                    <Pencil size={14} className="mr-1" /> Edit
                  </Button>
                </>
              )}
            </div>
          </div>
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
          
          <div className="mt-8 flex justify-between items-center">
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleExport}
                className="flex items-center gap-2"
              >
                <Download size={16} />
                Export to Excel
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={saveEntityData}
                className="flex items-center gap-2"
              >
                <Save size={16} />
                Save Entity
              </Button>
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Information'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntityForm;
