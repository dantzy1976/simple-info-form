
import { FormField } from './types';
import { countries } from './countries';

export const entityFormFields: FormField[] = [
  {
    id: 'b_01.01.0010',
    label: 'LEI of the entity maintaining the register of information',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'b_01.01.0010'
  },
  {
    id: 'b_01.01.0020',
    label: 'Name of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name',
    description: 'b_01.01.0020'
  },
  {
    id: 'b_01.01.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true,
    description: 'b_01.01.0030'
  },
  {
    id: 'b_01.01.0040',
    label: 'Type of entity',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.01.0040',
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
    label: 'Competent Authority',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter authority name',
    description: 'b_01.01.0050'
  },
  {
    id: 'b_01.01.0060',
    label: 'Date of the reporting',
    fieldType: 'date',
    required: true,
    description: 'b_01.01.0060'
  }
];
