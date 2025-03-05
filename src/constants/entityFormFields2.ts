
import { FormField } from './types';
import { countries } from './countries';

export const entity2FormFields: FormField[] = [
  {
    id: 'b_01.02.0010',
    label: 'LEI of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code'
  },
  {
    id: 'b_01.02.0020',
    label: 'Name of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name'
  },
  {
    id: 'b_01.02.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true
  },
  {
    id: 'b_01.02.0040',
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
    id: 'b_01.02.0050',
    label: 'Hierarchy of the entity within the group (where applicable)',
    fieldType: 'closedOptions',
    required: false,
    options: [
      'Parent entity',
      'Subsidiary',
      'Branch',
      'Joint venture',
      'Associate'
    ]
  },
  {
    id: 'b_01.02.0060',
    label: 'LEI of the direct parent undertaking of the entity',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter parent LEI code'
  },
  {
    id: 'b_01.02.0070',
    label: 'Date of last update',
    fieldType: 'date',
    required: true
  },
  {
    id: 'b_01.02.0080',
    label: 'Date of integration in the Register of information',
    fieldType: 'date',
    required: true
  },
  {
    id: 'b_01.02.0090',
    label: 'Date of deletion in the Register of information',
    fieldType: 'date',
    required: false
  },
  {
    id: 'b_01.02.0100',
    label: 'Currency',
    fieldType: 'currency',
    required: true,
    options: [
      'EUR', 'USD', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD', 'CNY'
    ]
  },
  {
    id: 'b_01.02.0110',
    label: 'Value of total assets - of the financial entity',
    fieldType: 'monetary',
    required: true,
    placeholder: 'Enter value'
  }
];
