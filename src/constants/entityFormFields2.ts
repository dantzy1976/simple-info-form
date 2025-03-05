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
    description: 'b_01.02.0020'
  },
  {
    id: 'b_01.02.0030',
    label: 'Country of the entity',
    fieldType: 'country',
    required: true,
    description: 'b_01.02.0030'
  },
  {
    id: 'b_01.02.0040',
    label: 'Type of entity',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.02.0040',
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
    id: 'b_01.02.0050',
    label: 'Hierarchy of the entity within the group (where applicable)',
    fieldType: 'closedOptions',
    required: true,
    description: 'b_01.02.0050',
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
    description: 'b_01.02.0060'
  },
  {
    id: 'b_01.02.0070',
    label: 'Date of last update',
    fieldType: 'date',
    required: true,
    description: 'b_01.02.0070'
  },
  {
    id: 'b_01.02.0080',
    label: 'Date of integration in the Register of information',
    fieldType: 'date',
    required: true,
    description: 'b_01.02.0080'
  },
  {
    id: 'b_01.02.0090',
    label: 'Date of deletion in the Register of information',
    fieldType: 'date',
    required: false,
    description: 'b_01.02.0090'
  },
  {
    id: 'b_01.02.0100',
    label: 'Currency',
    fieldType: 'currency',
    required: true,
    description: 'b_01.02.0100',
    options: [
      'eba_CU:AED\tUAE Dirham',
      'eba_CU:AFN\tAfghani',
      'eba_CU:ALL\tLek',
      'eba_CU:AMD\tArmenian Dram',
      'eba_CU:ANG\tNetherlands Antillean Guilder',
      'eba_CU:AOA\tKwanza',
      'eba_CU:ARS\tArgentine Peso',
      'eba_CU:AUD\tAustralian Dollar',
      'eba_CU:AWG\tAruban Florin',
      'eba_CU:AZN\tAzerbaijanian Manat',
      'eba_CU:BAM\tConvertible Mark',
      'eba_CU:BBD\tBarbados Dollar',
      'eba_CU:BDT\tTaka',
      'eba_CU:BGN\tBulgarian Lev',
      'eba_CU:BHD\tBahraini Dinar',
      'eba_CU:BIF\tBurundi Franc',
      'eba_CU:BMD\tBermudian Dollar',
      'eba_CU:BND\tBrunei Dollar',
      'eba_CU:BOB\tBoliviano',
      'eba_CU:BOV\tMvdol',
      'eba_CU:BRL\tBrazilian Real',
      'eba_CU:BSD\tBahamian Dollar',
      'eba_CU:BTN\tNgultrum',
      'eba_CU:BWP\tPula',
      'eba_CU:BYR\tBelarussian Ruble (2000 Series)',
      'eba_CU:BYN\tBelarusian Ruble',
      'eba_CU:BZD\tBelize Dollar',
      'eba_CU:CAD\tCanadian Dollar',
      'eba_CU:CDF\tCongolese Franc',
      'eba_CU:CHE\tWIR Euro',
      'eba_CU:CHF\tSwiss Franc',
      'eba_CU:CHW\tWIR Franc',
      'eba_CU:CLF\tUnidades de fomento',
      'eba_CU:CLP\tChilean Peso',
      'eba_CU:CNY\tYuan Renminbi',
      'eba_CU:COP\tColombian Peso',
      'eba_CU:COU\tUnidad de Valor Real',
      'eba_CU:CRC\tCosta Rican Colon',
      'eba_CU:CUC\tPeso Convertible',
      'eba_CU:CUP\tCuban Peso',
      'eba_CU:CVE\tCape Verde Escudo',
      'eba_CU:CZK\tCzech Koruna',
      'eba_CU:DJF\tDjibouti Franc',
      'eba_CU:DKK\tDanish Krone',
      'eba_CU:DOP\tDominican Peso',
      'eba_CU:DZD\tAlgerian Dinar',
      'eba_CU:EGP\tEgyptian Pound',
      'eba_CU:ERN\tNakfa',
      'eba_CU:ETB\tEthiopian Birr',
      'eba_CU:EUR\tEuro',
      'eba_CU:FJD\tFiji Dollar',
      'eba_CU:FKP\tFalkland Islands Pound',
      'eba_CU:GBP\tPound Sterling',
      'eba_CU:GEL\tLari',
      'eba_CU:GHS\tGhana Cedi',
      'eba_CU:GIP\tGibraltar Pound',
      'eba_CU:GMD\tDalasi',
      'eba_CU:GNF\tGuinea Franc',
      'eba_CU:GTQ\tQuetzal',
      'eba_CU:GYD\tGuyana Dollar',
      'eba_CU:HKD\tHong Kong Dollar',
      'eba_CU:HNL\tLempira',
      'eba_CU:HTG\tGourde',
      'eba_CU:HUF\tForint',
      'eba_CU:IDR\tRupiah',
      'eba_CU:ILS\tNew Israeli Sheqel',
      'eba_CU:INR\tIndian Rupee',
      'eba_CU:IQD\tIraqi Dinar',
      'eba_CU:IRR\tIranian Rial',
      'eba_CU:ISK\tIceland Krona',
      'eba_CU:JMD\tJamaican Dollar',
      'eba_CU:JOD\tJordanian Dinar',
      'eba_CU:JPY\tYen',
      'eba_CU:KES\tKenyan Shilling',
      'eba_CU:KGS\tSom',
      'eba_CU:KHR\tRiel',
      'eba_CU:KMF\tComoro Franc',
      'eba_CU:KPW\tNorth Korean Won',
      'eba_CU:KRW\tWon',
      'eba_CU:KWD\tKuwaiti Dinar',
      'eba_CU:KYD\tCayman Islands Dollar',
      'eba_CU:KZT\tTenge',
      'eba_CU:LAK\tKip',
      'eba_CU:LBP\tLebanese Pound',
      'eba_CU:LKR\tSri Lanka Rupee',
      'eba_CU:LRD\tLiberian Dollar',
      'eba_CU:LSL\tLoti',
      'eba_CU:LTL\tLithuanian Litas',
      'eba_CU:LVL\tLatvian Lats',
      'eba_CU:LYD\tLibyan Dinar',
      'eba_CU:MAD\tMoroccan Dirham',
      'eba_CU:MDL\tMoldovan Leu',
      'eba_CU:MGA\tMalagasy Ariary',
      'eba_CU:MKD\tDenar',
      'eba_CU:MMK\tKyat',
      'eba_CU:MNT\tTugrik',
      'eba_CU:MOP\tPataca',
      'eba_CU:MRO\tOuguiya',
      'eba_CU:MUR\tMauritius Rupee',
      'eba_CU:MVR\tRufiyaa',
      'eba_CU:MWK\tKwacha',
      'eba_CU:MXN\tMexican Peso',
      'eba_CU:MYR\tMalaysian Ringgit',
      'eba_CU:MZN\tMozambique Metical',
      'eba_CU:NAD\tNamibia Dollar',
      'eba_CU:NGN\tNaira',
      'eba_CU:NIO\tCordoba Oro',
      'eba_CU:NOK\tNorwegian Krone',
      'eba_CU:NPR\tNepalese Rupee',
      'eba_CU:NZD\tNew Zealand Dollar',
      'eba_CU:OMR\tRial Omani',
      'eba_CU:PAB\tBalboa',
      'eba_CU:PEN\tNuevo Sol',
      'eba_CU:PGK\tKina',
      'eba_CU:PHP\tPhilippine Peso',
      'eba_CU:PKR\tPakistan Rupee',
      'eba_CU:PLN\tZloty',
      'eba_CU:PYG\tGuarani',
      'eba_CU:QAR\tQatari Rial',
      'eba_CU:RON\tNew Romanian Leu',
      'eba_CU:RSD\tSerbian Dinar',
      'eba_CU:RUB\tRussian Ruble',
      'eba_CU:RWF\tRwanda Franc',
      'eba_CU:SAR\tSaudi Riyal',
      'eba_CU:SBD\tSolomon Islands Dollar',
      'eba_CU:SCR\tSeychelles Rupee',
      'eba_CU:SDG\tSudanese Pound',
      'eba_CU:SEK\tSwedish Krona',
      'eba_CU:SGD\tSingapore Dollar',
      'eba_CU:SHP\tSaint Helena Pound',
      'eba_CU:SLL\tLeone',
      'eba_CU:SOS\tSomali Shilling',
      'eba_CU:SRD\tSurinam Dollar',
      'eba_CU:SSP\tSouth Sudanese Pound',
      'eba_CU:STD\tDobra',
      'eba_CU:SVC\tEl Salvador Colon',
      'eba_CU:SYP\tSyrian Pound',
      'eba_CU:SZL\tLilangeni',
      'eba_CU:THB\tBaht',
      'eba_CU:TJS\tSomoni',
      'eba_CU:TMT\tTurkmenistan New Manat',
      'eba_CU:TND\tTunisian Dinar',
      'eba_CU:TOP\tPa\'anga',
      'eba_CU:TRY\tTurkish Lira',
      'eba_CU:TTD\tTrinidad and Tobago Dollar',
      'eba_CU:TWD\tNew Taiwan Dollar',
      'eba_CU:TZS\tTanzanian Shilling',
      'eba_CU:UAH\tHryvnia',
      'eba_CU:UGX\tUganda Shilling',
      'eba_CU:USD\tUS Dollar',
      'eba_CU:UYI\tUruguay Peso en Unidades Indexadas (URUIURUI)',
      'eba_CU:UYU\tPeso Uruguayo',
      'eba_CU:UZS\tUzbekistan Sum',
      'eba_CU:VEF\tBolivar',
      'eba_CU:VND\tDong',
      'eba_CU:VUV\tVatu',
      'eba_CU:WST\tTala',
      'eba_CU:XCD\tEast Caribbean Dollar',
      'eba_CU:YER\tYemeni Rial',
      'eba_CU:ZAR\tRand',
      'eba_CU:ZMK\tZambian Kwacha (replaced January 1, 2013)',
      'eba_CU:ZMW\tZambian Kwacha',
      'eba_CU:ZWL\tZimbabwe Dollar',
      'eba_CU:x46\tOther Currency (open axis tables)',
      'eba_CU:XPF\tCFP Franc',
      'eba_CU:CNH\tOff-shore Yuan Renminbi'
    ]
  },
  {
    id: 'b_01.02.0110',
    label: 'Value of total assets - of the financial entity',
    fieldType: 'monetary',
    required: true,
    placeholder: 'Enter value',
    description: 'b_01.02.0110'
  }
];
