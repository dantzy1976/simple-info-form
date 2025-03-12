import ExcelJS from 'exceljs';

/**
 * Creates and configures the first worksheet
 */
export const createFirstWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  // Create the first worksheet for b_01.01 data
  const worksheet = workbook.addWorksheet('First Form Data');

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
 * Creates and configures the second worksheet
 */
export const createSecondWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('Second Form Data');

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
 * Creates and configures the third worksheet
 */
export const createThirdWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('Branch Form Data');

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
 * Creates and configures the provider arrangements worksheet
 */
export const createProviderArrangementWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('Provider Arrangements');

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
 * Creates and configures the entity signing contractual arrangement worksheet
 */
export const createEntitySigningWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('Entity Signing Arrangements');

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
 * Creates and configures the ICT service provider worksheet
 */
export const createIctProviderWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('ICT Service Providers');

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
 * Creates and configures the entity providing ICT services worksheet
 */
export const createIctEntityProviderWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('Entity Providing ICT Services');

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
 * Creates and configures the entity using ICT services worksheet
 */
export const createEntityUsingIctServicesWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('Entity Using ICT Services');

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
 * Creates and configures the ICT third-party service provider information worksheet
 */
export const createIctThirdPartyProviderInfoWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('ICT Third-Party Provider Info');

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
 * Creates and configures the ICT services information worksheet
 */
export const createIctServicesInfoWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('ICT Services Info');

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
 * Creates and configures the Function Information worksheet
 */
export const createFunctionInfoWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('Function Information');

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
 * Creates and configures the ICT Service Provider Assessment worksheet
 */
export const createIctServiceProviderAssessmentWorksheet = (workbook: ExcelJS.Workbook): ExcelJS.Worksheet => {
  const worksheet = workbook.addWorksheet('ICT Service Provider Assessment');

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
 * Helper function to format header rows in worksheets
 */
const formatHeaderRows = (worksheet: ExcelJS.Worksheet, headerColor = 'FFCCDAEB') => {
  for (let i = 1; i <= 3; i++) {
    const row = worksheet.getRow(i);
    row.eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      
      // Set background colors based on row
      if (i === 1) {
        // Header row - use provided color
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: headerColor }
        };
      } else if (i === 3) {
        // Field type row - light yellow
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFFF2CC' }
        };
      }
    });
  }

  // Set row heights for better readability
  worksheet.getRow(1).height = 25;
  worksheet.getRow(2).height = 40;
  worksheet.getRow(3).height = 25;
};
