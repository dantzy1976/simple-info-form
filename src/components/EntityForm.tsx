
import React, { useEffect } from 'react';
import EntityFormHeader from './EntityFormHeader';
import EntityNameEditor from './EntityNameEditor';
import EntityFormFields from './EntityFormFields';
import EntityExportHandler from './EntityExportHandler';
import EntitySelectionControls from './EntitySelectionControls';
import { entityFormFields } from '../constants/formConstants';
import { useEntityForm } from '@/hooks/useEntityForm';

interface EntityFormProps {
  hideControls?: boolean;
}

const EntityForm = ({ hideControls = false }: EntityFormProps) => {
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
    <div className="w-full max-w-3xl mx-auto form-container">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium text-white">b_01.01</h1>
            <p className="text-blue-100">Enter the details of the entity participating in the transaction</p>
            
            {!hideControls && (
              <EntitySelectionControls 
                savedEntities={savedEntities}
                onLoadEntity={handleLoadEntity}
                onNewEntity={handleNewEntity}
              />
            )}
          </div>
        </div>
        
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
        </form>
      </div>
    </div>
  );
};

export default EntityForm;
