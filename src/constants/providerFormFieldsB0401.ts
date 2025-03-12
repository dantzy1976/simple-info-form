
import { FormField } from './types';

export const providerFormFieldsB0401: FormField[] = [
  {
    id: 'b_04.01.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement',
    info: {
      title: 'Contractual Arrangement Reference Number Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_02.01.0010\n\nIdentify the contractual reference number in relation to the entity making use of the ICT services provided",
      option: "Mandatory"
    }
  },
  {
    id: 'b_04.01.0020',
    label: 'LEI of the entity making use of the ICT service(s)',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI',
    description: 'Legal Entity Identifier of the entity making use of the ICT services',
    info: {
      title: 'Entity LEI Information',
      type: 'Alphanumerical',
      instruction: "Identify the entity making use of the ICT service(s) using the LEI, 20-character, alpha-numeric code based on the ISO 17442 standard",
      option: "Mandatory"
    }
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
    description: 'Nature of the financial entity making use of the ICT services',
    info: {
      title: 'Entity Nature Information',
      type: 'Closed set of options',
      instruction: "One of the options in the corresponding dropdown list shall be used",
      option: "Mandatory",
      reference: "LIST0401030"
    }
  },
  {
    id: 'b_04.01.0040',
    label: 'Identification code of the branch',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter branch code',
    description: 'Identification code of the branch (if applicable)',
    info: {
      title: 'Branch Identification Code Information',
      type: 'Alphanumerical',
      instruction: "Identification code of the branch as reported in b_01.03.0010",
      option: "Mandatory if the entity making use of the ICT service(s) is a branch of a financial entity (RT.04.01.0030)"
    }
  }
];
