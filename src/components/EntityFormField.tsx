import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Info } from 'lucide-react';
import { FormField } from '../constants/formConstants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { countries } from '../constants/formConstants';

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
      default:
        return field.fieldType;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(field.id, e.target.value);
  };

  const handleDateChange = (date: Date | undefined) => {
    onChange(field.id, date);
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
            className="entity-form-input"
            required={field.required}
          />
        );
      case 'country':
        return (
          <select
            id={field.id}
            value={value || ''}
            onChange={handleChange}
            className="entity-form-input"
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
        return (
          <select
            id={field.id}
            value={value || ''}
            onChange={handleChange}
            className="entity-form-input"
            required={field.required}
          >
            <option value="">Select type</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'date':
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "entity-form-input justify-start text-left font-normal",
                  !value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value ? format(value, 'PPP') : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
                mode="single"
                selected={value}
                onSelect={handleDateChange}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        );
      default:
        return null;
    }
  };

  return (
    <div className="entity-form-field mb-6" style={style}>
      <label htmlFor={field.id} className="entity-form-label flex items-center">
        <span className="flex-grow">
          {field.label}
          {field.description && (
            <span className="ml-2 text-sm text-blue-600 font-medium">
              [{field.description}]
            </span>
          )}
        </span>
        <span className="entity-field-type">{getFieldTypeLabel()}</span>
      </label>
      {renderInput()}
    </div>
  );
};

export default EntityFormField;
