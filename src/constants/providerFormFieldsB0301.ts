
import { FormField } from './types';

export const providerFormFieldsB0301: FormField[] = [
  {
    id: 'b_03.01.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement'
  },
  {
    id: 'b_03.01.0020',
    label: 'LEI of the entity signing the contractual arrangement',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI',
    description: 'Legal Entity Identifier of the entity signing the contract'
  },
  {
    id: 'b_03.01.0030',
    label: 'Link',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'true',
    description: 'Fill with "true" for each populated row'
  }
];
