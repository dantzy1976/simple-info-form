
import { FormField } from './types';

export const providerFormFieldsB0303: FormField[] = [
  {
    id: 'b_03.03.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement',
    info: {
      title: 'Contractual Arrangement Reference Number Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_02.02.0010\n\nIdentify the contractual reference number signed by the entity for providing ICT service(s)",
      option: "Mandatory"
    }
  },
  {
    id: 'b_03.03.0020',
    label: 'LEI of the entity providing ICT services',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI',
    description: 'Legal Entity Identifier of the entity providing ICT services',
    info: {
      title: 'Entity LEI Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_01.02.0010\n\nIdentify the entity providing ICT services using LEI, 20-character, alpha-numeric code based on the ISO 17442 standard",
      option: "Mandatory"
    }
  },
  {
    id: 'b_03.03.0031',
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
