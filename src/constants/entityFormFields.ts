
import { FormField } from './types';
import { countries } from './countries';

export const entityFormFields: FormField[] = [
  {
    id: 'b_01.01.0010',
    label: 'LEI of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code'
  },
  {
    id: 'b_01.01.0020',
    label: 'Name of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name'
  },
  {
    id: 'b_01.01.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true
  },
  {
    id: 'b_01.01.0040',
    label: 'Type of entity',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Credit institution',
      'Investment firm',
      'Insurance company',
      'Pension fund',
      'Other financial entity'
    ]
  },
  {
    id: 'b_01.01.0050',
    label: 'Date of last update',
    fieldType: 'date',
    required: true
  }
];
