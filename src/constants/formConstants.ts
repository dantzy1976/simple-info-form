
export interface FormField {
  id: string;
  label: string;
  fieldType: 'alphanumerical' | 'country' | 'closedOptions' | 'date';
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export const entityFormFields: FormField[] = [
  {
    id: 'b_01.01.0010',
    label: 'LEI of the entity maintaining the register of information',
    fieldType: 'alphanumerical',
    placeholder: 'Enter LEI code',
    required: true,
  },
  {
    id: 'b_01.01.0020',
    label: 'Name of the entity',
    fieldType: 'alphanumerical',
    placeholder: 'Enter entity name',
    required: true,
  },
  {
    id: 'b_01.01.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true,
  },
  {
    id: 'b_01.01.0040',
    label: 'Type of entity',
    fieldType: 'closedOptions',
    required: true,
    options: [
      '(CT:x12) Credit institutions',
      '(CT:x599) Investment firms',
      '(CT:x643) Central counterparties (CCPs)',
      '(CT:x639) Asset management companies',
      '(CT:x301) account information service providers',
      '(CT:x302) electronic money institutions',
      '(CT:x303) crypto-asset service providers',
      '(CT:x304) central security depository',
      '(CT:x305) trading venues',
      '(CT:x306) trade repositories',
      '(CT:x300) payment institution',
      '(CT:x316) other financial entity',
      '(CT:x315) securitisation repository',
      '(CT:x314) crowdfunding service providers',
      '(CT:x313) administrator of critical benchmarks',
      '(CT:x312) credit rating agency',
      '(CT:x311) institutions for occupational retirement provision',
      '(CT:x320) insurance intermediaries, reinsurance intermediaries and ancillary insurance intermediaries',
      '(CT:x309) insurance and reinsurance undertakings',
      '(CT:x308) data reporting service providers',
      '(CT:x307) managers of alternative investment funds',
      '(CT:x310) issuers of asset-referenced tokens',
    ],
  },
  {
    id: 'b_01.01.0050',
    label: 'Competent Authority',
    fieldType: 'alphanumerical',
    placeholder: 'Enter competent authority',
    required: true,
  },
  {
    id: 'b_01.01.0060',
    label: 'Date of the reporting',
    fieldType: 'date',
    required: true,
  },
];

// List of countries for dropdown
export const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", 
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", 
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", 
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", 
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", 
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", 
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", 
  "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", 
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", 
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
  "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", 
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", 
  "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", 
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", 
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
