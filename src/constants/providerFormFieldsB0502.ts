
import { FormField } from './types';

export const providerFormFieldsB0502: FormField[] = [
  {
    id: 'b_05.02.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Reference number for the contractual arrangement'
  },
  {
    id: 'b_05.02.0020',
    label: 'Type of ICT services',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Cloud computing services',
      'Software services',
      'Hardware services',
      'Network services',
      'Data services',
      'Security services',
      'Digital payment services',
      'Other ICT services'
    ],
    description: 'Type of ICT services provided'
  },
  {
    id: 'b_05.02.0030',
    label: 'Identification code of the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter identification code',
    description: 'Unique identifier for the ICT third-party service provider'
  },
  {
    id: 'b_05.02.0040',
    label: 'Type of code to identify the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'LEI',
      'MIC',
      'ISIN',
      'BIC',
      'NATID',
      'OTHER'
    ],
    description: 'Pattern/type of the identification code'
  },
  {
    id: 'b_05.02.0050',
    label: 'Rank',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter rank number',
    description: 'Numeric rank value'
  },
  {
    id: 'b_05.02.0060',
    label: 'Identification code of the recipient of sub-contracted ICT services',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter identification code',
    description: 'Unique identifier for the recipient of sub-contracted ICT services'
  },
  {
    id: 'b_05.02.0070',
    label: 'Type of code to identify the recipient of sub-contracted ICT services',
    fieldType: 'closedOptions',
    required: false,
    options: [
      'LEI',
      'MIC',
      'ISIN',
      'BIC',
      'NATID',
      'OTHER'
    ],
    description: 'Pattern/type of the identification code for the recipient'
  }
];
