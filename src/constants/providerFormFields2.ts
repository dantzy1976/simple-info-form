
import { FormField } from './formConstants';

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
    description: 'Reference number for the contractual arrangement'
  },
  {
    id: 'b_02.02.0020',
    label: 'LEI of the entity making use of the ICT service(s)',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI',
    description: 'Legal Entity Identifier of the entity using the service'
  },
  {
    id: 'b_02.02.0030',
    label: 'Identification code of the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter identification code',
    description: 'Identification code for the third-party service provider'
  },
  {
    id: 'b_02.02.0040',
    label: 'Type of code to identify the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: codeTypeOptions,
    description: 'The type of code used to identify the service provider'
  },
  {
    id: 'b_02.02.0050',
    label: 'Function identifier',
    fieldType: 'closedOptions',
    required: true,
    options: functionIdentifierOptions,
    description: 'Identifier for the function being supported'
  },
  {
    id: 'b_02.02.0060',
    label: 'Type of ICT services',
    fieldType: 'closedOptions',
    required: true,
    options: serviceTypeOptions,
    description: 'Type of ICT services being provided'
  },
  {
    id: 'b_02.02.0070',
    label: 'Start date of the contractual arrangement',
    fieldType: 'date',
    required: true,
    placeholder: 'Select start date',
    description: 'Start date of the contract'
  },
  {
    id: 'b_02.02.0080',
    label: 'End date of the contractual arrangement',
    fieldType: 'date',
    required: false,
    placeholder: 'Select end date',
    description: 'End date of the contract'
  },
  {
    id: 'b_02.02.0090',
    label: 'Reason of the termination or ending of the contractual arrangement',
    fieldType: 'closedOptions',
    required: false,
    options: terminationReasonOptions,
    description: 'Reason for contract termination'
  },
  {
    id: 'b_02.02.0100',
    label: 'Notice period for the financial entity making use of the ICT service(s)',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter notice period (days)',
    description: 'Notice period required for the financial entity'
  },
  {
    id: 'b_02.02.0110',
    label: 'Notice period for the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter notice period (days)',
    description: 'Notice period required for the service provider'
  },
  {
    id: 'b_02.02.0120',
    label: 'Country of the governing law of the contractual arrangement',
    fieldType: 'country',
    required: true,
    description: 'Country whose laws govern the contract'
  },
  {
    id: 'b_02.02.0130',
    label: 'Country of provision of the ICT services',
    fieldType: 'country',
    required: true,
    description: 'Country where the ICT services are provided from'
  },
  {
    id: 'b_02.02.0140',
    label: 'Storage of data',
    fieldType: 'closedOptions',
    required: true,
    options: ['Yes', 'No'],
    description: 'Whether data is stored by the service provider'
  },
  {
    id: 'b_02.02.0150',
    label: 'Location of the data at rest (storage)',
    fieldType: 'country',
    required: false,
    description: 'Country where the data is stored'
  },
  {
    id: 'b_02.02.0160',
    label: 'Location of management of the data (processing)',
    fieldType: 'country',
    required: false,
    description: 'Country where the data is processed'
  },
  {
    id: 'b_02.02.0170',
    label: 'Sensitiveness of the data stored by the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: dataSensitivityOptions,
    description: 'Sensitivity level of the stored data'
  },
  {
    id: 'b_02.02.0180',
    label: 'Level of reliance on the ICT service supporting the critical or important function',
    fieldType: 'closedOptions',
    required: true,
    options: relianceLevelOptions,
    description: 'Level of reliance on the ICT service'
  }
];
