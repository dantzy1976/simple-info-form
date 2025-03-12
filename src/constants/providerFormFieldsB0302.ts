
import { FormField } from './types';

export const providerFormFieldsB0302: FormField[] = [
  {
    id: 'b_03.02.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement'
  },
  {
    id: 'b_03.02.0020',
    label: 'Identification code of ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter identification code',
    description: 'Code identifying the ICT third-party service provider'
  },
  {
    id: 'b_03.02.0030',
    label: 'Type of code to identify the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter code type',
    description: 'Specifies the type of code used for identification'
  },
  {
    id: 'b_03.02.0045',
    label: 'Link',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'true',
    description: 'Fill with "true" for each populated row'
  }
];
