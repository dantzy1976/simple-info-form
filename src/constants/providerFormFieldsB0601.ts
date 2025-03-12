
import { FormField } from './types';

export const providerFormFieldsB0601: FormField[] = [
  {
    id: 'b_06.01.0010',
    label: 'Function Identifier',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter function identifier',
    description: 'Unique identifier for the function'
  },
  {
    id: 'b_06.01.0020',
    label: 'Licenced activity',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Banking',
      'Payment Services',
      'Investment Services',
      'Insurance',
      'Asset Management',
      'Credit Rating',
      'Other'
    ],
    description: 'Type of licenced activity'
  },
  {
    id: 'b_06.01.0030',
    label: 'Function name',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter function name',
    description: 'Name of the function'
  },
  {
    id: 'b_06.01.0040',
    label: 'LEI of the financial entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'Legal Entity Identifier of the financial entity'
  },
  {
    id: 'b_06.01.0050',
    label: 'Criticality or importance assessment',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Critical',
      'Important',
      'Not critical or important'
    ],
    description: 'Assessment of the criticality or importance of the function'
  },
  {
    id: 'b_06.01.0060',
    label: 'Reasons for criticality or importance',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter reasons',
    description: 'Justification for the criticality or importance assessment'
  },
  {
    id: 'b_06.01.0070',
    label: 'Date of the last assessment of criticality or importance',
    fieldType: 'date',
    required: false,
    description: 'When the last assessment was conducted'
  },
  {
    id: 'b_06.01.0080',
    label: 'Recovery time objective of the function',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter hours',
    description: 'Maximum acceptable time for recovery (in hours)'
  },
  {
    id: 'b_06.01.0090',
    label: 'Recovery point objective of the function',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter minutes',
    description: 'Maximum acceptable period of data loss (in minutes)'
  },
  {
    id: 'b_06.01.0100',
    label: 'Impact of discontinuing the function',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'High',
      'Medium',
      'Low'
    ],
    description: 'Severity of impact if the function is discontinued'
  }
];
