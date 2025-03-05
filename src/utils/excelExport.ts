
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';

interface ExportData {
  [key: string]: any;
}

export const exportToExcel = async (entities: ExportData[] | ExportData) => {
  // Create a new workbook and worksheet
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Entity Information');

  // Define the header structure with merged cells for main header and subheader
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
  for (let i = 1; i <= 3; i++) {
    const row = worksheet.getRow(i);
    row.eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      
      // Set background colors based on row
      if (i === 1) {
        // Header row - light blue
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFCCDAEB' }
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

  // Handle both single entity and multiple entities
  const dataArray = Array.isArray(entities) ? entities : [entities];
  
  // Add data rows for each entity
  dataArray.forEach((data) => {
    const normalizedData = {};
    
    // Normalize the keys - replace underscores with dots for Excel output
    Object.keys(data).forEach(key => {
      const normalizedKey = key.replace(/_/g, '.');
      normalizedData[normalizedKey] = data[key];
    });
    
    const dataRow = worksheet.addRow([
      normalizedData['b_01.01.0010'] || '',
      normalizedData['b_01.01.0020'] || '',
      normalizedData['b_01.01.0030'] || '',
      normalizedData['b_01.01.0040'] || '',
      normalizedData['b_01.01.0050'] || '',
      normalizedData['b_01.01.0060'] || ''
    ]);

    // Style the data row
    dataRow.eachCell((cell) => {
      cell.alignment = { vertical: 'middle', horizontal: 'left' };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });
  });

  // Generate the Excel file
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `entity_information_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
};
