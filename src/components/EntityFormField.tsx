import React from 'react';
import { FormField } from '../constants/formConstants';
import { countries } from '../constants/countries';
import { Info } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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
            {field.options?.map((option) => {
              const parts = typeof option === 'string' ? option.split('\t') : [];
              const id = typeof option === 'object' ? option.id : parts[0];
              const label = typeof option === 'object' ? option.label : (parts.length > 1 ? parts[1] : option);
              
              return (
                <option key={id} value={id}>
                  {id} - {label}
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

  const renderInfoDialog = () => {
    if (!field.info) return null;

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm"
            className="h-6 w-6 p-0 ml-2"
          >
            <Info className="h-4 w-4" />
            <span className="sr-only">Info</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{field.info.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-2 text-left">Column Code</th>
                  <th className="border p-2 text-left">Type</th>
                  <th className="border p-2 text-left">Fill-in Instruction</th>
                  <th className="border p-2 text-left">Fill-in Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">{field.id}</td>
                  <td className="border p-2">{field.info.type}</td>
                  <td className="border p-2">{field.info.instruction}</td>
                  <td className="border p-2">{field.info.option}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="entity-form-field mb-6" style={style}>
      <label htmlFor={field.id} className="entity-form-label flex items-center">
        <div className="flex-grow flex items-center">
          <div>
            {field.label} <span className="text-gray-500 text-sm ml-2 font-bold">{field.id}</span>
          </div>
          {renderInfoDialog()}
        </div>
        <span className="entity-field-type bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
          {getFieldTypeLabel()}
        </span>
      </label>
      {renderInput()}
    </div>
  );
};

export default EntityFormField;
