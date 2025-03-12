
import { FormField } from './types';

export const providerFormFieldsB0501: FormField[] = [
  {
    id: 'b_05.01.0010',
    label: 'Identification code of ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter identification code',
    description: 'Unique identifier for the ICT third-party service provider'
  },
  {
    id: 'b_05.01.0020',
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
    id: 'b_05.01.0030',
    label: 'Name of the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter provider name',
    description: 'Legal name of the ICT third-party service provider'
  },
  {
    id: 'b_05.01.0040',
    label: 'Type of person of the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Natural person',
      'Legal person'
    ],
    description: 'Type of person of the ICT service provider'
  },
  {
    id: 'b_05.01.0050',
    label: 'Country of the ICT third-party service provider\'s headquarters',
    fieldType: 'country',
    required: true,
    description: 'Country where the ICT service provider is headquartered'
  },
  {
    id: 'b_05.01.0060',
    label: 'Currency of the amount reported in RT.05.01.0070',
    fieldType: 'currency',
    required: true,
    options: [
      'EUR',
      'USD',
      'GBP',
      'JPY',
      'CHF',
      'CNY',
      'OTHER'
    ],
    description: 'Currency used for the reported cost'
  },
  {
    id: 'b_05.01.0070',
    label: 'Total annual expense or estimated cost of the ICT third-party service provider',
    fieldType: 'monetary',
    required: true,
    placeholder: 'Enter amount',
    description: 'Total annual expense or estimated cost'
  },
  {
    id: 'b_05.01.0080',
    label: 'Identification code of the ICT third-party service provider\'s ultimate parent undertaking',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter identification code',
    description: 'Identification code of the ultimate parent undertaking'
  },
  {
    id: 'b_05.01.0090',
    label: 'Type of code to identify the ICT third-party service provider\'s ultimate parent undertaking',
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
    description: 'Pattern/type of the identification code for the parent undertaking'
  }
];
