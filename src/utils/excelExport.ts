
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';

interface ExportData {
  [key: string]: any;
}

export const exportToExcel = async (entities: ExportData[] | ExportData) => {
  console.log('exportToExcel - Received data to export:', entities);
  
  // Create a new workbook
  const workbook = new ExcelJS.Workbook();
  
  // Create the first worksheet for b_01.01 data
  const worksheet1 = workbook.addWorksheet('First Form Data');

  // Define the header structure for the first form
  worksheet1.columns = [
    { header: 'b_01.01.0010', key: 'b_01.01.0010', width: 50 },
    { header: 'b_01.01.0020', key: 'b_01.01.0020', width: 30 },
    { header: 'b_01.01.0030', key: 'b_01.01.0030', width: 20 },
    { header: 'b_01.01.0040', key: 'b_01.01.0040', width: 50 },
    { header: 'b_01.01.0050', key: 'b_01.01.0050', width: 30 },
    { header: 'b_01.01.0060', key: 'b_01.01.0060', width: 20 },
  ];

  // Add the second header row with descriptions for first form
  worksheet1.addRow([
    'LEI of the entity maintaining the register of information',
    'Name of the entity',
    'Country of the entity',
    'Type of entity',
    'Competent Authority',
    'Date of the reporting'
  ]);

  // Add the field type row for first form
  worksheet1.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Country',
    'Closed set of options',
    'Alphanumerical',
    'Date'
  ]);

  // Format the header rows for first form
  for (let i = 1; i <= 3; i++) {
    const row = worksheet1.getRow(i);
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

  // Set row heights for better readability for first form
  worksheet1.getRow(1).height = 25;
  worksheet1.getRow(2).height = 40;
  worksheet1.getRow(3).height = 25;

  // Create the second worksheet for b_01.02 data
  const worksheet2 = workbook.addWorksheet('Second Form Data');

  // Define the header structure for the second form
  worksheet2.columns = [
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

  // Add the second header row with descriptions for second form
  worksheet2.addRow([
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

  // Add the field type row for second form
  worksheet2.addRow([
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

  // Format the header rows for second form
  for (let i = 1; i <= 3; i++) {
    const row = worksheet2.getRow(i);
    row.eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      
      // Set background colors based on row
      if (i === 1) {
        // Header row - light green
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFD8E4BC' }
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

  // Set row heights for better readability for second form
  worksheet2.getRow(1).height = 25;
  worksheet2.getRow(2).height = 40;
  worksheet2.getRow(3).height = 25;
  
  // Create the third worksheet for b_01.03 data
  const worksheet3 = workbook.addWorksheet('Branch Form Data');

  // Define the header structure for the third form
  worksheet3.columns = [
    { header: 'b_01.03.0010', key: 'b_01.03.0010', width: 50 },
    { header: 'b_01.03.0020', key: 'b_01.03.0020', width: 50 },
    { header: 'b_01.03.0030', key: 'b_01.03.0030', width: 30 },
    { header: 'b_01.03.0040', key: 'b_01.03.0040', width: 20 },
  ];

  // Add the second header row with descriptions for third form
  worksheet3.addRow([
    'Identification code of the branch',
    'LEI of the financial entity head office of the branch',
    'Name of the branch',
    'Country of the branch'
  ]);

  // Add the field type row for third form
  worksheet3.addRow([
    'Alphanumerical',
    'Alphanumerical',
    'Alphanumerical',
    'Country'
  ]);

  // Format the header rows for third form
  for (let i = 1; i <= 3; i++) {
    const row = worksheet3.getRow(i);
    row.eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      
      // Set background colors based on row
      if (i === 1) {
        // Header row - light purple
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFE0D1EB' }
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

  // Set row heights for better readability for third form
  worksheet3.getRow(1).height = 25;
  worksheet3.getRow(2).height = 40;
  worksheet3.getRow(3).height = 25;

  // Handle both single entity and multiple entities
  const dataArray = Array.isArray(entities) ? entities : [entities];
  
  console.log('exportToExcel - Processing data array with length:', dataArray.length);
  
  // Process each entity
  dataArray.forEach((data, index) => {
    console.log(`exportToExcel - Processing entity ${index}:`, data);
    
    // Create normalized objects for each form
    const firstFormData = {
      'b_01.01.0010': '',
      'b_01.01.0020': '',
      'b_01.01.0030': '',
      'b_01.01.0040': '',
      'b_01.01.0050': '',
      'b_01.01.0060': ''
    };
    
    const secondFormData = {
      'b_01.02.0010': '',
      'b_01.02.0020': '',
      'b_01.02.0030': '',
      'b_01.02.0040': '',
      'b_01.02.0050': '',
      'b_01.02.0060': '',
      'b_01.02.0070': '',
      'b_01.02.0080': '',
      'b_01.02.0090': '',
      'b_01.02.0100': '',
      'b_01.02.0110': ''
    };
    
    const thirdFormData = {
      'b_01.03.0010': '',
      'b_01.03.0020': '',
      'b_01.03.0030': '',
      'b_01.03.0040': ''
    };
    
    // Process all keys in the data object
    Object.keys(data).forEach(key => {
      console.log(`exportToExcel - Processing key "${key}" with value:`, data[key]);
      
      // Convert key formats for field matching
      let normalizedKey = '';
      
      // Handle keys with underscores (from form input)
      if (key.includes('_')) {
        // Try converting underscores to dots (b_01_01_0010 -> b_01.01.0010)
        normalizedKey = key.replace(/(_)(\d+)(_)(\d+)(_)(\d+)/g, '$1$2.$4.$6');
      } 
      // Handle direct dot notation keys
      else if (key.includes('.')) {
        normalizedKey = key;
      }
      
      console.log(`exportToExcel - Converted key "${key}" to "${normalizedKey}"`);
      
      // Check if this belongs to first form
      if (normalizedKey && normalizedKey.includes('01.01') && Object.keys(firstFormData).includes(normalizedKey)) {
        firstFormData[normalizedKey] = data[key];
        console.log(`exportToExcel - Matched first form field "${normalizedKey}" with value:`, data[key]);
      } 
      // Check if this belongs to second form
      else if (normalizedKey && normalizedKey.includes('01.02') && Object.keys(secondFormData).includes(normalizedKey)) {
        secondFormData[normalizedKey] = data[key];
        console.log(`exportToExcel - Matched second form field "${normalizedKey}" with value:`, data[key]);
      }
      // Check if this belongs to third form
      else if (normalizedKey && normalizedKey.includes('01.03') && Object.keys(thirdFormData).includes(normalizedKey)) {
        thirdFormData[normalizedKey] = data[key];
        console.log(`exportToExcel - Matched third form field "${normalizedKey}" with value:`, data[key]);
      }
      // Try direct mapping for keys that weren't converted properly
      else {
        // First form direct mapping
        if (key.includes('01_01')) {
          const directKey = `b_01.01.${key.split('_').pop()}`;
          if (Object.keys(firstFormData).includes(directKey)) {
            firstFormData[directKey] = data[key];
            console.log(`exportToExcel - Direct matched first form field "${directKey}" with value:`, data[key]);
          }
        }
        // Second form direct mapping
        else if (key.includes('01_02')) {
          const directKey = `b_01.02.${key.split('_').pop()}`;
          if (Object.keys(secondFormData).includes(directKey)) {
            secondFormData[directKey] = data[key];
            console.log(`exportToExcel - Direct matched second form field "${directKey}" with value:`, data[key]);
          }
        }
        // Third form direct mapping
        else if (key.includes('01_03')) {
          const directKey = `b_01.03.${key.split('_').pop()}`;
          if (Object.keys(thirdFormData).includes(directKey)) {
            thirdFormData[directKey] = data[key];
            console.log(`exportToExcel - Direct matched third form field "${directKey}" with value:`, data[key]);
          }
        }
      }
    });
    
    console.log('exportToExcel - Final normalized data for first form:', firstFormData);
    console.log('exportToExcel - Final normalized data for second form:', secondFormData);
    console.log('exportToExcel - Final normalized data for third form:', thirdFormData);
    
    // Add the row with explicit field mapping for first form
    const dataRow1 = worksheet1.addRow([
      firstFormData['b_01.01.0010'],
      firstFormData['b_01.01.0020'],
      firstFormData['b_01.01.0030'],
      firstFormData['b_01.01.0040'], // Keep ID for entity type
      firstFormData['b_01.01.0050'],
      firstFormData['b_01.01.0060']
    ]);

    // Style the data row for first form
    dataRow1.eachCell((cell) => {
      cell.alignment = { vertical: 'middle', horizontal: 'left' };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });
    
    // Add the row with explicit field mapping for second form
    const dataRow2 = worksheet2.addRow([
      secondFormData['b_01.02.0010'],
      secondFormData['b_01.02.0020'],
      secondFormData['b_01.02.0030'],
      secondFormData['b_01.02.0040'], // Keep ID for entity type
      secondFormData['b_01.02.0050'], // Keep ID for hierarchy
      secondFormData['b_01.02.0060'],
      secondFormData['b_01.02.0070'],
      secondFormData['b_01.02.0080'],
      secondFormData['b_01.02.0090'],
      secondFormData['b_01.02.0100'], // Keep ID for currency
      secondFormData['b_01.02.0110']
    ]);

    // Style the data row for second form
    dataRow2.eachCell((cell) => {
      cell.alignment = { vertical: 'middle', horizontal: 'left' };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });
    
    // Add the row with explicit field mapping for third form
    const dataRow3 = worksheet3.addRow([
      thirdFormData['b_01.03.0010'],
      thirdFormData['b_01.03.0020'],
      thirdFormData['b_01.03.0030'],
      thirdFormData['b_01.03.0040'] // Keep ID for country
    ]);

    // Style the data row for third form
    dataRow3.eachCell((cell) => {
      cell.alignment = { vertical: 'middle', horizontal: 'left' };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });
  });

  console.log('exportToExcel - Generating Excel file with multiple sheets');
  
  // Generate the Excel file
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `entity_information_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
};
