
import ExcelJS from 'exceljs';

/**
 * Creates and configures the b_01.01 worksheet
 */
export const createFirstWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  // Create the first worksheet for b_01.01 data
  const worksheet = workbook.addWorksheet('b_01.01');

  // Define the header structure for the first form
  worksheet.columns = [
    { header: 'b_01.01.0010', key: 'b_01.01.0010', width: 50 },
    { header: 'b_01.01.0020', key: 'b_01.01.0020', width: 30 },
    { header: 'b_01.01.0030', key: 'b_01.01.0030', width: 20 },
    { header: 'b_01.01.0040', key: 'b_01.01.0040', width: 50 },
    { header: 'b_01.01.0050', key: 'b_01.01.0050', width: 30 },
    { header: 'b_01.01.0060', key: 'b_01.01.0060', width: 20 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'LEI of the entity maintaining the register of information',
    'Name of the entity',
    'Country of the entity',
    'Type of entity',
    'Competent Authority',
    'Date of the reporting'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Country',
    'Closed set of options',
    'Alphanumerical',
    'Date'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet);

  return worksheet;
};

/**
 * Creates and configures the b_01.02 worksheet
 */
export const createSecondWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_01.02');

  // Define the header structure for the second form
  worksheet.columns = [
    { header: 'b_01.02.0010', key: 'b_01.02.0010', width: 50 },
    { header: 'b_01.02.0020', key: 'b_01.02.0020', width: 30 },
    { header: 'b_01.02.0030', key: 'b_01.02.0030', width: 20 },
    { header: 'b_01.02.0040', key: 'b_01.02.0040', width: 50 },
    { header: 'b_01.02.0050', key: 'b_01.02.0050', width: 30 },
    { header: 'b_01.02.0060', key: 'b_01.02.0060', width: 20 },
    { header: 'b_01.02.0070', key: 'b_01.02.0070', width: 20 },
    { header: 'b_01.02.0080', key: 'b_01.02.0080', width: 20 },
    { header: 'b_01.02.0090', key: 'b_01.02.0090', width: 20 },
    { header: 'b_01.02.0100', key: 'b_01.02.0100', width: 20 },
    { header: 'b_01.02.0110', key: 'b_01.02.0110', width: 20 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'LEI of the entity',
    'Name of the entity',
    'Country of the entity',
    'Type of entity',
    'Hierarchy of the entity within the group (where applicable)',
    'LEI of the direct parent undertaking of the entity',
    'Date of last update',
    'Date of integration in the Register of information',
    'Date of deletion in the Register of information',
    'Currency',
    'Value of total assets - of the financial entity'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Country',
    'Closed set of options',
    'Closed set of options',
    'Alphanumerical',
    'Date',
    'Date',
    'Date',
    'Currency',
    'Monetary'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFD8E4BC'); // Light green

  return worksheet;
};

/**
 * Creates and configures the b_01.03 worksheet
 */
export const createThirdWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_01.03');

  // Define the header structure for the third form
  worksheet.columns = [
    { header: 'b_01.03.0010', key: 'b_01.03.0010', width: 50 },
    { header: 'b_01.03.0020', key: 'b_01.03.0020', width: 50 },
    { header: 'b_01.03.0030', key: 'b_01.03.0030', width: 30 },
    { header: 'b_01.03.0040', key: 'b_01.03.0040', width: 20 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Identification code of the branch',
    'LEI of the financial entity head office of the branch',
    'Name of the branch',
    'Country of the branch'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Alphanumerical',
    'Country'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFE0D1EB'); // Light purple

  return worksheet;
};

/**
 * Creates and configures the b_02.01 worksheet
 */
export const createProviderContractWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_02.01');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_02.01.0010', key: 'b_02.01.0010', width: 50 },
    { header: 'b_02.01.0020', key: 'b_02.01.0020', width: 30 },
    { header: 'b_02.01.0030', key: 'b_02.01.0030', width: 50 },
    { header: 'b_02.01.0040', key: 'b_02.01.0040', width: 30 },
    { header: 'b_02.01.0050', key: 'b_02.01.0050', width: 40 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'Type of contractual arrangement',
    'Overarching contractual arrangement reference number',
    'Currency of the amount reported in b_02.01.0050',
    'Annual expense or estimated cost of the contractual arrangement for the past year'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Closed set of options',
    'Alphanumerical',
    'Currency',
    'Monetary'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFD1E8FF'); // Light blue

  return worksheet;
};

/**
 * Creates and configures the b_02.02 worksheet
 */
export const createIctServicesWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_02.02');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_02.02.0010', key: 'b_02.02.0010', width: 50 },
    { header: 'b_02.02.0020', key: 'b_02.02.0020', width: 50 },
    { header: 'b_02.02.0030', key: 'b_02.02.0030', width: 50 },
    { header: 'b_02.02.0040', key: 'b_02.02.0040', width: 30 },
    { header: 'b_02.02.0050', key: 'b_02.02.0050', width: 40 },
    { header: 'b_02.02.0060', key: 'b_02.02.0060', width: 40 },
    { header: 'b_02.02.0070', key: 'b_02.02.0070', width: 30 },
    { header: 'b_02.02.0080', key: 'b_02.02.0080', width: 30 },
    { header: 'b_02.02.0090', key: 'b_02.02.0090', width: 40 },
    { header: 'b_02.02.0100', key: 'b_02.02.0100', width: 40 },
    { header: 'b_02.02.0110', key: 'b_02.02.0110', width: 40 },
    { header: 'b_02.02.0120', key: 'b_02.02.0120', width: 40 },
    { header: 'b_02.02.0130', key: 'b_02.02.0130', width: 40 },
    { header: 'b_02.02.0140', key: 'b_02.02.0140', width: 30 },
    { header: 'b_02.02.0150', key: 'b_02.02.0150', width: 40 },
    { header: 'b_02.02.0160', key: 'b_02.02.0160', width: 40 },
    { header: 'b_02.02.0170', key: 'b_02.02.0170', width: 40 },
    { header: 'b_02.02.0180', key: 'b_02.02.0180', width: 40 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'LEI of the entity making use of the ICT service(s)',
    'Identification code of the ICT third-party service provider',
    'Type of code to identify the ICT third-party service provider',
    'Function identifier',
    'Type of ICT services',
    'Start date of the contractual arrangement',
    'End date of the contractual arrangement',
    'Reason of the termination or ending of the contractual arrangement',
    'Notice period for the financial entity making use of the ICT service(s)',
    'Notice period for the ICT third-party service provider',
    'Country of the governing law of the contractual arrangement',
    'Country of provision of the ICT services',
    'Storage of data',
    'Location of the data at rest (storage)',
    'Location of management of the data (processing)',
    'Sensitiveness of the data stored by the ICT third-party service provider',
    'Level of reliance on the ICT service supporting the critical or important function'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Alphanumerical',
    'Alphanumerical',
    'Alphanumerical',
    'Closed set of options',
    'Date',
    'Date',
    'Closed set of options',
    'Alphanumerical',
    'Alphanumerical',
    'Country',
    'Country',
    'Closed set of options',
    'Country',
    'Country',
    'Closed set of options',
    'Closed set of options'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFEBCFDF'); // Light pink

  return worksheet;
};

