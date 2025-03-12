
import { FormField } from './types';

/**
 * Provider Form Fields for b_07.01 - ICT Service Provider Assessment
 */
export const providerFormFieldsB0701: FormField[] = [
  {
    id: 'b_07.01.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter the contractual arrangement reference number'
  },
  {
    id: 'b_07.01.0020',
    label: 'Identification code of the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter the identification code'
  },
  {
    id: 'b_07.01.0030',
    label: 'Type of code to identify the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'LEI',
      'MIC',
      'BIC',
      'NATIONAL_CODE',
      'OTHER'
    ]
  },
  {
    id: 'b_07.01.0040',
    label: 'Type of ICT services',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'DATA CENTER OPERATION',
      'SOFTWARE APPLICATIONS MANAGEMENT',
      'APPLICATIONS INFRASTRUCTURE MANAGEMENT',
      'SECURITY OPERATION CENTER',
      'ENTERPRISE USER MANAGEMENT',
      'HELP-DESK SERVICES',
      'BUSINESS CONTINUITY MANAGEMENT',
      'PAYMENT SERVICES',
      'OTHER'
    ]
  },
  {
    id: 'b_07.01.0050',
    label: 'Substitutability of the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'SUBSTITUTABLE',
      'DIFFICULT TO SUBSTITUTE',
      'NOT SUBSTITUTABLE'
    ]
  },
  {
    id: 'b_07.01.0060',
    label: 'Reason if the ICT third-party service provider is considered not substitutable or difficult to be substitutable',
    fieldType: 'closedOptions',
    required: false,
    options: [
      'LIMITED NUMBER OF AVAILABLE PROVIDERS ON THE MARKET',
      'CONTRACTUAL CONSTRAINTS',
      'DIFFICULTY TO ENSURE DATA PORTABILITY',
      'OTHER'
    ],
    description: 'Only required if provider is difficult to substitute or not substitutable'
  },
  {
    id: 'b_07.01.0070',
    label: 'Date of the last audit on the ICT third-party service provider',
    fieldType: 'date',
    required: false,
    description: 'Date of the last audit performed'
  },
  {
    id: 'b_07.01.0080',
    label: 'Existence of an exit plan',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Yes',
      'No'
    ]
  },
  {
    id: 'b_07.01.0090',
    label: 'Possibility of reintegration of the contracted ICT service',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'REINTEGRATION POSSIBLE',
      'REINTEGRATION DIFFICULT',
      'REINTEGRATION NOT POSSIBLE'
    ]
  },
  {
    id: 'b_07.01.0100',
    label: 'Impact of discontinuing the ICT services',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'LOW IMPACT',
      'MEDIUM IMPACT',
      'HIGH IMPACT',
      'VERY HIGH IMPACT'
    ]
  },
  {
    id: 'b_07.01.0110',
    label: 'Are there alternative ICT third-party service providers identified?',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Yes, more than one',
      'Yes, one',
      'No'
    ]
  },
  {
    id: 'b_07.01.0120',
    label: 'Identification of alternative ICT TPP',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter the identification of alternative providers',
    description: 'Only required if alternative providers are identified'
  }
];
