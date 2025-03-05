
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';

interface ExportData {
  [key: string]: any;
}

export const exportToExcel = async (entities: ExportData[] | ExportData, formType: 'b_01.01' | 'b_01.02' = 'b_01.01') => {
  // Create a new workbook and worksheet
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(formType === 'b_01.01' ? 'Entity Information' : 'Entity Details');

  // Define the header structure based on form type
  if (formType === 'b_01.01') {
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
  } else {
    worksheet.columns = [
      { header: 'b_01.02.0010', key: 'b_01.02.0010', width: 30 },
      { header: 'b_01.02.0020', key: 'b_01.02.0020', width: 30 },
      { header: 'b_01.02.0030', key: 'b_01.02.0030', width: 20 },
      { header: 'b_01.02.0040', key: 'b_01.02.0040', width: 25 },
      { header: 'b_01.02.0050', key: 'b_01.02.0050', width: 30 },
      { header: 'b_01.02.0060', key: 'b_01.02.0060', width: 30 },
      { header: 'b_01.02.0070', key: 'b_01.02.0070', width: 20 },
      { header: 'b_01.02.0080', key: 'b_01.02.0080', width: 30 },
      { header: 'b_01.02.0090', key: 'b_01.02.0090', width: 30 },
      { header: 'b_01.02.0100', key: 'b_01.02.0100', width: 15 },
      { header: 'b_01.02.0110', key: 'b_01.02.0110', width: 30 },
    ];

    // Add the second header row with descriptions
    worksheet.addRow([
      'LEI of the entity',
      'Name of the entity',
      'Country of the entity',
      'Type of entity',
      'Hierarchy of the entity within the group',
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
  }

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
  if (formType === 'b_01.01') {
    dataArray.forEach((data) => {
      const dataRow = worksheet.addRow([
        data.b_01_01_0010 || '',
        data.b_01_01_0020 || '',
        data.b_01_01_0030 || '',
        data.b_01_01_0040 || '',
        data.b_01_01_0050 || '',
        data.b_01_01_0060 || ''
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
  } else {
    dataArray.forEach((data) => {
      const dataRow = worksheet.addRow([
        data.b_01_02_0010 || '',
        data.b_01_02_0020 || '',
        data.b_01_02_0030 || '',
        data.b_01_02_0040 || '',
        data.b_01_02_0050 || '',
        data.b_01_02_0060 || '',
        data.b_01_02_0070 || '',
        data.b_01_02_0080 || '',
        data.b_01_02_0090 || '',
        data.b_01_02_0100 || '',
        data.b_01_02_0110 || ''
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
  }

  // Generate the Excel file
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `entity_${formType}_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
};
