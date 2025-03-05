
export interface FormField {
  id: string;
  label: string;
  fieldType: 'alphanumerical' | 'country' | 'closedOptions' | 'date' | 'currency' | 'monetary';
  required: boolean;
  placeholder?: string;
  description?: string;
  options?: string[];
}
