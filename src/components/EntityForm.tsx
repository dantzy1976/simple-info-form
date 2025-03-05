
import React, { useEffect } from 'react';
import EntityFormHeader from './EntityFormHeader';
import EntityNameEditor from './EntityNameEditor';
import EntityFormFields from './EntityFormFields';
import EntityExportHandler from './EntityExportHandler';
import { entityFormFields } from '../constants/formConstants';
import { useEntityForm } from '@/hooks/useEntityForm';

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