/**
 * Creates and configures the b_02.03 worksheet
 */
export const createProviderArrangementWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_02.03');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_02.03.0010', key: 'b_02.03.0010', width: 50 },
    { header: 'b_02.03.0020', key: 'b_02.03.0020', width: 50 },
    { header: 'b_02.03.0030', key: 'b_02.03.0030', width: 20 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'Contractual arrangement linked to the contractual arrangement referred in RT.02.03.0010',
    'Link'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Fill with "true" for each populated row'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFB3E5FC'); // Light blue

  return worksheet;
};

/**
 * Creates and configures the b_03.01 worksheet
 */
export const createEntitySigningWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_03.01');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_03.01.0010', key: 'b_03.01.0010', width: 50 },
    { header: 'b_03.01.0020', key: 'b_03.01.0020', width: 50 },
    { header: 'b_03.01.0030', key: 'b_03.01.0030', width: 20 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'LEI of the entity signing the contractual arrangement',
    'Link'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Fill with "true" for each populated row'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFE5CC');  // Light orange

  return worksheet;
};

/**
 * Creates and configures the b_03.02 worksheet
 */
export const createIctProviderWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_03.02');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_03.02.0010', key: 'b_03.02.0010', width: 50 },
    { header: 'b_03.02.0020', key: 'b_03.02.0020', width: 50 },
    { header: 'b_03.02.0030', key: 'b_03.02.0030', width: 50 },
    { header: 'b_03.02.0045', key: 'b_03.02.0045', width: 20 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'Identification code of ICT third-party service provider',
    'Type of code to identify the ICT third-party service provider',
    'Link'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Pattern',
    'Fill with "true" for each populated row'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFE0F0FF');  // Light purple-blue

  return worksheet;
};

