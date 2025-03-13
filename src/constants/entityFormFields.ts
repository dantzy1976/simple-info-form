
import { FormField } from './types';
import { countries } from './countries';

export const entityFormFields: FormField[] = [
  {
    id: 'b_01.01.0010',
    label: 'LEI of the entity maintaining the register of information',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'b_01.01.0010',
    info: {
      title: 'TEMPLATE RT.01.01: Entity maintaining the register of information',
      instruction: 'Identify the entity maintaining and updating the register of information using the LEI, 20-character, alpha-numeric code based on the ISO 17442 standard',
      type: 'Alphanumerical',
      option: 'Mandatory'
    }
  },
  {
    id: 'b_01.01.0020',
    label: 'Name of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name',
    description: 'b_01.01.0020',
    info: {
      title: 'TEMPLATE RT.01.01: Entity maintaining the register of information',
      instruction: 'Legal name of the entity maintaining and updating the register of information',
      type: 'Alphanumerical',
      option: 'Mandatory'
    }
  },
  {
    id: 'b_01.01.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true,
    description: 'b_01.01.0030',
    info: {
      title: 'TEMPLATE RT.01.01: Entity maintaining the register of information',
      instruction: 'Identify the ISO 3166–1 alpha–2 code of the country where the license or the registration of the entity reported in the Register on Information has been issued.',
      type: 'Country',
      option: 'Mandatory',
      reference: 'LISTCOUNTRY'
    }
  },
  {
    id: 'b_01.01.0040',
    label: 'Type of entity',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.01.0040',
    info: {
      title: 'TEMPLATE RT.01.01: Entity maintaining the register of information',
      instruction: 'Identify the type of entity using one of the options in the corresponding dropdown list',
      type: 'Closed set of options',
      option: 'Mandatory',
      reference: 'LIST0101040'
    }
  },
  {
    id: 'b_01.01.0050',
    label: 'Competent Authority',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter authority name',
    description: 'b_01.01.0050',
    info: {
      title: 'TEMPLATE RT.01.01: Entity maintaining the register of information',
      instruction: 'Identify the competent authority according to Article 46 of Regulation (EU) 2022/2554 to which the register of information is reported.',
      type: 'Alphanumerical',
      option: 'Mandatory in case of reporting'
    }
  },
  {
    id: 'b_01.01.0060',
    label: 'Date of the reporting',
    fieldType: 'date',
    required: true,
    description: 'b_01.01.0060',
    info: {
      title: 'TEMPLATE RT.01.01: Entity maintaining the register of information',
      instruction: 'Identify the ISO 8601 (yyyy–mm–dd) code of the date of reporting',
      type: 'Date',
      option: 'Mandatory in case of reporting'
    }
  }
];
