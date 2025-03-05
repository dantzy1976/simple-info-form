
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';

interface ExportData {
  [key: string]: any;
}

export const exportToExcel = async (entities: ExportData[] | ExportData) => {
  console.log('exportToExcel - Received data to export:', entities);
  
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
  
  console.log('exportToExcel - Processing data array:', dataArray);
  
  // Add data rows for each entity
  dataArray.forEach((data, index) => {
    console.log(`exportToExcel - Processing entity ${index}:`, data);
    
    // Create a normalized object for the expected column structure
    const normalizedData = {
      'b_01.01.0010': '',
      'b_01.01.0020': '',
      'b_01.01.0030': '',
      'b_01.01.0040': '',
      'b_01.01.0050': '',
      'b_01.01.0060': ''
    };
    
    // Process all keys in the data object
    Object.keys(data).forEach(key => {
      console.log(`exportToExcel - Processing key "${key}" with value:`, data[key]);
      
      // Handle keys with underscores that should be dots
      let normalizedKey = key;
      
      // If the key has underscores, try to convert it to the dot format
      if (key.includes('_')) {
        const potentialDotKey = key.replace(/_/g, '.');
        
        // Check if this converted key is one of our expected columns
        if (Object.keys(normalizedData).includes(potentialDotKey)) {
          normalizedKey = potentialDotKey;
        }
      }
      
      // Check if this is one of our expected fields
      if (Object.keys(normalizedData).includes(normalizedKey)) {
        normalizedData[normalizedKey] = data[key];
        console.log(`exportToExcel - Matched field "${normalizedKey}" with value:`, data[key]);
      } else if (normalizedKey.startsWith('b_')) {
        // This might be a field with a different format, try to extract the pattern
        const match = normalizedKey.match(/b_(\d+)_(\d+)_(\d+)/);
        if (match) {
          const dotKey = `b_${match[1]}.${match[2]}.${match[3]}`;
          if (Object.keys(normalizedData).includes(dotKey)) {
            normalizedData[dotKey] = data[key];
            console.log(`exportToExcel - Matched field "${dotKey}" from "${normalizedKey}" with value:`, data[key]);
          }
        }
      }
    });
    
    console.log('exportToExcel - Final normalized data for row:', normalizedData);
    
    // Add the row with explicit field mapping
    const dataRow = worksheet.addRow([
      normalizedData['b_01.01.0010'],
      normalizedData['b_01.01.0020'],
      normalizedData['b_01.01.0030'],
      normalizedData['b_01.01.0040'],
      normalizedData['b_01.01.0050'],
      normalizedData['b_01.01.0060']
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

  console.log('exportToExcel - Generating Excel file');
  
  // Generate the Excel file
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `entity_information_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
};