/**
 * Creates and configures the b_03.03 worksheet
 */
export const createIctEntityProviderWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_03.03');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_03.03.0010', key: 'b_03.03.0010', width: 50 },
    { header: 'b_03.03.0020', key: 'b_03.03.0020', width: 50 },
    { header: 'b_03.03.0031', key: 'b_03.03.0031', width: 20 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'LEI of the entity providing ICT services',
    'Link'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Fill with "true" for each populated row'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFD1F0FF');  // Light blue-purple

  return worksheet;
};

/**
 * Creates and configures the b_04.01 worksheet
 */
export const createEntityUsingIctServicesWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_04.01');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_04.01.0010', key: 'b_04.01.0010', width: 50 },
    { header: 'b_04.01.0020', key: 'b_04.01.0020', width: 50 },
    { header: 'b_04.01.0030', key: 'b_04.01.0030', width: 50 },
    { header: 'b_04.01.0040', key: 'b_04.01.0040', width: 30 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'LEI of the entity making use of the ICT service(s)',
    'Nature of the entity making use of the ICT service(s)',
    'Identification code of the branch'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Closed set of options',
    'Alphanumerical'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFD8F8E0');  // Light green

  return worksheet;
};

/**
 * Creates and configures the b_05.01 worksheet
 */
export const createIctThirdPartyProviderInfoWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_05.01');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_05.01.0010', key: 'b_05.01.0010', width: 50 },
    { header: 'b_05.01.0020', key: 'b_05.01.0020', width: 40 },
    { header: 'b_05.01.0030', key: 'b_05.01.0030', width: 50 },
    { header: 'b_05.01.0040', key: 'b_05.01.0040', width: 30 },
    { header: 'b_05.01.0050', key: 'b_05.01.0050', width: 30 },
    { header: 'b_05.01.0060', key: 'b_05.01.0060', width: 30 },
    { header: 'b_05.01.0070', key: 'b_05.01.0070', width: 50 },
    { header: 'b_05.01.0080', key: 'b_05.01.0080', width: 50 },
    { header: 'b_05.01.0090', key: 'b_05.01.0090', width: 50 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Identification code of ICT third-party service provider',
    'Type of code to identify the ICT third-party service provider',
    'Name of the ICT third-party service provider',
    'Type of person of the ICT third-party service provider',
    'Country of the ICT third-party service provider\'s headquarters',
    'Currency of the amount reported in RT.05.01.0070',
    'Total annual expense or estimated cost of the ICT third-party service provider',
    'Identification code of the ICT third-party service provider\'s ultimate parent undertaking',
    'Type of code to identify the ICT third-party service provider\'s ultimate parent undertaking'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Pattern',
    'Alphanumerical',
    'Closed set of options',
    'Country',
    'Currency',
    'Monetary',
    'Alphanumerical',
    'Pattern'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFFBE5CC');  // Light orange

  return worksheet;
};

/**
 * Creates and configures the b_05.02 worksheet
 */
