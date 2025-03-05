import React, { useEffect, useState } from 'react';
import EntityFormHeader from './EntityFormHeader';
import EntityNameEditor from './EntityNameEditor';
import EntityFormFields from './EntityFormFields';
import EntityExportHandler from './EntityExportHandler';
import EntityFormSecond from './EntityFormSecond';
import EntityFormThird from './EntityFormThird';
import { entityFormFields } from '../constants/formConstants';
import { useEntityForm } from '@/hooks/useEntityForm';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Plus, ArrowDown, ArrowUp } from 'lucide-react';

const EntityForm = () => {
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);
  
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

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
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
        </div>
      </div>
      
      <div className="flex flex-col gap-4 mb-8">
        <Button
          type="button"
          onClick={() => setShowSecondForm(!showSecondForm)}
          className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-2"
        >
          {showSecondForm ? (
            <>
              <ArrowUp size={16} />
              b_01.02
            </>
          ) : (
            <>
              <ArrowDown size={16} />
              b_01.02
            </>
          )}
        </Button>
      </div>
      
      {showSecondForm && (
        <EntityFormSecond 
          formValues={formValues}
          onChange={handleFieldChange}
        />
      )}
      
      {showSecondForm && (
        <div className="mt-4 mb-8">
          <Button
            type="button"
            onClick={() => setShowThirdForm(!showThirdForm)}
            className="bg-purple-500 text-white hover:bg-purple-600 flex items-center gap-2"
          >
            {showThirdForm ? (
              <>
                <ArrowUp size={16} />
                b_01.03
              </>
            ) : (
              <>
                <ArrowDown size={16} />
                b_01.03
              </>
            )}
          </Button>
        </div>
      )}
      
      {showSecondForm && showThirdForm && (
        <EntityFormThird 
          formValues={formValues}
          onChange={handleFieldChange}
        />
      )}
      
      <div className="mt-8">
        <EntityExportHandler 
          savedEntities={savedEntities}
          formValues={formValues}
          onSave={saveEntityData}
          submitting={submitting}
        />
      </div>
    </div>
  );
};

export default EntityForm;
