
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';
import { 
  createFirstWorksheet, 
  createSecondWorksheet, 
  createThirdWorksheet,
  createProviderArrangementWorksheet,
  createEntitySigningWorksheet,
  createIctProviderWorksheet,
  createIctEntityProviderWorksheet,
  createEntityUsingIctServicesWorksheet,
  createIctThirdPartyProviderInfoWorksheet,
  createIctServicesInfoWorksheet,
  createFunctionInfoWorksheet,
  createIctServiceProviderAssessmentWorksheet,
  createAdditionalProviderInfoWorksheet
} from './worksheetCreators';
import { processEntityData } from './dataProcessor';

interface ExportData {
  [key: string]: any;
}

/**
 * Main function to export entity data to Excel
 */
export const exportToExcel = async (entities: ExportData[] | ExportData) => {
  console.log('exportToExcel - Received data to export:', entities);
  
  // Create a new workbook
  const workbook = new ExcelJS.Workbook();
  
  // Create worksheets with form names as sheet names
  const worksheet1 = createFirstWorksheet(workbook);
  const worksheet2 = createSecondWorksheet(workbook);
  const worksheet3 = createThirdWorksheet(workbook);
  const providerSheet = createProviderArrangementWorksheet(workbook);
  const entitySigningSheet = createEntitySigningWorksheet(workbook);
  const ictProviderSheet = createIctProviderWorksheet(workbook);
  const ictEntityProviderSheet = createIctEntityProviderWorksheet(workbook);
  const entityUsingIctServicesSheet = createEntityUsingIctServicesWorksheet(workbook);
  const ictThirdPartyProviderInfoSheet = createIctThirdPartyProviderInfoWorksheet(workbook);
  const ictServicesInfoSheet = createIctServicesInfoWorksheet(workbook);
  const functionInfoSheet = createFunctionInfoWorksheet(workbook);
  const ictServiceProviderAssessmentSheet = createIctServiceProviderAssessmentWorksheet(workbook);
  const additionalProviderInfoSheet = createAdditionalProviderInfoWorksheet(workbook);
  
  // Handle both single entity and multiple entities
  const dataArray = Array.isArray(entities) ? entities : [entities];
  
  console.log('exportToExcel - Processing data array with length:', dataArray.length);
  
  // Process each entity
  dataArray.forEach((data, index) => {
    console.log(`exportToExcel - Processing entity ${index}:`, data);
    processEntityData(
      data, 
      worksheet1, 
      worksheet2, 
      worksheet3, 
      providerSheet, 
      entitySigningSheet, 
      ictProviderSheet,
      ictEntityProviderSheet,
      entityUsingIctServicesSheet,
      ictThirdPartyProviderInfoSheet,
      ictServicesInfoSheet,
      functionInfoSheet,
      ictServiceProviderAssessmentSheet,
      additionalProviderInfoSheet
    );
  });

  console.log('exportToExcel - Generating Excel file with multiple sheets');
  
  // Generate the Excel file
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `entity_information_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
};
