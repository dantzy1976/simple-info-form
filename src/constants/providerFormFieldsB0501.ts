import { FormField } from './types';
import { annexIII } from './annexIII';

export const providerFormFieldsB0501: FormField[] = [
  {
    id: 'b_05.01.0010',
    label: 'Identification code of ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter identification code',
    description: 'Unique identifier for the ICT third-party service provider',
    info: {
      title: 'ICT Third-Party Service Provider Identification Code Information',
      type: 'Alphanumerical',
      instruction: "Code to identify the ICT third-party service provider",
      option: "Mandatory"
    }
  },
  {
    id: 'b_05.01.0020',
    label: 'Type of code to identify the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: annexIII,
    description: 'Pattern/type of the identification code',
    info: {
      title: 'Service Provider Code Type Information',
      type: 'Pattern',
      instruction: "Identify the type of code to identify the ICT third-party service provider in b_05.01.0010\n\n1.\t'LEI' for LEI\n2.\t'Country Code'+Underscore+'Type of Code' for non LEI code\n\nCountry Code: Identify the ISO 3166–1 alpha–2 code of the country of issuance of the other code to identify the ICT third-party service provider\n\nType of Code:\n1.\tCRN for Corporate registration number\n2.\tVAT for VAT number\n3.\tPNR for Passport Number\n4.\tNIN for National Identity Number",
      option: "Mandatory",
      reference: "LISTANNEXIII"
    }
  },
  {
    id: 'b_05.01.0030',
    label: 'Name of the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter provider name',
    description: 'Legal name of the ICT third-party service provider',
    info: {
      title: 'Service Provider Name Information',
      type: 'Alphanumerical',
      instruction: "Legal name of the ICT third-party service provider",
      option: "Mandatory"
    }
  },
  {
    id: 'b_05.01.0040',
    label: 'Type of person of the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    description: 'Type of person of the ICT service provider',
    info: {
      title: 'Service Provider Person Type Information',
      type: 'Closed set of options',
      instruction: "One of the options in the corresponding dropdown list shall be used.\nProviding the LEI is mandatory for legal person including natural persons acting in a business capacity",
      option: "Mandatory",
      reference: "LIST0501040"
    }
  },
  {
    id: 'b_05.01.0050',
    label: 'Country of the ICT third-party service provider\'s headquarters',
    fieldType: 'country',
    required: true,
    description: 'Country where the ICT service provider is headquartered',
    info: {
      title: 'Service Provider Headquarters Country Information',
      type: 'Country',
      instruction: "Identify the ISO 3166–1 alpha–2 code of the country in which the global operating headquarters of ICT third-party service provider are located.",
      option: "Mandatory",
      reference: "LISTCOUNTRY"
    }
  },
  {
    id: 'b_05.01.0060',
    label: 'Currency of the amount reported in RT.05.01.0070',
    fieldType: 'currency',
    required: true,
    description: 'Currency used for the reported cost',
    info: {
      title: 'Currency Information',
      type: 'Currency',
      instruction: "Identify the ISO 4217 alphabetic code of the currency used to express the amount in b_05.01.0070",
      option: "Mandatory if RT.05.01.0070 is reported",
      reference: "LISTCURRENCY"
    }
  },
  {
    id: 'b_05.01.0070',
    label: 'Total annual expense or estimated cost of the ICT third-party service provider',
    fieldType: 'monetary',
    required: true,
    placeholder: 'Enter amount',
    description: 'Total annual expense or estimated cost',
    info: {
      title: 'Annual Expense Information',
      type: 'Monetary',
      instruction: "Annual expense or estimated cost for using the ICT services provided by the ICT third-party service provider to the entities making use of the ICT services",
      option: "Mandatory if the ICT third-party service provider is a direct ICT third-party service provider"
    }
  },
  {
    id: 'b_05.01.0080',
    label: 'Identification code of the ICT third-party service provider\'s ultimate parent undertaking',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter identification code',
    description: 'Identification code of the ultimate parent undertaking',
    info: {
      title: 'Ultimate Parent Undertaking Identification Code Information',
      type: 'Alphanumerical',
      instruction: "Code to identify the ICT third-party service provider's ultimate parent undertaking",
      option: "Mandatory if the ICT third-party service provider is not the ultimate parent undertaking"
    }
  },
  {
    id: 'b_05.01.0090',
    label: 'Type of code to identify the ICT third-party service provider\'s ultimate parent undertaking',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter code type',
    description: 'Pattern/type of the identification code for the parent undertaking',
    info: {
      title: 'Ultimate Parent Undertaking Code Type Information',
      type: 'Pattern',
      instruction: "Identify the type of code to identify the ICT third-party service provider's ultimate parent undertaking in b_05.01.0080\n\n1.\t'LEI' for LEI\n2.\t'Country Code'+Underscore+'Type of Code' for non LEI code\n\nCountry Code: Identify the ISO 3166–1 alpha–2 code of the country of issuance of the other code to identify the ICT third-party service provider\n\nType of Code:\n1.\tCRN for Corporate registration number\n2.\tVAT for VAT number\n3.\tPNR for Passport Number\n4.\tNIN for National Identity Number",
      option: "Mandatory if the ICT third-party service provider is not the ultimate parent undertaking"
    }
  }
];