export const createIctServicesInfoWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_05.02');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_05.02.0010', key: 'b_05.02.0010', width: 50 },
    { header: 'b_05.02.0020', key: 'b_05.02.0020', width: 40 },
    { header: 'b_05.02.0030', key: 'b_05.02.0030', width: 50 },
    { header: 'b_05.02.0040', key: 'b_05.02.0040', width: 30 },
    { header: 'b_05.02.0050', key: 'b_05.02.0050', width: 20 },
    { header: 'b_05.02.0060', key: 'b_05.02.0060', width: 50 },
    { header: 'b_05.02.0070', key: 'b_05.02.0070', width: 30 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'Type of ICT services',
    'Identification code of the ICT third-party service provider',
    'Type of code to identify the ICT third-party service provider',
    'Rank',
    'Identification code of the recipient of sub-contracted ICT services',
    'Type of code to identify the recipient of sub-contracted ICT services'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Closed set of options',
    'Alphanumerical',
    'Pattern',
    'Natural number',
    'Alphanumerical',
    'Pattern'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFE5D8CC');  // Light brown

  return worksheet;
};

/**
 * Creates and configures the b_06.01 worksheet
 */
export const createFunctionInfoWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_06.01');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_06.01.0010', key: 'b_06.01.0010', width: 40 },
    { header: 'b_06.01.0020', key: 'b_06.01.0020', width: 40 },
    { header: 'b_06.01.0030', key: 'b_06.01.0030', width: 40 },
    { header: 'b_06.01.0040', key: 'b_06.01.0040', width: 40 },
    { header: 'b_06.01.0050', key: 'b_06.01.0050', width: 40 },
    { header: 'b_06.01.0060', key: 'b_06.01.0060', width: 50 },
    { header: 'b_06.01.0070', key: 'b_06.01.0070', width: 40 },
    { header: 'b_06.01.0080', key: 'b_06.01.0080', width: 40 },
    { header: 'b_06.01.0090', key: 'b_06.01.0090', width: 40 },
    { header: 'b_06.01.0100', key: 'b_06.01.0100', width: 40 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Function Identifier',
    'Licenced activity',
    'Function name',
    'LEI of the financial entity',
    'Criticality or importance assessment',
    'Reasons for criticality or importance',
    'Date of the last assessment of criticality or importance',
    'Recovery time objective of the function',
    'Recovery point objective of the function',
    'Impact of discontinuing the function'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Pattern',
    'Closed set of options',
    'Alphanumerical',
    'Alphanumerical',
    'Closed set of options',
    'Alphanumerical',
    'Date',
    'Natural number',
    'Natural number',
    'Closed set of options'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFE6E6FA');  // Light purple

  return worksheet;
};

/**
 * Creates and configures the b_07.01 worksheet
 */
export const createIctServiceProviderAssessmentWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_07.01');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_07.01.0010', key: 'b_07.01.0010', width: 50 },
    { header: 'b_07.01.0020', key: 'b_07.01.0020', width: 50 },
    { header: 'b_07.01.0030', key: 'b_07.01.0030', width: 40 },
    { header: 'b_07.01.0040', key: 'b_07.01.0040', width: 40 },
    { header: 'b_07.01.0050', key: 'b_07.01.0050', width: 40 },
    { header: 'b_07.01.0060', key: 'b_07.01.0060', width: 60 },
    { header: 'b_07.01.0070', key: 'b_07.01.0070', width: 40 },
    { header: 'b_07.01.0080', key: 'b_07.01.0080', width: 30 },
    { header: 'b_07.01.0090', key: 'b_07.01.0090', width: 40 },
    { header: 'b_07.01.0100', key: 'b_07.01.0100', width: 40 },
    { header: 'b_07.01.0110', key: 'b_07.01.0110', width: 40 },
    { header: 'b_07.01.0120', key: 'b_07.01.0120', width: 50 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Contractual arrangement reference number',
    'Identification code of the ICT third-party service provider',
    'Type of code to identify the ICT third-party service provider',
    'Type of ICT services',
    'Substitutability of the ICT third-party service provider',
    'Reason if the ICT third-party service provider is considered not substitutable or difficult to be substitutable',
    'Date of the last audit on the ICT third-party service provider',
    'Existence of an exit plan',
    'Possibility of reintegration of the contracted ICT service',
    'Impact of discontinuing the ICT services',
    'Are there alternative ICT third-party service providers identified?',
    'Identification of alternative ICT TPP'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Pattern',
    'Closed set of options',
    'Closed set of options',
    'Closed set of options',
    'Date',
    'Yes/No',
    'Closed set of options',
    'Closed set of options',
    'Closed set of options',
    'Alphanumerical'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFD8EFDB');  // Light green

  return worksheet;
};

