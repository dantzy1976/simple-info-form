
import { FormField } from './types';

export const providerFormFieldsB0203: FormField[] = [
  {
    id: 'b_02.03.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter reference number',
    description: 'Unique identifier for the contractual arrangement',
    info: {
      title: 'Contractual Arrangement Reference Number Information',
      type: 'Alphanumerical',
      instruction: "Contractual arrangement reference number between the entity making use of the ICT service(s) provided and the ICT intra-group service provider.\n\nThe contractual arrangement reference number shall be unique and consistent over time and across all the group.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.03.0020',
    label: 'Contractual arrangement linked to the contractual arrangement referred in RT.02.03.0010',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter linked arrangement reference',
    description: 'Reference number of the linked contractual arrangement',
    info: {
      title: 'Linked Contractual Arrangement Information',
      type: 'Alphanumerical',
      instruction: "Contractual arrangement reference number of the contractual arrangement between the ICT intra-group service provider of the contractual arrangement in b_02.03.0010 and its direct ICT third-party service provider",
      option: "Mandatory"
    }
  },
  {
    id: 'b_02.03.0030',
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
