
import { FormField } from './types';
import { countries } from './countries';

export const entityFormFields2: FormField[] = [
  {
    id: 'b_01.02.0010',
    label: 'LEI of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'b_01.02.0010'
  },
  {
    id: 'b_01.02.0020',
    label: 'Name of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name',
    description: 'b_01.02.0020'
  },
  {
    id: 'b_01.02.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true,
    description: 'b_01.02.0030'
  },
  {
    id: 'b_01.02.0040',
    label: 'Type of entity',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.02.0040',
    options: [
      'Credit institution',
      'Investment firm',
      'Insurance company',
      'Pension fund',
      'Other financial entity'
    ]
  },
  {
    id: 'b_01.02.0050',
    label: 'Hierarchy of the entity within the group (where applicable)',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.02.0050',
    options: [
      'Parent',
      'Subsidiary',
      'Branch',
      'Joint venture',
      'Special purpose entity',
      'Other'
    ]
  },
  {
    id: 'b_01.02.0060',
    label: 'LEI of the direct parent undertaking of the entity',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter parent LEI code',
    description: 'b_01.02.0060'
  },
  {
    id: 'b_01.02.0070',
    label: 'Date of last update',
    fieldType: 'date',
    required: true,
    description: 'b_01.02.0070'
  },
  {
    id: 'b_01.02.0080',
    label: 'Date of integration in the Register of information',
    fieldType: 'date',
    required: true,
    description: 'b_01.02.0080'
  },
  {
    id: 'b_01.02.0090',
    label: 'Date of deletion in the Register of information',
    fieldType: 'date',
    required: false,
    description: 'b_01.02.0090'
  },
  {
    id: 'b_01.02.0100',
    label: 'Currency',
    fieldType: 'currency',
    required: true,
    description: 'b_01.02.0100',
    options: [
      'EUR', 'USD', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD', 'CNY'
    ]
  },
  {
    id: 'b_01.02.0110',
    label: 'Value of total assets - of the financial entity',
    fieldType: 'monetary',
    required: true,
    placeholder: 'Enter value',
    description: 'b_01.02.0110'
  }
];
