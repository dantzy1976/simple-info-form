import { FormField } from './types';
import { countries } from './countries';
import { entityTypes } from './entityTypes'; // Updated from entityTypeOptions to entityTypes

export const entityFormFields: FormField[] = [
  {
    id: 'b_01.01.0010',
    label: 'Name of the register',
    description: '',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter register name'
  },
  {
    id: 'b_01.01.0020',
    label: 'Name of the entity',
    description: '',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name'
  },
  {
    id: 'b_01.01.0030',
    label: 'Country of the entity',
    description: '',
    fieldType: 'country',
    required: true,
    options: countries
  },
  {
    id: 'b_01.01.0040',
    label: 'Type of entity',
    description: '',
    fieldType: 'closedOptions',
    required: true,
    options: entityTypes
  }
];
