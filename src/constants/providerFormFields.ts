
import { FormField } from './types';
import { annexIII } from './annexIII';

// Contract type options
const contractTypeOptions = [
  '01\tIT Hardware',
  '02\tSoftware licensing',
  '03\tSoftware development and customization',
  '04\tSoftware maintenance and support',
  '05\tIT consultancy',
  '06\tIT outsourcing',
  '07\tNetwork services',
  '08\tCloud services',
  '09\tData processing',
  '10\tData storage',
  '11\tIT security',
  '12\tOther IT services'
];

// Form fields for b_02.01
export const providerFormFieldsB0201: FormField[] = [
  {
    id: 'b_02.01.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique reference number for the contractual arrangement',
    info: {
      title: 'Contractual Arrangement Reference Number Information',
      type: 'Alphanumerical',
      instruction: "Identify the contractual arrangement between the financial entity or, in case of a group, the group subsidiary and the direct ICT third-party service provider.\n\nThe contractual arrangement reference number is the internal reference number of the contractual arrangement assigned by the financial entity.\n\nThe contractual arrangement reference number shall be unique and consistent over time at entity, sub-consolidated and consolidated level, where applicable.\n\nThe contractual arrangement reference number shall be used consistently across all templates of the register of information when referring to the same contractual arrangement.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.01.0020',
    label: 'Type of contractual arrangement',
    fieldType: 'closedOptions',
    required: true,
    options: contractTypeOptions,
    description: 'Select the type of contractual arrangement',
    info: {
      title: 'Type of Contractual Arrangement Information',
      type: 'Closed set of options',
      instruction: "Identify the type of contractual arrangement by using one of the options in the corresponding dropdown list",
      option: "Mandatory",
      reference: "LIST0201020"
    }
  },
  {
    id: 'b_02.01.0030',
    label: 'Overarching contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter overarching reference number',
    description: 'Reference number for any overarching contractual arrangement',
    info: {
      title: 'Overarching Contractual Arrangement Reference Number Information',
      type: 'Alphanumerical',
      instruction: "Not applicable if the contractual arrangement is the 'overarching contractual arrangement' or a 'standalone arrangement'. In the other cases, report the contractual arrangement reference number of the overarching arrangement, which shall be equal to value as reported in the column b_02.01.0010 when reporting the overarching contractual arrangement.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.01.0040',
    label: 'Currency of the amount reported in RT.02.01.0050',
    fieldType: 'currency',
    required: true,
    description: 'Select the currency for the reported amount',
    info: {
      title: 'Currency Information',
      type: 'Currency',
      instruction: "Identify the ISO 4217 alphabetic code of the currency used to express the amount in b_02.01.0050",
      option: "Mandatory",
      reference: "LISTCURRENCY"
    }
  },
  {
    id: 'b_02.01.0050',
    label: 'Annual expense or estimated cost of the contractual arrangement for the past year',
    fieldType: 'monetary',
    required: true,
    placeholder: 'Enter amount',
    description: 'The annual expense or estimated cost (numeric value)',
    info: {
      title: 'Annual Expense or Estimated Cost Information',
      type: 'Monetary',
      instruction: "Annual expense or estimated cost (or intragroup transfer) of the ICT service arrangement for the past year.\n\nThe annual expense or estimated cost shall be expressed in the currency reported in b_01.02.0040.\n\nIn case of an overarching arrangement with subsequent or associated arrangements, the sum of the annual expenses or estimated costs reported for the overarching arrangement and the subsequent or associated arrangements shall be equal to the total expenses or estimated costs for the overall contractual arrangement. This means, there should be no repetition or duplication of annual expenses or estimated costs. The following cases should be reflected:\n(a) if the annual expenses or estimate costs are not determined at the level of the overarching arrangement (i.e. they are 0), the annual expenses or estimated costs should be reported at the level of each subsequent or associated arrangements.\n(b) if the annual expenses or estimated costs cannot be reported for each of the subsequent or associated arrangements, the total annual expense or estimated cost should be reported at the level of the overarching arrangement.\n(c) if there are annual expenses or estimated costs related to each level of the arrangement, i.e. overarching and subsequent or associated, and this information is available, the annual expenses or estimated costs shall be reported without duplication at each level of the contractual arrangement.",
      option: "Mandatory"
    }
  }
];
