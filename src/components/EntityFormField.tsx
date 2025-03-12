import React, { useState } from 'react';
import { FormField } from '../constants/formConstants';
import { countries } from '../constants/countries';
import { currencies } from '../constants/currencies';
import { Info } from 'lucide-react';
import { Button } from './ui/button';

interface EntityFormFieldProps {
  field: FormField;
  value: any;
  onChange: (id: string, value: any) => void;
  style: React.CSSProperties;
}

const EntityFormField = ({ field, value, onChange, style }: EntityFormFieldProps) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

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
              <option key={country.id} value={country.id}>
                {country.id} - {country.label}
              </option>
            ))}
          </select>
        );
      case 'closedOptions':
        if (field.options && Array.isArray(field.options)) {
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
                (field.options as { id: string; label: string }[]).map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.id} - {option.label}
                  </option>
                ))
              ) : (
                (field.options as string[]).map((option) => {
                  const parts = option.split('\t');
                  const id = parts[0];
                  const label = parts.length > 1 ? parts[1] : option;
                  
                  return (
                    <option key={id} value={id}>
                      {id} - {label}
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
            {currencies.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.id} - {currency.label}
              </option>
            ))}
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

  const renderInfoContent = () => {
    if (!field.info || !showInfo) return null;

    return (
      <div className="mt-2 p-4 bg-slate-50 border border-slate-200 rounded-md shadow-sm animate-in fade-in duration-300">
        <h4 className="text-sm font-medium text-slate-800 mb-2">{field.info.title}</h4>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border p-2 text-left">Column Code</th>
              <th className="border p-2 text-left">Type</th>
              <th className="border p-2 text-left">Fill-in Instruction</th>
              <th className="border p-2 text-left">Fill-in Option</th>
              {field.info.reference && (
                <th className="border p-2 text-left">Drop down reference</th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{field.id}</td>
              <td className="border p-2">{field.info.type}</td>
              <td className="border p-2">{field.info.instruction}</td>
              <td className="border p-2">{field.info.option}</td>
              {field.info.reference && (
                <td className="border p-2">{field.info.reference}</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="entity-form-field mb-6" style={style}>
      <label htmlFor={field.id} className="entity-form-label flex items-center">
        <div className="flex-grow flex items-center">
          <div>
            {field.label} <span className="text-gray-500 text-sm ml-2 font-bold">{field.id}</span>
          </div>
          {field.info && (
            <Button 
              variant="ghost" 
              size="sm"
              className="h-6 w-6 p-0 ml-2"
              onClick={toggleInfo}
            >
              <Info className="h-4 w-4" />
              <span className="sr-only">Info</span>
            </Button>
          )}
        </div>
        <span className="entity-field-type bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
          {getFieldTypeLabel()}
        </span>
      </label>
      {renderInput()}
      {renderInfoContent()}
    </div>
  );
};

export default EntityFormField;
