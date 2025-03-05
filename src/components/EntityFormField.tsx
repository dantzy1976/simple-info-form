
import React from 'react';
import { FormField } from '../constants/formConstants';

interface EntityFormFieldProps {
  field: FormField;
  value: any;
  onChange: (id: string, value: any) => void;
  style: React.CSSProperties;
}

const EntityFormField = ({ field, value, onChange, style }: EntityFormFieldProps) => {
  const getFieldTypeLabel = () => {
    switch (field.fieldType) {
      case 'alphanumerical':
        return 'Alphanumerical';
      case 'country':
        return 'Country';
      case 'closedOptions':
        return 'Closed set of options';
      case 'date':
        return 'Date';
      case 'currency':
        return 'Currency';
      case 'monetary':
        return 'Monetary';
      default:
        return field.fieldType;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(field.id, e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(field.id, e.target.value);
  };

  const renderInput = () => {
    switch (field.fieldType) {
      case 'alphanumerical':
        return (
          <input
            type="text"
            id={field.id}
            placeholder={field.placeholder}
            value={value || ''}
            onChange={handleChange}
            className="entity-form-input w-full p-2 border border-gray-300 rounded"
            required={field.required}
          />
        );
      case 'country':
        return (
          <select
            id={field.id}
            value={value || ''}
            onChange={handleChange}
            className="entity-form-input w-full p-2 border border-gray-300 rounded"
            required={field.required}
          >
            <option value="">Select country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        );
      case 'closedOptions':
        if (field.options && Array.isArray(field.options)) {
          // Check if options are objects with id and label
          const isObjectOptions = field.options.length > 0 && typeof field.options[0] === 'object';
          
          return (
            <select
              id={field.id}
              value={value || ''}
              onChange={handleChange}
              className="entity-form-input w-full p-2 border border-gray-300 rounded"
              required={field.required}
            >
              <option value="">Select option</option>
              {isObjectOptions ? (
                // If options are objects with id and label
                (field.options as { id: string; label: string }[]).map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))
              ) : (
                // If options are strings (legacy format)
                (field.options as string[]).map((option) => {
                  // For string format like "eba_RP:x53\tUltimate parent"
                  const parts = option.split('\t');
                  const id = parts[0];
                  const label = parts.length > 1 ? parts[1] : option;
                  
                  return (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  );
                })
              )}
            </select>
          );
        }
        return null;
      case 'date':
        return (
          <input
            type="date"
            id={field.id}
            value={value || ''}
            onChange={handleDateChange}
            className="entity-form-input w-full p-2 border border-gray-300 rounded"
            required={field.required}
          />
        );
      case 'currency':
        return (
          <select
            id={field.id}
            value={value || ''}
            onChange={handleChange}
            className="entity-form-input w-full p-2 border border-gray-300 rounded"
            required={field.required}
          >
            <option value="">Select currency</option>
            {field.options?.map((option) => {
              // For string format like "eba_CU:EUR\tEuro"
              const parts = option.toString().split('\t');
              const id = parts[0];
              const label = parts.length > 1 ? parts[1] : option;
              
              return (
                <option key={id} value={id}>
                  {label}
                </option>
              );
            })}
          </select>
        );
      case 'monetary':
        return (
          <input
            type="number"
            id={field.id}
            placeholder={field.placeholder}
            value={value || ''}
            onChange={handleChange}
            className="entity-form-input w-full p-2 border border-gray-300 rounded"
            required={field.required}
            step="0.01"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="entity-form-field mb-6" style={style}>
      <label htmlFor={field.id} className="entity-form-label flex items-center">
        <div className="flex-grow">
          <div>
            {field.label} <span className="text-gray-500 text-sm ml-2 font-bold">{field.id}</span>
          </div>
        </div>
        <span className="entity-field-type bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
          {getFieldTypeLabel()}
        </span>
      </label>
      {renderInput()}
    </div>
  );
};

// Import the countries array from formConstants
import { countries } from '../constants/formConstants';

export default EntityFormField;
