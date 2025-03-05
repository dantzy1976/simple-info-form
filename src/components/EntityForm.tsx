
import React, { useEffect } from 'react';
import EntityFormHeader from './EntityFormHeader';
import EntityNameEditor from './EntityNameEditor';
import EntityFormFields from './EntityFormFields';
import EntityExportHandler from './EntityExportHandler';
import { entityFormFields } from '../constants/formConstants';
import { useEntityForm } from '@/hooks/useEntityForm';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const EntityForm = () => {
  const {
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
  } = useEntityForm();

  useEffect(() => {
    loadSavedEntities();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 form-container">
      {/* Entity Selection Controls - Moved above the form */}
      <div className="mb-4 flex items-center justify-between gap-4 bg-slate-100 p-4 rounded-lg">
        <div className="flex items-center gap-2 flex-1">
          {savedEntities.length > 0 && (
            <>
              <label className="text-gray-700 text-sm font-medium">Load saved entity:</label>
              <Select onValueChange={handleLoadEntity}>
                <SelectTrigger className="bg-white border-gray-300 flex-1">
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
            </>
          )}
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={handleNewEntity}
          className="bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2"
        >
          <Plus size={16} />
          New Entity
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <EntityFormHeader 
          entityName={entityName}
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
        
        <div className="px-8 py-6">
          <EntityFormFields 
            fields={entityFormFields}
            values={formValues}
            onChange={handleFieldChange}
          />
          
          <div className="mt-8">
            <EntityExportHandler 
              savedEntities={savedEntities}
              formValues={formValues}
              onSave={saveEntityData}
              submitting={submitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityForm;
