
import React, { useEffect, useState } from 'react';
import EntityFormHeader from './EntityFormHeader';
import EntityNameEditor from './EntityNameEditor';
import EntityFormFields from './EntityFormFields';
import EntityExportHandler from './EntityExportHandler';
import EntitySelectionControls from './EntitySelectionControls';
import { entity2FormFields } from '../constants/formConstants';
import { useEntityForm } from '@/hooks/useEntityForm';

interface Entity2FormProps {
  hideControls?: boolean;
}

const Entity2Form = ({ hideControls = false }: Entity2FormProps) => {
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
    loadSavedEntities,
    setEntityName,
    setFormValues
  } = useEntityForm();

  // This function maps fields from form1 to form2 where applicable
  const mapForm1FieldsToForm2 = async (entityNameToLoad: string) => {
    const loadedEntity = await handleLoadEntity(entityNameToLoad);
    if (!loadedEntity) return null;
    
    // Map fields that have the same meaning but different IDs
    const mappedValues = { ...loadedEntity.data };
    
    // Map b_01.01.0010 (LEI) to b_01.02.0010
    if (mappedValues['b_01_01_0010']) {
      mappedValues['b_01_02_0010'] = mappedValues['b_01_01_0010'];
    }
    
    // Map b_01.01.0020 (Name) to b_01.02.0020
    if (mappedValues['b_01_01_0020']) {
      mappedValues['b_01_02_0020'] = mappedValues['b_01_01_0020'];
    }
    
    // Map b_01.01.0030 (Country) to b_01.02.0030
    if (mappedValues['b_01_01_0030']) {
      mappedValues['b_01_02_0030'] = mappedValues['b_01_01_0030'];
    }
    
    // Map b_01.01.0040 (Type) to b_01.02.0040
    if (mappedValues['b_01_01_0040']) {
      mappedValues['b_01_02_0040'] = mappedValues['b_01_01_0040'];
    }
    
    // Map b_01.01.0050 (Date of last update) to b_01.02.0070
    if (mappedValues['b_01_01_0050']) {
      mappedValues['b_01_02_0070'] = mappedValues['b_01_01_0050'];
    }
    
    return {
      name: loadedEntity.name,
      data: mappedValues
    };
  };

  // Custom handler for loading entities with field mapping
  const handleEntity2Load = async (entityNameToLoad: string) => {
    const mappedEntity = await mapForm1FieldsToForm2(entityNameToLoad);
    if (mappedEntity) {
      // Update the form values with the mapped data
      setFormValues(mappedEntity.data);
      setTempEntityName(mappedEntity.name);
      setEntityName(mappedEntity.name);
    }
  };

  useEffect(() => {
    loadSavedEntities();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto form-container">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium text-white">b_01.02</h1>
            <p className="text-blue-100">Enter the details of the entity participating in the central counterparty</p>
            
            {!hideControls && (
              <EntitySelectionControls 
                savedEntities={savedEntities}
                onLoadEntity={handleEntity2Load}
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
            fields={entity2FormFields}
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

export default Entity2Form;
