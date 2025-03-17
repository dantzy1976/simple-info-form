
import ExcelJS from 'exceljs';

/**
 * Add header row to Excel worksheet
 */
export const addHeader = (
  worksheet: ExcelJS.Worksheet,
  headerColumns: string[]
) => {
  // Add header row
  const headerRow = worksheet.addRow(headerColumns);
  
  // Style header row
  headerRow.eachCell((cell) => {
    cell.font = { bold: true };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'E0E0E0' }
    };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });
};

/**
 * Set column widths for better readability
 */
export const setColumnWidths = (
  worksheet: ExcelJS.Worksheet,
  width: number
) => {
  worksheet.columns.forEach(column => {
    column.width = width;
  });
};
