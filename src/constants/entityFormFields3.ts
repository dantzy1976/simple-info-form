
import { FormField } from './types';

export const entityFormFields3: FormField[] = [
  {
    id: 'b_01.03.0010',
    label: 'Identification code of the branch',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter branch identification code',
    description: 'b_01.03.0010'
  },
  {
    id: 'b_01.03.0020',
    label: 'LEI of the financial entity head office of the branch',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'b_01.03.0020'
  },
  {
    id: 'b_01.03.0030',
    label: 'Name of the branch',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter branch name',
    description: 'b_01.03.0030'
  },
  {
    id: 'b_01.03.0040',
    label: 'Country of the branch',
    fieldType: 'country',
    required: true,
    description: 'b_01.03.0040'
  }
];
