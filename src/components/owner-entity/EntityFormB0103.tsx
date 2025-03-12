
import React from 'react';
import EntityFormFields from '../EntityFormFields';
import { entityFormFields3 } from '@/constants/formConstants';
import { useOwnerEntityStore } from '@/stores/ownerEntityStore';

const EntityFormB0103 = () => {
  const { formValues, setField } = useOwnerEntityStore();

  const handleFieldChange = (id: string, value: any) => {
    setField(id, value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-6 text-white">
        <h2 className="text-2xl font-bold">b_01.03</h2>
        <p className="text-white/80">Branch Information</p>
      </div>
      
      <div className="px-8 py-6">
        <EntityFormFields 
          fields={entityFormFields3}
          values={formValues}
          onChange={handleFieldChange}
        />
      </div>
    </div>
  );
};

export default EntityFormB0103;
