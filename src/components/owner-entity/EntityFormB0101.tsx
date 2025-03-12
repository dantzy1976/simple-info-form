
import React from 'react';
import EntityFormFields from '../EntityFormFields';
import { entityFormFields } from '@/constants/formConstants';
import { useOwnerEntityStore } from '@/stores/ownerEntityStore';
import EntityNameEditor from '../EntityNameEditor';

const EntityFormB0101 = () => {
  const {
    formValues,
    entityName,
    isEditingName,
    tempEntityName,
    handleEditNameClick,
    handleSaveName,
    handleCancelEdit,
    setTempEntityName,
    setField
  } = useOwnerEntityStore();

  const handleFieldChange = (id: string, value: any) => {
    setField(id, value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6 text-white">
        <h2 className="text-2xl font-bold">b_01.01</h2>
        <p className="text-white/80">Entity Basic Information</p>
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
      
      <div className="px-8 py-6">
        <EntityFormFields 
          fields={entityFormFields}
          values={formValues}
          onChange={handleFieldChange}
        />
      </div>
    </div>
  );
};

export default EntityFormB0101;
