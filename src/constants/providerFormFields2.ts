import { FormField } from './types';
import { binaryOptions } from './binaryOptions';

// Service type options
const serviceTypeOptions = [
  '01\tData storage',
  '02\tData processing',
  '03\tCloud services',
  '04\tNetwork infrastructure',
  '05\tSoftware as a service',
  '06\tSecurity services',
  '07\tPayment processing',
  '08\tAPI services',
  '09\tAnalytics',
  '10\tSupport services',
  '11\tOther IT services'
];

// Termination reason options
const terminationReasonOptions = [
  '01\tContractual term completion',
  '02\tMutual agreement',
  '03\tBreach of contract by service provider',
  '04\tBreach of contract by financial entity',
  '05\tProvider insolvency',
  '06\tChange in business strategy',
  '07\tService quality issues',
  '08\tRegulatory requirements',
  '09\tCost optimization',
  '10\tOther reasons'
];

// Data sensitivity options
const dataSensitivityOptions = [
  '01\tNon-sensitive data',
  '02\tInternal data',
  '03\tConfidential data',
  '04\tPersonal data',
  '05\tSensitive personal data',
  '06\tFinancial data',
  '07\tBusiness critical data',
  '08\tRegulated data',
  '09\tMixed data'
];

// Reliance level options
const relianceLevelOptions = [
  '01\tLow reliance',
  '02\tMedium reliance',
  '03\tHigh reliance',
  '04\tCritical reliance'
];

// Code type options
const codeTypeOptions = [
  '01\tLEI',
  '02\tMFID',
  '03\tEIC',
  '04\tBIC',
  '05\tOther'
];

// Function identifier options
const functionIdentifierOptions = [
  '01\tCore banking',
  '02\tPayment services',
  '03\tSecurities trading',
  '04\tAsset management',
  '05\tRisk management',
  '06\tAccounting',
  '07\tCustomer relationship management',
  '08\tCompliance',
  '09\tReporting',
  '10\tOther'
];

