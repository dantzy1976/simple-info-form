
import { FormField } from './formConstants';

// Currency options
const currencyOptions = [
  'EUR\tEuro',
  'USD\tUS Dollar',
  'GBP\tBritish Pound',
  'JPY\tJapanese Yen',
  'CHF\tSwiss Franc',
  'CAD\tCanadian Dollar',
  'AUD\tAustralian Dollar',
  'CNY\tChinese Yuan',
  'SEK\tSwedish Krona',
  'NZD\tNew Zealand Dollar',
  'MXN\tMexican Peso',
  'SGD\tSingapore Dollar',
  'HKD\tHong Kong Dollar',
  'NOK\tNorwegian Krone',
  'KRW\tSouth Korean Won',
  'TRY\tTurkish Lira',
  'INR\tIndian Rupee',
  'BRL\tBrazilian Real',
  'ZAR\tSouth African Rand'
];

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
    description: 'Unique reference number for the contractual arrangement'
  },
  {
    id: 'b_02.01.0020',
    label: 'Type of contractual arrangement',
    fieldType: 'closedOptions',
    required: true,
    options: contractTypeOptions,
    description: 'Select the type of contractual arrangement'
  },
  {
    id: 'b_02.01.0030',
    label: 'Overarching contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter overarching reference number',
    description: 'Reference number for any overarching contractual arrangement'
  },
  {
    id: 'b_02.01.0040',
    label: 'Currency of the amount reported in RT.02.01.0050',
    fieldType: 'currency',
    required: true,
    options: currencyOptions,
    description: 'Select the currency for the reported amount'
  },
  {
    id: 'b_02.01.0050',
    label: 'Annual expense or estimated cost of the contractual arrangement for the past year',
    fieldType: 'monetary',
    required: true,
    placeholder: 'Enter amount',
    description: 'The annual expense or estimated cost (numeric value)'
  }
];