/**
 * Creates and configures the b_99.01 metadata worksheet
 */
export const createAdditionalProviderInfoWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('b_99.01');

  // Define the header structure
  worksheet.columns = [
    { header: 'b_99.01.0010', key: 'b_99.01.0010', width: 40 },
    { header: 'b_99.01.0020', key: 'b_99.01.0020', width: 40 },
    { header: 'b_99.01.0030', key: 'b_99.01.0030', width: 40 },
    { header: 'b_99.01.0040', key: 'b_99.01.0040', width: 40 },
    { header: 'b_99.01.0050', key: 'b_99.01.0050', width: 40 },
    { header: 'b_99.01.0060', key: 'b_99.01.0060', width: 50 },
    { header: 'b_99.01.0070', key: 'b_99.01.0070', width: 40 },
    { header: 'b_99.01.0080', key: 'b_99.01.0080', width: 40 },
    { header: 'b_99.01.0090', key: 'b_99.01.0090', width: 40 },
    { header: 'b_99.01.0100', key: 'b_99.01.0100', width: 40 },
    { header: 'b_99.01.0110', key: 'b_99.01.0110', width: 40 },
    { header: 'b_99.01.0120', key: 'b_99.01.0120', width: 40 },
    { header: 'b_99.01.0130', key: 'b_99.01.0130', width: 40 },
    { header: 'b_99.01.0140', key: 'b_99.01.0140', width: 40 },
    { header: 'b_99.01.0150', key: 'b_99.01.0150', width: 40 },
    { header: 'b_99.01.0160', key: 'b_99.01.0160', width: 40 },
    { header: 'b_99.01.0170', key: 'b_99.01.0170', width: 40 },
    { header: 'b_99.01.0180', key: 'b_99.01.0180', width: 40 },
    { header: 'b_99.01.0190', key: 'b_99.01.0190', width: 40 },
  ];

  // Add the second header row with descriptions
  worksheet.addRow([
    'Provider identifier',
    'Provider name',
    'Provider type',
    'Provider country',
    'Annual contract value',
    'Contract reference',
    'Contract start date',
    'Contract end date',
    'Services provided',
    'Critical services flag',
    'Risk assessment date',
    'Risk assessment result',
    'Exit strategy in place',
    'Exit strategy tested date',
    'Contingency plan in place',
    'Contingency plan tested date',
    'Incidents reported',
    'Last audit date',
    'Audit findings resolved'
  ]);

  // Add the field type row
  worksheet.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Closed set of options',
    'Country',
    'Monetary',
    'Alphanumerical',
    'Date',
    'Date',
    'Alphanumerical',
    'Yes/No',
    'Date',
    'Closed set of options',
    'Yes/No',
    'Date',
    'Yes/No',
    'Date',
    'Natural number',
    'Date',
    'Yes/No'
  ]);

  // Format the header rows
  formatHeaderRows(worksheet, 'FFE2F0CB');  // Light yellow-green

  return worksheet;
};

/**
 * Helper function to format the header rows of worksheets
 */
const formatHeaderRows = (worksheet: ExcelJS.Worksheet, headerColor: string = 'FFD9D9D9') => {
  // Style headers
  worksheet.getRow(1).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: headerColor }
    };
    cell.font = { bold: true };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });

  // Style field descriptions
  worksheet.getRow(2).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFF2F2F2' }
    };
    cell.font = { italic: true };
    cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });

  // Style field type row
  worksheet.getRow(3).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFE6E6E6' }
    };
    cell.font = { size: 9 };
    cell.alignment = { vertical: 'middle', horizontal: 'left' };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });

  // Freeze first rows
  worksheet.views = [{ state: 'frozen', xSplit: 0, ySplit: 3 }];
};
