import { FormField } from './types';
import { criticalityOptions } from './criticalityOptions';
import { licensedActivities } from './licensedActivities';
import { impactOptions } from './impactOptions';

export const providerFormFieldsB0601: FormField[] = [
  {
    id: 'b_06.01.0010',
    label: 'Function Identifier',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter function identifier',
    description: 'Unique identifier for the function',
    info: {
      title: 'Function Identifier Information',
      type: 'Pattern',
      instruction: "The function identifier shall be composed by the letter F (capital letter) followed by an natural number (e.g. \"F1\" for the 1st function identifier and \"Fn\" for the nth function identifier with \"n\" being an natural number).\n\nEach combination between 'LEI of the financial entity making use of the ICT service(s)' (b_06.01.0040), 'Function name' (b_06.01.0030) and 'Licenced activity' (b_06.01.0020) shall have a unique function identifier\n\nExample: a financial entity which operates under two licensed activities (say, activity A and activity B) will identify two unique 'function identifiers' for the same function X (e.g. Sales) performed for activity A and activity B.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_06.01.0020',
    label: 'Licenced activity',
    fieldType: 'closedOptions',
    required: true,
    options: licensedActivities,
    description: 'Type of licenced activity',
    info: {
      title: 'Licensed Activity Information',
      type: 'Closed set of options',
      instruction: "One of the licenced activities referred to in Annex II for the different type of financial entities.\nIn case the function is not linked to a registered or licenced activity, 'support functions' shall be reported.",
      option: "Mandatory",
      reference: "LIST0601020"
    }
  },
  {
    id: 'b_06.01.0030',
    label: 'Function name',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter function name',
    description: 'Name of the function',
    info: {
      title: 'Function Name Information',
      type: 'Alphanumerical',
      instruction: "Function name according to the financial entity's internal organisation.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_06.01.0040',
    label: 'LEI of the financial entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'Legal Entity Identifier of the financial entity',
    info: {
      title: 'LEI Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_04.01.0020\nIdentify the financial entity using the LEI, 20-character, alpha-numeric code based on the ISO 17442 standard",
      option: "Mandatory"
    }
  },
  {
    id: 'b_06.01.0050',
    label: 'Criticality or importance assessment',
    fieldType: 'closedOptions',
    required: true,
    options: criticalityOptions,
    description: 'Assessment of the criticality or importance of the function',
    info: {
      title: 'Criticality Assessment Information',
      type: 'Closed set of options',
      instruction: "Use this column to indicate whether the function is critical or important according to the financial entity's assessment. One of the options in the corresponding dropdown list shall be used:",
      option: "Mandatory",
      reference: "LIST0601050"
    }
  },
  {
    id: 'b_06.01.0060',
    label: 'Reasons for criticality or importance',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter reasons',
    description: 'Justification for the criticality or importance assessment',
    info: {
      title: 'Criticality Reasons Information',
      type: 'Alphanumerical',
      instruction: "Brief explanation on the reasons to classify the function as critical or important (300 characters maximum)",
      option: "Optional"
    }
  },
  {
    id: 'b_06.01.0070',
    label: 'Date of the last assessment of criticality or importance',
    fieldType: 'date',
    required: false,
    description: 'When the last assessment was conducted',
    info: {
      title: 'Last Assessment Date Information',
      type: 'Date',
      instruction: "Identify the ISO 8601 (yyyy–mm–dd) code of the date of the last assessment of criticality or importance in case the function is supported by ICT services provided by ICT third-party service providers.\nIn case the function's assessment of criticality or importance is not performed, it shall be filled in with '9999-12-31'",
      option: "Mandatory"
    }
  },
  {
    id: 'b_06.01.0080',
    label: 'Recovery time objective of the function',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter hours',
    description: 'Maximum acceptable time for recovery (in hours)',
    info: {
      title: 'Recovery Time Objective Information',
      type: 'Natural number',
      instruction: "In number of hours. If the recovery time objective is less than 1 hour, '1' shall be reported. In case the recovery time objective of the function is not defined '0' shall be reported.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_06.01.0090',
    label: 'Recovery point objective of the function',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter minutes',
    description: 'Maximum acceptable period of data loss (in minutes)',
    info: {
      title: 'Recovery Point Objective Information',
      type: 'Natural number',
      instruction: "In number of hours. If the recovery point objective is less than 1 hour, '1' shall be reported. In case the recovery time objective of the function is not defined '0' shall be reported.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_06.01.0100',
    label: 'Impact of discontinuing the function',
    fieldType: 'closedOptions',
    required: true,
    options: impactOptions,
    description: 'Severity of impact if the function is discontinued',
    info: {
      title: 'Impact Assessment Information',
      type: 'Closed set of options',
      instruction: "Use this column to indicate the impact of discontinuing the function according to the financial entity's assessment. One of the options in the corresponding dropdown list shall be used.",
      option: "Mandatory",
      reference: "LIST0601100"
    }
  }
];
