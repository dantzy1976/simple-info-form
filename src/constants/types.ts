
export interface FormField {
  id: string;
  label: string;
  description?: string;
  fieldType: 'alphanumerical' | 'country' | 'closedOptions' | 'date' | 'currency' | 'monetary';
  required: boolean;
  placeholder?: string;
  options?: string[];
}
