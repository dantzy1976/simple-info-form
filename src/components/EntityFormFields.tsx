
import React from 'react';
import EntityFormField from './EntityFormField';
import { FormField } from '../constants/formConstants';

interface EntityFormFieldsProps {
  fields: FormField[];
  values: Record<string, any>;
  onChange: (id: string, value: any) => void;
}

const EntityFormFields = ({ fields, values, onChange }: EntityFormFieldsProps) => {
  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <EntityFormField
          key={field.id}
          field={field}
          value={values[field.id.replace(/\./g, '_')]}
          onChange={onChange}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default EntityFormFields;
