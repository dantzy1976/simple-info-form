
import React from 'react';
import EntityFormFields from '../EntityFormFields';
import { entityFormFields2 } from '@/constants/formConstants';
import { useOwnerEntityStore } from '@/stores/ownerEntityStore';

const EntityFormB0102 = () => {
  const { formValues, setField } = useOwnerEntityStore();

  const handleFieldChange = (id: string, value: any) => {
    setField(id, value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6 text-white">
        <h2 className="text-2xl font-bold">b_01.02</h2>
        <p className="text-white/80">Entity Detailed Information</p>
      </div>
      
      <div className="px-8 py-6">
        <EntityFormFields 
          fields={entityFormFields2}
          values={formValues}
          onChange={handleFieldChange}
        />
      </div>
    </div>
  );
};

export default EntityFormB0102;
