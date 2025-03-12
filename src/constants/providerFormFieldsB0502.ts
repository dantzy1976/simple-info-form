import { FormField } from './types';
import { annexIII } from './annexIII';

export const providerFormFieldsB0502: FormField[] = [
  {
    id: 'b_05.02.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Reference number for the contractual arrangement',
    info: {
      title: 'Contractual Arrangement Reference Number Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_02.01.0010",
      option: "Mandatory"
    }
  },
  {
    id: 'b_05.02.0020',
    label: 'Type of ICT services',
    fieldType: 'closedOptions',
    required: true,
    options: annexIII,
    description: 'Type of ICT services provided',
    info: {
      title: 'ICT Services Type Information',
      type: 'Closed set of options',
      instruction: "One of the types of ICT services referred to in Annex III",
      option: "Mandatory",
      reference: "LISTANNEXIII"
    }
  },
  {
    id: 'b_05.02.0030',
    label: 'Identification code of the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter identification code',
    description: 'Unique identifier for the ICT third-party service provider',
    info: {
      title: 'ICT Third-Party Service Provider Identification Code Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_05.01.0010",
      option: "Mandatory"
    }
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
    description: 'Pattern/type of the identification code',
    info: {
      title: 'Service Provider Code Type Information',
      type: 'Pattern',
      instruction: "As reported in b_05.01.0020",
      option: "Mandatory"
    }
  },
  {
    id: 'b_05.02.0050',
    label: 'Rank',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter rank number',
    description: 'Numeric rank value',
    info: {
      title: 'Rank Information',
      type: 'Natural number',
      instruction: "If the ICT third-party service provider is signing the contractual arrangement with the financial entity, it is considered as a direct ICT third-party service provider and the 'rank' to be reported shall be 1;\n\nIf the ICT third-party service provider is signing the contract with the direct ICT third-party service provider, it is considered as a subcontractor and the 'rank' to be reported shall be 2;\n\nThe same logic apply to all the following subcontractors by incrementing the 'rank'.\n\nIn case multiple ICT third-party service providers have the same 'rank' in the ICT service supply chain, financial entities shall report the same 'rank' for all those ICT third-party service providers.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_05.02.0060',
    label: 'Identification code of the recipient of sub-contracted ICT services',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter identification code',
    description: 'Unique identifier for the recipient of sub-contracted ICT services',
    info: {
      title: 'Recipient of Sub-contracted ICT Services Identification Code Information',
      type: 'Alphanumerical',
      instruction: "'Not applicable' if the ICT third-party service provider b_05.02.0030) is a direct ICT third-party service provider i.e. at 'rank' r = 1 (b_05.02.0050);\n\nIf the ICT third-party service provider is at 'rank' r = n where n>1, indicate the 'Identification code of the recipient of sub-contracted services' at 'rank' r=n-1 that subcontracted the ICT service (even partially) to the ICT third-party service provider at 'rank' r=n.",
      option: "Mandatory Not applicable for rank 1"
    }
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
    description: 'Pattern/type of the identification code for the recipient',
    info: {
      title: 'Recipient Code Type Information',
      type: 'Pattern',
      instruction: "'Not applicable' if the ICT third-party service provider b_05.02.0030) is at contracting rank r = 1 (b_05.02.0050);\n\nIf the ICT third-party service provider is at 'rank' r = n where n>1, indicate the 'Type of code to identify the recipient of sub-contracted service' at 'rank' r=n-1 that subcontracted the ICT service (even partially) to the ICT third-party service provider at 'rank' r=n.\n\n1.\t'LEI' for LEI\n2.\t'Country Code'+Underscore+'Type of Code' for non LEI code\n\nCountry Code: Identify the ISO 3166–1 alpha–2 code of the country of issuance of the other code to identify the ICT third-party service provider\n\nType of Code:\n1.\tCRN for Corporate registration number\n2.\tVAT for VAT number\n3.\tPNR for Passport Number\n4.\tNIN for National Identity Number",
      option: "Mandatory Not applicable for rank 1"
    }
  }
];
