
import { FormField } from './types';

export const entityFormFields3: FormField[] = [
  {
    id: 'b_01.03.0010',
    label: 'Identification code of the branch',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter branch identification code',
    description: 'b_01.03.0010',
    info: {
      title: 'Branch Identification Code Information',
      type: 'Alphanumerical',
      instruction: "Identify a branch of a financial entity located outside its home country using a unique code for each branch. One of the options in the following closed list shall be used:\n-LEI of the branch if unique for this branch and different from b_01.03.0020;\n-Other identification code used by the financial entity to identify the branch (if the LEI of the branch is equivalent to the one in b_01.03.0020 or equivalent to the LEI of another branch).",
      option: "Mandatory"
    }
  },
  {
    id: 'b_01.03.0020',
    label: 'LEI of the financial entity head office of the branch',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'b_01.03.0020',
    info: {
      title: 'Financial Entity Head Office LEI Information',
      type: 'Alphanumerical',
      instruction: "As referred to in b_01.02.0010\n\nIdentify the financial entity head office of the branch, using the LEI, 20-character, alpha-numeric code based on the ISO 17442 standard",
      option: "Mandatory"
    }
  },
  {
    id: 'b_01.03.0030',
    label: 'Name of the branch',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter branch name',
    description: 'b_01.03.0030',
    info: {
      title: 'Branch Name Information',
      type: 'Alphanumerical',
      instruction: "Identify the name of the branch",
      option: "Mandatory"
    }
  },
  {
    id: 'b_01.03.0040',
    label: 'Country of the branch',
    fieldType: 'country',
    required: true,
    description: 'b_01.03.0040',
    info: {
      title: 'Branch Country Information',
      type: 'Country',
      instruction: "Identify the ISO 3166–1 alpha–2 code of the country where the branch is located.",
      option: "Mandatory",
      reference: "LISTCOUNTRY"
    }
  }
];
