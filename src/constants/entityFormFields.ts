
import { FormField } from './types';
import { countries } from './countries';
import { currencies } from './currencies';

export const entityFormFields: FormField[] = [
  {
    id: 'b_01.01.0010',
    label: 'Name of the entity maintaining the register',
    description: '',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name'
  },
  {
    id: 'b_01.01.0020',
    label: 'Country of the entity maintaining the register',
    description: '',
    fieldType: 'country',
    required: true,
    options: countries
  },
  {
    id: 'b_01.01.0030',
    label: 'Legal Entity Identifier (LEI) of the entity maintaining the register',
    description: '',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter LEI code'
  },
  {
    id: 'b_01.01.0040',
    label: 'Competent authority name',
    description: '',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter authority name'
  },
  {
    id: 'b_01.01.0050',
    label: 'Competent authority country',
    description: '',
    fieldType: 'country',
    required: true,
    options: countries
  },
  {
    id: 'b_01.01.0060',
    label: 'Reporting currency',
    description: '',
    fieldType: 'currency',
    required: true,
    options: currencies
  },
  {
    id: 'b_01.01.0070',
    label: 'Reporting date',
    description: '',
    fieldType: 'date',
    required: true
  }
];
