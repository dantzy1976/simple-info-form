
import { FormField } from './types';

export const providerFormFieldsB0203: FormField[] = [
  {
    id: 'b_02.03.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement'
  },
  {
    id: 'b_02.03.0020',
    label: 'Contractual arrangement linked to the contractual arrangement referred in RT.02.03.0010',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter linked arrangement reference',
    description: 'Reference number of the linked contractual arrangement'
  },
  {
    id: 'b_02.03.0030',
    label: 'Link',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'true',
    description: 'Fill with "true" for each populated row'
  }
];
