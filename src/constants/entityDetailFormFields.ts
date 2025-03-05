
import { FormField } from './types';
import { countries } from './countries';
import { entityTypes } from './entityTypes';
import { entityHierarchy } from './entityHierarchy';
import { currencies } from './currencies';

export const entityDetailFormFields: FormField[] = [
  {
    id: 'b_01.02.0010',
    label: 'LEI of the entity',
    description: '',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code'
  },
  {
    id: 'b_01.02.0020',
    label: 'Name of the entity',
    description: '',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name'
  },
  {
    id: 'b_01.02.0030',
    label: 'Country of the entity',
    description: '',
    fieldType: 'country',
    required: true,
    options: countries
  },
  {
    id: 'b_01.02.0040',
    label: 'Type of entity',
    description: '',
    fieldType: 'closedOptions',
    required: true,
    options: entityTypes
  },
  {
    id: 'b_01.02.0050',
    label: 'Hierarchy of the entity within the group',
    description: 'where applicable',
    fieldType: 'closedOptions',
    required: false,
    options: entityHierarchy
  },
  {
    id: 'b_01.02.0060',
    label: 'LEI of the direct parent undertaking of the entity',
    description: '',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter parent LEI code'
  },
  {
    id: 'b_01.02.0070',
    label: 'Date of last update',
    description: '',
    fieldType: 'date',
    required: true
  },
  {
    id: 'b_01.02.0080',
    label: 'Date of integration in the Register of information',
    description: '',
    fieldType: 'date',
    required: true
  },
  {
    id: 'b_01.02.0090',
    label: 'Date of deletion in the Register of information',
    description: '',
    fieldType: 'date',
    required: false
  },
  {
    id: 'b_01.02.0100',
    label: 'Currency',
    description: '',
    fieldType: 'currency',
    required: true,
    options: currencies
  },
  {
    id: 'b_01.02.0110',
    label: 'Value of total assets - of the financial entity',
    description: '',
    fieldType: 'monetary',
    required: false,
    placeholder: 'Enter value'
  }
];
