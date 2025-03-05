
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
