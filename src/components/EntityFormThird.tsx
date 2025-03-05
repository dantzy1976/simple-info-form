
import React from 'react';
import EntityFormFields from './EntityFormFields';
import { entityFormFields3 } from '../constants/entityFormFields3';
import { FormValues } from '@/types/entity.types';

interface EntityFormThirdProps {
  formValues: FormValues;
  onChange: (id: string, value: any) => void;
}

const EntityFormThird = ({ formValues, onChange }: EntityFormThirdProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-6 text-white">
        <h2 className="text-2xl font-bold">b_01.03</h2>
        <p className="text-white/80">Please provide information about the branch</p>
      </div>
      
      <div className="px-8 py-6">
        <EntityFormFields 
          fields={entityFormFields3}
          values={formValues}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default EntityFormThird;
