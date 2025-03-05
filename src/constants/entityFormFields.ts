
import { FormField } from './types';
import { countries } from './countries';

export const entityFormFields: FormField[] = [
  {
    id: 'b_01.01.0010',
    label: 'LEI of the entity maintaining the register of information',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'b_01.01.0010'
  },
  {
    id: 'b_01.01.0020',
    label: 'Name of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name',
    description: 'b_01.01.0020'
  },
  {
    id: 'b_01.01.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true,
    description: 'b_01.01.0030'
  },
  {
    id: 'b_01.01.0040',
    label: 'Type of entity',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.01.0040',
    options: [
      { id: 'eba_CT:x12', label: 'Credit institutions' },
      { id: 'eba_CT:x599', label: 'Investment firms' },
      { id: 'eba_CT:x643', label: 'Central counterparties (CCPs)' },
      { id: 'eba_CT:x639', label: 'Asset management companies' },
      { id: 'eba_CT:x301', label: 'Account information service providers' },
      { id: 'eba_CT:x302', label: 'Electronic money institutions' },
      { id: 'eba_CT:x303', label: 'Crypto-asset service providers' },
      { id: 'eba_CT:x304', label: 'Central security depository' },
      { id: 'eba_CT:x305', label: 'Trading venues' },
      { id: 'eba_CT:x306', label: 'Trade repositories' },
      { id: 'eba_CT:x300', label: 'Payment institution' },
      { id: 'eba_CT:x316', label: 'Other financial entity' },
      { id: 'eba_CT:x315', label: 'Securitisation repository' },
      { id: 'eba_CT:x314', label: 'Crowdfunding service providers' },
      { id: 'eba_CT:x313', label: 'Administrator of critical benchmarks' },
      { id: 'eba_CT:x312', label: 'Credit rating agency' },
      { id: 'eba_CT:x311', label: 'Institutions for occupational retirement provision' },
      { id: 'eba_CT:x320', label: 'Insurance intermediaries, reinsurance intermediaries and ancillary insurance intermediaries' },
      { id: 'eba_CT:x309', label: 'Insurance and reinsurance undertakings' },
      { id: 'eba_CT:x308', label: 'Data reporting service providers' },
      { id: 'eba_CT:x307', label: 'Managers of alternative investment funds' },
      { id: 'eba_CT:x318', label: 'Non-financial entity: Other than ICT intra-group service provider' },
      { id: 'eba_CT:x317', label: 'Non-financial entity: ICT intra-group service provider' }
    ]
  },
  {
    id: 'b_01.01.0050',
    label: 'Competent Authority',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter authority name',
    description: 'b_01.01.0050'
  },
  {
    id: 'b_01.01.0060',
    label: 'Date of the reporting',
    fieldType: 'date',
    required: true,
    description: 'b_01.01.0060'
  }
];