// Form fields for b_02.02
export const providerFormFieldsB0202: FormField[] = [
  {
    id: 'b_02.02.0010',
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
    id: 'b_02.02.0020',
    label: 'LEI of the entity making use of the ICT service(s)',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI',
    description: 'Legal Entity Identifier of the entity using the service',
    info: {
      title: 'Entity LEI Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_04.01.0020\n\nIdentify the entity making use of the ICT service(s) using the LEI, 20-character, alpha-numeric code based on the ISO 17442 standard",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.02.0030',
    label: 'Identification code of the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter identification code',
    description: 'Identification code for the third-party service provider',
    info: {
      title: 'ICT Third-Party Service Provider Identification Code Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_05.01.0010\n\nCode to identify the ICT third-party service provider",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.02.0040',
    label: 'Type of code to identify the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: codeTypeOptions,
    description: 'The type of code used to identify the service provider',
    info: {
      title: 'Service Provider Code Type Information',
      type: 'Pattern',
      instruction: "As reported in b_05.01.0020\n\nIdentify the type of code to identify the ICT third-party service provider in b_02.02.0030\n\n1.\t'LEI' for LEI\n2.\t'Country Code'+Underscore+'Type of Code' for non LEI code\n\nCountry Code: Identify the ISO 3166–1 alpha–2 code of the country of issuance of the other code to identify the ICT third-party service provider\n\nType of Code:\n1.\tCRN for Corporate registration number\n2.\tVAT for VAT number\n3.\tPNR for Passport Number\n4.\tNIN for National Identity Number",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.02.0050',
    label: 'Function identifier',
    fieldType: 'closedOptions',
    required: true,
    options: functionIdentifierOptions,
    description: 'Identifier for the function being supported',
    info: {
      title: 'Function Identifier Information',
      type: 'Pattern',
      instruction: "As defined by the financial entity in b_06.01.0010",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.02.0060',
    label: 'Type of ICT services',
    fieldType: 'closedOptions',
    required: true,
    options: serviceTypeOptions,
    description: 'Type of ICT services being provided',
    info: {
      title: 'Type of ICT Services Information',
      type: 'Closed set of options',
      instruction: "One of the types of ICT services referred to in Annex III",
      option: "Mandatory",
      reference: "LISTANNEXIII"
    }
  },
  {
    id: 'b_02.02.0070',
    label: 'Start date of the contractual arrangement',
    fieldType: 'date',
    required: true,
    placeholder: 'Select start date',
    description: 'Start date of the contract',
    info: {
      title: 'Start Date Information',
      type: 'Date',
      instruction: "Identify the date of entry into force of the contractual arrangement as stipulated in the contractual arrangement using the ISO 8601 (yyyy–mm–dd) code",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.02.0080',
    label: 'End date of the contractual arrangement',
    fieldType: 'date',
    required: false,
    placeholder: 'Select end date',
    description: 'End date of the contract',
    info: {
      title: 'End Date Information',
      type: 'Date',
      instruction: "Identify the end date as stipulated in the contractual arrangement using the ISO 8601 (yyyy–mm–dd) code. If the contractual arrangement is indefinite, it shall be filled in with ‘9999-12-31’. If the contractual arrangement has been terminated on a date different than the end date, this shall be filled in with the termination date.\nIn case the contractual arrangement foresees a renewal, this shall be filled in with the date of the contract renewal as stipulated in the contractual arrangement.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.02.0090',
    label: 'Reason of the termination or ending of the contractual arrangement',
    fieldType: 'closedOptions',
    required: false,
    options: terminationReasonOptions,
    description: 'Reason for contract termination',
    info: {
      title: 'Termination Reason Information',
      type: 'Closed set of options',
      instruction: "In case the contractual arrangement has been terminated or it is ended, identify the reason of the termination or ending of the contractual arrangements using one of the options in the corresponding dropdown list",
      option: "Mandatory if the contractual arrangement is terminated",
      reference: "LIST0202090"
    }
  },
  {
    id: 'b_02.02.0100',
    label: 'Notice period for the financial entity making use of the ICT service(s)',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter notice period (days)',
    description: 'Notice period required for the financial entity',
    info: {
      title: 'Notice Period for Financial Entity Information',
      type: 'Natural number',
      instruction: "Identify the notice period for terminating the contractual arrangement by the financial entity in a business-as-usual case. The notice period shall be expressed as number of calendar days from the receipt of the counterparty of the request to terminate the ICT service.",
      option: "Mandatory if the ICT service is supporting a critical or important function"
    }
  },
  {
    id: 'b_02.02.0110',
    label: 'Notice period for the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter notice period (days)',
    description: 'Notice period required for the service provider',
    info: {
      title: 'Notice Period for ICT Third-Party Service Provider Information',
      type: 'Natural number',
      instruction: "Identify the notice period for terminating contractual arrangement by the direct ICT third-party service provider in a business-as-usual case. The notice period shall be expressed as number of calendar days from the receipt of the counterparty of the request to terminate the ICT service.",
      option: "Mandatory if the ICT service is supporting a critical or important function"
    }
  },
  {
    id: 'b_02.02.0120',
    label: 'Country of the governing law of the contractual arrangement',
    fieldType: 'country',
    required: true,
    description: 'Country whose laws govern the contract',
    info: {
      title: 'Governing Law Country Information',
      type: 'Country',
      instruction: "Identify the country of the governing law of the contractual arrangement using the ISO 3166–1 alpha–2 code.",
      option: "Mandatory if the ICT service is supporting a critical or important function",
      reference: "LISTCOUNTRY"
    }
  },
  {
    id: 'b_02.02.0130',
    label: 'Country of provision of the ICT services',
    fieldType: 'country',
    required: true,
    description: 'Country where the ICT services are provided from',
    info: {
      title: 'ICT Services Provision Country Information',
      type: 'Country',
      instruction: "Identify the country of provision of the ICT services using the ISO 3166–1 alpha–2 code.",
      option: "Mandatory if the ICT service is supporting a critical or important function",
      reference: "LISTCOUNTRY"
    }
  },
  {
    id: 'b_02.02.0140',
    label: 'Storage of data',
    fieldType: 'closedOptions',
    required: true,
    options: binaryOptions,
    description: 'Whether data is stored by the service provider',
    info: {
      title: 'Data Storage Information',
      type: '[Yes/No]',
      instruction: "Is the ICT service related to (or foresees) storage of data?\n\none of the options in the corresponding dropdown list",
      option: "Mandatory if the ICT service is supporting a critical or important function",
      reference: "LISTBINARY"
    }
  },
  {
    id: 'b_02.02.0150',
    label: 'Location of the data at rest (storage)',
    fieldType: 'country',
    required: false,
    description: 'Country where the data is stored',
    info: {
      title: 'Data at Rest Location Information',
      type: 'Country',
      instruction: "Identify the country of location of the data at rest (storage) using the ISO 3166–1 alpha–2 code.",
      option: "Mandatory if ’Yes’ is reported in RT.02.02.0140",
      reference: "LISTCOUNTRY"
    }
  },
  {
    id: 'b_02.02.0160',
    label: 'Location of management of the data (processing)',
    fieldType: 'country',
    required: false,
    description: 'Country where the data is processed',
    info: {
      title: 'Data Management Location Information',
      type: 'Country',
      instruction: "Identify the country of location of management of the data (processing) using the ISO 3166–1 alpha–2 code.",
      option: "Mandatory if the ICT service is based on or foresees data processing ",
      reference: "LISTCOUNTRY"
    }
  },
  {
    id: 'b_02.02.0170',
    label: 'Sensitiveness of the data stored by the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: dataSensitivityOptions,
    description: 'Sensitivity level of the stored data',
    info: {
      title: 'Data Sensitivity Information',
      type: 'Closed set of options',
      instruction: "Identify the level of sensitiveness of the data stored or processed by the ICT third-party service provider using one of the options in the corresponding dropdown list\n\n\nThe most sensitive data take precedence: e.g. if both ‘Medium’ and ‘High’ apply, then ‘High’ shall be selected.",
      option: "Mandatory if the ICT third-party service provider stores data and if the ICT service is supporting a critical or important function or material part thereof",
      reference: "LIST0202170"
    }
  },
  {
    id: 'b_02.02.0180',
    label: 'Level of reliance on the ICT service supporting the critical or important function',
    fieldType: 'closedOptions',
    required: true,
    options: relianceLevelOptions,
    description: 'Level of reliance on the ICT service',
    info: {
      title: 'Reliance Level Information',
      type: 'Closed set of options',
      instruction: "One of the options in the corresponding dropdown list shall be used:",
      option: "Mandatory if the ICT service is supporting a critical or important function or material part thereof",
      reference: "LIST0202180"
    }
  }
];
