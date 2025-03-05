
import React from 'react';
import EntityFormFields from './EntityFormFields';
import { entityFormFields2 } from '../constants/entityFormFields2';
import { FormValues } from '@/types/entity.types';

interface EntityFormSecondProps {
  formValues: FormValues;
  onChange: (id: string, value: any) => void;
}

const EntityFormSecond = ({ formValues, onChange }: EntityFormSecondProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6 text-white">
        <h2 className="text-2xl font-bold">b_01.02</h2>
        <p className="text-white/80">Please provide detailed information about this entity</p>
      </div>
      
      <div className="px-8 py-6">
        <EntityFormFields 
          fields={entityFormFields2}
          values={formValues}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default EntityFormSecond;
