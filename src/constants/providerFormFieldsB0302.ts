
import { FormField } from './types';

export const providerFormFieldsB0302: FormField[] = [
  {
    id: 'b_03.02.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement',
    info: {
      title: 'Contractual Arrangement Reference Number Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_02.02.0010\n\nIdentify the contractual arrangement reference number signed by the ICT third-party service provider",
      option: "Mandatory"
    }
  },
  {
    id: 'b_03.02.0020',
    label: 'Identification code of ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter identification code',
    description: 'Code identifying the ICT third-party service provider',
    info: {
      title: 'ICT Third-Party Service Provider Identification Code Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_05.01.0010\n\nCode to identify the ICT third-party service provider",
      option: "Mandatory"
    }
  },
  {
    id: 'b_03.02.0030',
    label: 'Type of code to identify the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter code type',
    description: 'Specifies the type of code used for identification',
    info: {
      title: 'Service Provider Code Type Information',
      type: 'Pattern',
      instruction: "As reported in b_05.01.0020\n\nIdentify the type of code to identify the ICT third-party service provider in b_03.02.0020\n\n1.\t'LEI' for LEI\n2.\t'Country Code'+Underscore+'Type of Code' for non LEI code\n\nCountry Code: Identify the ISO 3166–1 alpha–2 code of the country of issuance of the other code to identify the ICT third-party service provider\n\nType of Code:\n1.\tCRN for Corporate registration number\n2.\tVAT for VAT number\n3.\tPNR for Passport Number\n4.\tNIN for National Identity Number",
      option: "Mandatory"
    }
  },
  {
    id: 'b_03.02.0045',
    label: 'Link',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'true',
    description: 'Fill with "true" for each populated row',
    info: {
      title: 'Link Field Information',
      type: 'Alphanumerical',
      instruction: "Technical field. To be filled with the value \"TRUE\" for each populated row.",
      option: ""
    }
  }
];
