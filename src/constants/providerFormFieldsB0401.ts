
import { FormField } from './types';

export const providerFormFieldsB0401: FormField[] = [
  {
    id: 'b_04.01.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement'
  },
  {
    id: 'b_04.01.0020',
    label: 'LEI of the entity making use of the ICT service(s)',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI',
    description: 'Legal Entity Identifier of the entity making use of the ICT services'
  },
  {
    id: 'b_04.01.0030',
    label: 'Nature of the entity making use of the ICT service(s)',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Credit institution',
      'Investment firm',
      'Payment institution',
      'Electronic money institution',
      'Insurance undertaking',
      'Reinsurance undertaking',
      'Central counterparty',
      'Trading venue',
      'Central securities depository',
      'Other'
    ],
    description: 'Nature of the financial entity making use of the ICT services'
  },
  {
    id: 'b_04.01.0040',
    label: 'Identification code of the branch',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter branch code',
    description: 'Identification code of the branch (if applicable)'
  }
];
