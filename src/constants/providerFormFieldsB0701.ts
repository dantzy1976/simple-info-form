import { FormField } from './types';
import { annexIII } from './annexIII';
import { binaryOptions } from './binaryOptions';

export const providerFormFieldsB0701: FormField[] = [
  {
    id: 'b_07.01.0010',
    label: 'Contractual arrangement reference number',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter the contractual arrangement reference number',
    info: {
      title: 'Contractual Arrangement Reference Number Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_02.01.0010",
      option: "Mandatory"
    }
  },
  {
    id: 'b_07.01.0020',
    label: 'Identification code of the ICT third-party service provider',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter the identification code',
    info: {
      title: 'ICT Provider Identification Code Information',
      type: 'Alphanumerical',
      instruction: "As reported in b_05.01.0010",
      option: "Mandatory"
    }
  },
  {
    id: 'b_07.01.0030',
    label: 'Type of code to identify the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'LEI',
      'MIC',
      'BIC',
      'NATIONAL_CODE',
      'OTHER'
    ],
    info: {
      title: 'Code Type Information',
      type: 'Pattern',
      instruction: "As reported in b_05.01.0020",
      option: "Mandatory"
    }
  },
  {
    id: 'b_07.01.0040',
    label: 'Type of ICT services',
    fieldType: 'closedOptions',
    required: true,
    options: annexIII,
    info: {
      title: 'ICT Services Type Information',
      type: 'Closed set of options',
      instruction: "One of the types of ICT services referred to in Annex III",
      option: "Mandatory",
      reference: "LISTANNEXIII"
    }
  },
  {
    id: 'b_07.01.0050',
    label: 'Substitutability of the ICT third-party service provider',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'SUBSTITUTABLE',
      'DIFFICULT TO SUBSTITUTE',
      'NOT SUBSTITUTABLE'
    ],
    info: {
      title: 'Substitutability Assessment Information',
      type: 'Closed set of options',
      instruction: "Use this column to provide the results of the financial entity's assessment in relation to the degree of substitutability of the ICT third-party service provider to perform the specific ICT services supporting a critical or important function.\n\nOne of the options in the corresponding dropdown list shall be used",
      option: "Mandatory",
      reference: "LIST0701050"
    }
  },
  {
    id: 'b_07.01.0060',
    label: 'Reason if the ICT third-party service provider is considered not substitutable or difficult to be substitutable',
    fieldType: 'closedOptions',
    required: false,
    options: [
      'LIMITED NUMBER OF AVAILABLE PROVIDERS ON THE MARKET',
      'CONTRACTUAL CONSTRAINTS',
      'DIFFICULTY TO ENSURE DATA PORTABILITY',
      'OTHER'
    ],
    description: 'Only required if provider is difficult to substitute or not substitutable',
    info: {
      title: 'Substitutability Reason Information',
      type: 'Closed set of options',
      instruction: "One of the options in the corresponding dropdown list shall be used",
      option: "Mandatory in case \"not substitutable\" or \"highly complex substitutability\" is selected in RT.07.01.0050",
      reference: "LIST0701060"
    }
  },
  {
    id: 'b_07.01.0070',
    label: 'Date of the last audit on the ICT third-party service provider',
    fieldType: 'date',
    required: false,
    description: 'Date of the last audit performed',
    info: {
      title: 'Last Audit Date Information',
      type: 'Date',
      instruction: "Use this column to provide the date of the last audit on the specific ICT services provided by the ICT third-party service provider.\n\nThis column relates to audits conducted by:\n(i)\tthe internal audit department or any other additional qualified personnel of the financial entity,\n(ii)\ta joint team together with other clients of the same ICT third-party service provider (\"pooled audit\") or\n(iii)\ta third party appointed by the supervised entity to audit the service provider.\nThis column does not relate to the reception or reference date of third-party certifications or internal audit reports of the ICT third-party service provider, the annual monitoring date of the arrangement by the financial entity or the date of review of the risk assessment by the financial entity.\n\nThis column shall be used to report all types of audits performed by any of the subjects listed above concerning fully or partially the ICT services provided by the ICT third-party service provider.\n\nTo report the date, the ISO 8601 (yyyy–mm–dd) code shall be used.\nIf no audit has been performed, it shall be filled in with '9999-12-31'.",
      option: "Mandatory"
    }
  },
  {
    id: 'b_07.01.0080',
    label: 'Existence of an exit plan',
    fieldType: 'closedOptions',
    required: true,
    options: binaryOptions,
    info: {
      title: 'Exit Plan Information',
      type: '[Yes/No]',
      instruction: "Use this column to report the existence of an exit plan from the ICT third-party service provider in relation to the specific ICT service provided.\n\nOne of the options in the corresponding dropdown list shall be used:",
      option: "Mandatory",
      reference: "LISTBINARY"
    }
  },
  {
    id: 'b_07.01.0090',
    label: 'Possibility of reintegration of the contracted ICT service',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'REINTEGRATION POSSIBLE',
      'REINTEGRATION DIFFICULT',
      'REINTEGRATION NOT POSSIBLE'
    ],
    info: {
      title: 'Reintegration Possibility Information',
      type: 'Closed set of options',
      instruction: "One of the options in the corresponding dropdown list shall be used\nIn case the ICT service is provided by an ICT third-party service provider that is not an ICT intra-group service provider",
      option: "Mandatory",
      reference: "LIST0701090"
    }
  },
  {
    id: 'b_07.01.0100',
    label: 'Impact of discontinuing the ICT services',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'LOW IMPACT',
      'MEDIUM IMPACT',
      'HIGH IMPACT',
      'VERY HIGH IMPACT'
    ],
    info: {
      title: 'Discontinuing Impact Information',
      type: 'Closed set of options',
      instruction: "Use this column to provide the impact for the financial entity of discontinuing the ICT services provided by the ICT third-party service provider according to the financial entity's assessment.\n\nOne of the options in the corresponding dropdown list shall be used.",
      option: "Mandatory",
      reference: "LIST0601100"
    }
  },
  {
    id: 'b_07.01.0110',
    label: 'Are there alternative ICT third-party service providers identified?',
    fieldType: 'closedOptions',
    required: true,
    options: [
      'Yes, more than one',
      'Yes, one',
      'No'
    ],
    info: {
      title: 'Alternative Providers Information',
      type: 'Closed set of options',
      instruction: "One of the options in the corresponding dropdown list shall be used.\n\nIn principle, for each ICT third-party service provider supporting a critical or important function, the assessment to identify an alternative service provider shall be performed.",
      option: "Mandatory",
      reference: "LIST0601050"
    }
  },
  {
    id: 'b_07.01.0120',
    label: 'Identification of alternative ICT TPP',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter the identification of alternative providers',
    description: 'Only required if alternative providers are identified',
    info: {
      title: 'Alternative Providers Identification Information',
      type: 'Alphanumerical',
      instruction: "If 'Yes' is reported in b_07.01.0110, additional information could be provided in this column",
      option: "Optional"
    }
  }
];
