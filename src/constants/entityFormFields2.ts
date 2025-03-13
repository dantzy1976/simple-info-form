import { FormField } from './types';
import { countries } from './countries';

export const entityFormFields2: FormField[] = [
  {
    id: 'b_01.02.0010',
    label: 'LEI of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter LEI code',
    description: 'b_01.02.0010'
  },
  {
    id: 'b_01.02.0020',
    label: 'Name of the entity',
    fieldType: 'alphanumerical',
    required: true,
    placeholder: 'Enter entity name',
    description: 'b_01.02.0020',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Legal name of the entity reported in the register of information.',
      type: 'Alphanumerical',
      option: 'Mandatory'
    }
  },
  {
    id: 'b_01.02.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true,
    description: 'b_01.02.0030',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Identify the ISO 3166–1 alpha–2 code of the country where the license or the registration of the entity reported in the Register on Information has been issued.',
      type: 'Country',
      option: 'Mandatory',
      reference: 'LISTCOUNTRY'
    }
  },
  {
    id: 'b_01.02.0040',
    label: 'Type of entity',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.02.0040',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Identify the type of entity using one of the options in the corresponding dropdown list',
      type: 'Closed set of options',
      option: 'Mandatory',
      reference: 'LIST0101040'
    }
  },
  {
    id: 'b_01.02.0050',
    label: 'Hierarchy of the entity within the group (where applicable)',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.02.0050',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Identify the hierarchy of the entity within the scope of consolidation using one of the options in the corresponding dropdown list',
      type: 'Closed set of options',
      option: 'Mandatory',
      reference: 'LIST0102050'
    },
    options: [
      'eba_RP:x53\tUltimate parent',
      'eba_RP:x551\tParent other than ultimate parent',
      'eba_RP:x56\tSubsidiary',
      'eba_RP:x21\tEntities other than entities of the group',
      'eba_RP:x210\tOutsourcing'
    ]
  },
  {
    id: 'b_01.02.0060',
    label: 'LEI of the direct parent undertaking of the entity',
    fieldType: 'alphanumerical',
    required: false,
    placeholder: 'Enter parent LEI code',
    description: 'b_01.02.0060',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Identify the direct parent undertaking of the entity reported in the Register on Information using the LEI, 20-character, alpha-numeric code based on the ISO 17442 standard',
      type: 'Alphanumerical',
      option: 'Mandatory'
    }
  },
  {
    id: 'b_01.02.0070',
    label: 'Date of last update',
    fieldType: 'date',
    required: true,
    description: 'b_01.02.0070',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Identify the ISO 8601 (yyyy–mm–dd) code of the date of the last update made on the Register of information in relation to the entity.',
      type: 'Date',
      option: 'Mandatory'
    }
  },
  {
    id: 'b_01.02.0080',
    label: 'Date of integration in the Register of information',
    fieldType: 'date',
    required: true,
    description: 'b_01.02.0080',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Identify the ISO 8601 (yyyy–mm–dd) code of the date of integration in the Register of information',
      type: 'Date',
      option: 'Mandatory'
    }
  },
  {
    id: 'b_01.02.0090',
    label: 'Date of deletion in the Register of information',
    fieldType: 'date',
    required: false,
    description: 'b_01.02.0090',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Identify the ISO 8601 (yyyy–mm–dd) code of the date of deletion in the Register of information. If the entity has not been deleted, \'9999-12-31\' shall be reported',
      type: 'Date',
      option: 'Mandatory'
    }
  },
  {
    id: 'b_01.02.0100',
    label: 'Currency',
    fieldType: 'currency',
    required: true,
    description: 'b_01.02.0100',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Identify the ISO 4217 alphabetic code of the currency used for the preparation of the financial entity\'s financial statements',
      type: 'Currency',
      option: 'Mandatory',
      reference: 'LISTCURRENCY'
    },
    options: [
      { id: 'eba_CU:AED', label: 'UAE Dirham' },
      { id: 'eba_CU:AFN', label: 'Afghani' },
      { id: 'eba_CU:ALL', label: 'Lek' },
      { id: 'eba_CU:AMD', label: 'Armenian Dram' },
      { id: 'eba_CU:ANG', label: 'Netherlands Antillean Guilder' },
      { id: 'eba_CU:AOA', label: 'Kwanza' },
      { id: 'eba_CU:ARS', label: 'Argentine Peso' },
      { id: 'eba_CU:AUD', label: 'Australian Dollar' },
      { id: 'eba_CU:AWG', label: 'Aruban Florin' },
      { id: 'eba_CU:AZN', label: 'Azerbaijanian Manat' },
      { id: 'eba_CU:BAM', label: 'Convertible Mark' },
      { id: 'eba_CU:BBD', label: 'Barbados Dollar' },
      { id: 'eba_CU:BDT', label: 'Taka' },
      { id: 'eba_CU:BGN', label: 'Bulgarian Lev' },
      { id: 'eba_CU:BHD', label: 'Bahraini Dinar' },
      { id: 'eba_CU:BIF', label: 'Burundi Franc' },
      { id: 'eba_CU:BMD', label: 'Bermudian Dollar' },
      { id: 'eba_CU:BND', label: 'Brunei Dollar' },
      { id: 'eba_CU:BOB', label: 'Boliviano' },
      { id: 'eba_CU:BOV', label: 'Mvdol' },
      { id: 'eba_CU:BRL', label: 'Brazilian Real' },
      { id: 'eba_CU:BSD', label: 'Bahamian Dollar' },
      { id: 'eba_CU:BTN', label: 'Ngultrum' },
      { id: 'eba_CU:BWP', label: 'Pula' },
      { id: 'eba_CU:BYR', label: 'Belarussian Ruble (2000 Series)' },
      { id: 'eba_CU:BYN', label: 'Belarusian Ruble' },
      { id: 'eba_CU:BZD', label: 'Belize Dollar' },
      { id: 'eba_CU:CAD', label: 'Canadian Dollar' },
      { id: 'eba_CU:CDF', label: 'Congolese Franc' },
      { id: 'eba_CU:CHE', label: 'WIR Euro' },
      { id: 'eba_CU:CHF', label: 'Swiss Franc' },
      { id: 'eba_CU:CHW', label: 'WIR Franc' },
      { id: 'eba_CU:CLF', label: 'Unidades de fomento' },
      { id: 'eba_CU:CLP', label: 'Chilean Peso' },
      { id: 'eba_CU:CNY', label: 'Yuan Renminbi' },
      { id: 'eba_CU:COP', label: 'Colombian Peso' },
      { id: 'eba_CU:COU', label: 'Unidad de Valor Real' },
      { id: 'eba_CU:CRC', label: 'Costa Rican Colon' },
      { id: 'eba_CU:CUC', label: 'Peso Convertible' },
      { id: 'eba_CU:CUP', label: 'Cuban Peso' },
      { id: 'eba_CU:CVE', label: 'Cape Verde Escudo' },
      { id: 'eba_CU:CZK', label: 'Czech Koruna' },
      { id: 'eba_CU:DJF', label: 'Djibouti Franc' },
      { id: 'eba_CU:DKK', label: 'Danish Krone' },
      { id: 'eba_CU:DOP', label: 'Dominican Peso' },
      { id: 'eba_CU:DZD', label: 'Algerian Dinar' },
      { id: 'eba_CU:EGP', label: 'Egyptian Pound' },
      { id: 'eba_CU:ERN', label: 'Nakfa' },
      { id: 'eba_CU:ETB', label: 'Ethiopian Birr' },
      { id: 'eba_CU:EUR', label: 'Euro' },
      { id: 'eba_CU:FJD', label: 'Fiji Dollar' },
      { id: 'eba_CU:FKP', label: 'Falkland Islands Pound' },
      { id: 'eba_CU:GBP', label: 'Pound Sterling' },
      { id: 'eba_CU:GEL', label: 'Lari' },
      { id: 'eba_CU:GHS', label: 'Ghana Cedi' },
      { id: 'eba_CU:GIP', label: 'Gibraltar Pound' },
      { id: 'eba_CU:GMD', label: 'Dalasi' },
      { id: 'eba_CU:GNF', label: 'Guinea Franc' },
      { id: 'eba_CU:GTQ', label: 'Quetzal' },
      { id: 'eba_CU:GYD', label: 'Guyana Dollar' },
      { id: 'eba_CU:HKD', label: 'Hong Kong Dollar' },
      { id: 'eba_CU:HNL', label: 'Lempira' },
      { id: 'eba_CU:HTG', label: 'Gourde' },
      { id: 'eba_CU:HUF', label: 'Forint' },
      { id: 'eba_CU:IDR', label: 'Rupiah' },
      { id: 'eba_CU:ILS', label: 'New Israeli Sheqel' },
      { id: 'eba_CU:INR', label: 'Indian Rupee' },
      { id: 'eba_CU:IQD', label: 'Iraqi Dinar' },
      { id: 'eba_CU:IRR', label: 'Iranian Rial' },
      { id: 'eba_CU:ISK', label: 'Iceland Krona' },
      { id: 'eba_CU:JMD', label: 'Jamaican Dollar' },
      { id: 'eba_CU:JOD', label: 'Jordanian Dinar' },
      { id: 'eba_CU:JPY', label: 'Yen' },
      { id: 'eba_CU:KES', label: 'Kenyan Shilling' },
      { id: 'eba_CU:KGS', label: 'Som' },
      { id: 'eba_CU:KHR', label: 'Riel' },
      { id: 'eba_CU:KMF', label: 'Comoro Franc' },
      { id: 'eba_CU:KPW', label: 'North Korean Won' },
      { id: 'eba_CU:KRW', label: 'Won' },
      { id: 'eba_CU:KWD', label: 'Kuwaiti Dinar' },
      { id: 'eba_CU:KYD', label: 'Cayman Islands Dollar' },
      { id: 'eba_CU:KZT', label: 'Tenge' },
      { id: 'eba_CU:LAK', label: 'Kip' },
      { id: 'eba_CU:LBP', label: 'Lebanese Pound' },
      { id: 'eba_CU:LKR', label: 'Sri Lanka Rupee' },
      { id: 'eba_CU:LRD', label: 'Liberian Dollar' },
      { id: 'eba_CU:LSL', label: 'Loti' },
      { id: 'eba_CU:LTL', label: 'Lithuanian Litas' },
      { id: 'eba_CU:LVL', label: 'Latvian Lats' },
      { id: 'eba_CU:LYD', label: 'Libyan Dinar' },
      { id: 'eba_CU:MAD', label: 'Moroccan Dirham' },
      { id: 'eba_CU:MDL', label: 'Moldovan Leu' },
      { id: 'eba_CU:MGA', label: 'Malagasy Ariary' },
      { id: 'eba_CU:MKD', label: 'Denar' },
      { id: 'eba_CU:MMK', label: 'Kyat' },
      { id: 'eba_CU:MNT', label: 'Tugrik' },
      { id: 'eba_CU:MOP', label: 'Pataca' },
      { id: 'eba_CU:MRO', label: 'Ouguiya' },
      { id: 'eba_CU:MUR', label: 'Mauritius Rupee' },
      { id: 'eba_CU:MVR', label: 'Rufiyaa' },
      { id: 'eba_CU:MWK', label: 'Kwacha' },
      { id: 'eba_CU:MXN', label: 'Mexican Peso' },
      { id: 'eba_CU:MYR', label: 'Malaysian Ringgit' },
      { id: 'eba_CU:MZN', label: 'Mozambique Metical' },
      { id: 'eba_CU:NAD', label: 'Namibia Dollar' },
      { id: 'eba_CU:NGN', label: 'Naira' },
      { id: 'eba_CU:NIO', label: 'Cordoba Oro' },
      { id: 'eba_CU:NOK', label: 'Norwegian Krone' },
      { id: 'eba_CU:NPR', label: 'Nepalese Rupee' },
      { id: 'eba_CU:NZD', label: 'New Zealand Dollar' },
      { id: 'eba_CU:OMR', label: 'Rial Omani' },
      { id: 'eba_CU:PAB', label: 'Balboa' },
      { id: 'eba_CU:PEN', label: 'Nuevo Sol' },
      { id: 'eba_CU:PGK', label: 'Kina' },
      { id: 'eba_CU:PHP', label: 'Philippine Peso' },
      { id: 'eba_CU:PKR', label: 'Pakistan Rupee' },
      { id: 'eba_CU:PLN', label: 'Zloty' },
      { id: 'eba_CU:PYG', label: 'Guarani' },
      { id: 'eba_CU:QAR', label: 'Qatari Rial' },
      { id: 'eba_CU:RON', label: 'New Romanian Leu' },
      { id: 'eba_CU:RSD', label: 'Serbian Dinar' },
      { id: 'eba_CU:RUB', label: 'Russian Ruble' },
      { id: 'eba_CU:RWF', label: 'Rwanda Franc' },
      { id: 'eba_CU:SAR', label: 'Saudi Riyal' },
      { id: 'eba_CU:SBD', label: 'Solomon Islands Dollar' },
      { id: 'eba_CU:SCR', label: 'Seychelles Rupee' },
      { id: 'eba_CU:SDG', label: 'Sudanese Pound' },
      { id: 'eba_CU:SEK', label: 'Swedish Krona' },
      { id: 'eba_CU:SGD', label: 'Singapore Dollar' },
      { id: 'eba_CU:SHP', label: 'Saint Helena Pound' },
      { id: 'eba_CU:SLL', label: 'Leone' },
      { id: 'eba_CU:SOS', label: 'Somali Shilling' },
      { id: 'eba_CU:SRD', label: 'Surinam Dollar' },
      { id: 'eba_CU:SSP', label: 'South Sudanese Pound' },
      { id: 'eba_CU:STD', label: 'Dobra' },
      { id: 'eba_CU:SVC', label: 'El Salvador Colon' },
      { id: 'eba_CU:SYP', label: 'Syrian Pound' },
      { id: 'eba_CU:SZL', label: 'Lilangeni' },
      { id: 'eba_CU:THB', label: 'Baht' },
      { id: 'eba_CU:TJS', label: 'Somoni' },
      { id: 'eba_CU:TMT', label: 'Turkmenistan New Manat' },
      { id: 'eba_CU:TND', label: 'Tunisian Dinar' },
      { id: 'eba_CU:TOP', label: 'Pa\'anga' },
      { id: 'eba_CU:TRY', label: 'Turkish Lira' },
      { id: 'eba_CU:TTD', label: 'Trinidad and Tobago Dollar' },
      { id: 'eba_CU:TWD', label: 'New Taiwan Dollar' },
      { id: 'eba_CU:TZS', label: 'Tanzanian Shilling' },
      { id: 'eba_CU:UAH', label: 'Hryvnia' },
      { id: 'eba_CU:UGX', label: 'Uganda Shilling' },
      { id: 'eba_CU:USD', label: 'US Dollar' },
      { id: 'eba_CU:UYI', label: 'Uruguay Peso en Unidades Indexadas (URUIURUI)' },
      { id: 'eba_CU:UYU', label: 'Peso Uruguayo' },
      { id: 'eba_CU:UZS', label: 'Uzbekistan Sum' },
      { id: 'eba_CU:VEF', label: 'Bolivar' },
      { id: 'eba_CU:VND', label: 'Dong' },
      { id: 'eba_CU:VUV', label: 'Vatu' },
      { id: 'eba_CU:WST', label: 'Tala' },
      { id: 'eba_CU:XCD', label: 'East Caribbean Dollar' },
      { id: 'eba_CU:YER', label: 'Yemeni Rial' },
      { id: 'eba_CU:ZAR', label: 'Rand' },
      { id: 'eba_CU:ZMK', label: 'Zambian Kwacha (replaced January 1, 2013)' },
      { id: 'eba_CU:ZMW', label: 'Zambian Kwacha' },
      { id: 'eba_CU:ZWL', label: 'Zimbabwe Dollar' },
      { id: 'eba_CU:x46', label: 'Other Currency (open axis tables)' },
      { id: 'eba_CU:XPF', label: 'CFP Franc' },
      { id: 'eba_CU:CNH', label: 'Off-shore Yuan Renminbi' }
    ]
  },
  {
    id: 'b_01.02.0110',
    label: 'Value of total assets - of the financial entity',
    fieldType: 'monetary',
    required: true,
    placeholder: 'Enter value',
    description: 'b_01.02.0110',
    info: {
      title: 'TEMPLATE RT.01.02: Entity reported in the register of information',
      instruction: 'Monetary value of total assets of the entity making use of the ICT services as reported in the entity\'s annual financial statement of the year before the date of the last update of the register of information. Refer to Annex IV for the approach to be followed when filling in this column.',
      type: 'Monetary',
      option: 'Mandatory if the entity is a financial entity'
    }
  }
];
