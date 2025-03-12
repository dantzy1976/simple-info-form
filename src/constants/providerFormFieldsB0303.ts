
import { FormField } from './types';

export const providerFormFieldsB0303: FormField[] = [
  {
    id: 'b_03.03.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement'
  },
  {
    id: 'b_03.03.0020',
    label: 'LEI of the entity providing ICT services',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI',
    description: 'Legal Entity Identifier of the entity providing ICT services'
  },
  {
    id: 'b_03.03.0031',
    label: 'Link',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'true',
    description: 'Fill with "true" for each populated row'
  }
];
