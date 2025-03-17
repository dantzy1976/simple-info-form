
import ExcelJS from 'exceljs';

/**
 * Process entity data and add it to the appropriate worksheets
 */
export const processEntityData = (
  entityData: Record<string, any>,
  worksheet1: ExcelJS.Worksheet,
  worksheet2: ExcelJS.Worksheet,
  worksheet3: ExcelJS.Worksheet,
  providerSheet: ExcelJS.Worksheet,
  entitySigningSheet: ExcelJS.Worksheet,
  ictProviderSheet: ExcelJS.Worksheet,
  ictEntityProviderSheet: ExcelJS.Worksheet,
  entityUsingIctServicesSheet: ExcelJS.Worksheet,
  ictThirdPartyProviderInfoSheet: ExcelJS.Worksheet,
  ictServicesInfoSheet: ExcelJS.Worksheet,
  functionInfoSheet: ExcelJS.Worksheet,
  ictServiceProviderAssessmentSheet: ExcelJS.Worksheet,
  additionalProviderInfoSheet: ExcelJS.Worksheet,
  metadataSheet: ExcelJS.Worksheet
) => {
  console.log('processEntityData - Processing entity data:', entityData);

  // Process b_01.01 data
  const form1Data = [
    entityData['b_01.01.0010'] || entityData['b_01_01_0010'] || '',
    entityData['b_01.01.0020'] || entityData['b_01_01_0020'] || '',
    entityData['b_01.01.0030'] || entityData['b_01_01_0030'] || '',
    entityData['b_01.01.0040'] || entityData['b_01_01_0040'] || '',
    entityData['b_01.01.0050'] || entityData['b_01_01_0050'] || '',
    entityData['b_01.01.0060'] || entityData['b_01_01_0060'] || ''
  ];
  
  if (form1Data.some(item => item !== '')) {
    worksheet1.addRow(form1Data);
  }
  
  // Process b_01.02 data
  const form2Data = [
    entityData['b_01.02.0010'] || entityData['b_01_02_0010'] || '',
    entityData['b_01.02.0020'] || entityData['b_01_02_0020'] || '',
    entityData['b_01.02.0030'] || entityData['b_01_02_0030'] || '',
    entityData['b_01.02.0040'] || entityData['b_01_02_0040'] || '',
    entityData['b_01.02.0050'] || entityData['b_01_02_0050'] || '',
    entityData['b_01.02.0060'] || entityData['b_01_02_0060'] || '',
    entityData['b_01.02.0070'] || entityData['b_01_02_0070'] || ''
  ];
  
  if (form2Data.some(item => item !== '')) {
    worksheet2.addRow(form2Data);
  }
  
  // Process b_01.03 data
  const form3Data = [
    entityData['b_01.03.0010'] || entityData['b_01_03_0010'] || '',
    entityData['b_01.03.0020'] || entityData['b_01_03_0020'] || '',
    entityData['b_01.03.0030'] || entityData['b_01_03_0030'] || ''
  ];
  
  if (form3Data.some(item => item !== '')) {
    worksheet3.addRow(form3Data);
  }
  
  // Process b_02.01 data
  const providerData = [
    entityData['b_02.01.0010'] || entityData['b_02_01_0010'] || '',
    entityData['b_02.01.0020'] || entityData['b_02_01_0020'] || '',
    entityData['b_02.01.0030'] || entityData['b_02_01_0030'] || '',
    entityData['b_02.01.0040'] || entityData['b_02_01_0040'] || '',
    entityData['b_02.01.0050'] || entityData['b_02_01_0050'] || '',
    entityData['b_02.01.0060'] || entityData['b_02_01_0060'] || ''
  ];
  
  if (providerData.some(item => item !== '')) {
    providerSheet.addRow(providerData);
  }
  
  // Process b_02.02 data
  const entitySigningData = [
    entityData['b_02.02.0010'] || entityData['b_02_02_0010'] || '',
    entityData['b_02.02.0020'] || entityData['b_02_02_0020'] || '',
    entityData['b_02.02.0030'] || entityData['b_02_02_0030'] || '',
    entityData['b_02.02.0040'] || entityData['b_02_02_0040'] || '',
    entityData['b_02.02.0050'] || entityData['b_02_02_0050'] || '',
    entityData['b_02.02.0060'] || entityData['b_02_02_0060'] || ''
  ];
  
  if (entitySigningData.some(item => item !== '')) {
    entitySigningSheet.addRow(entitySigningData);
  }
  
  // Process b_03.01 data
  const ictProviderData = [
    entityData['b_03.01.0010'] || entityData['b_03_01_0010'] || '',
    entityData['b_03.01.0020'] || entityData['b_03_01_0020'] || '',
    entityData['b_03.01.0030'] || entityData['b_03_01_0030'] || ''
  ];
  
  if (ictProviderData.some(item => item !== '')) {
    ictProviderSheet.addRow(ictProviderData);
  }
  
  // Process b_03.02 data
  const ictEntityProviderData = [
    entityData['b_03.02.0010'] || entityData['b_03_02_0010'] || '',
    entityData['b_03.02.0020'] || entityData['b_03_02_0020'] || '',
    entityData['b_03.02.0030'] || entityData['b_03_02_0030'] || '',
    entityData['b_03.02.0045'] || entityData['b_03_02_0045'] || ''
  ];
  
  if (ictEntityProviderData.some(item => item !== '')) {
    ictEntityProviderSheet.addRow(ictEntityProviderData);
  }
  
  // Process b_03.03 data
  const entityUsingIctServicesData = [
    entityData['b_03.03.0010'] || entityData['b_03_03_0010'] || '',
    entityData['b_03.03.0020'] || entityData['b_03_03_0020'] || '',
    entityData['b_03.03.0031'] || entityData['b_03_03_0031'] || ''
  ];
  
  if (entityUsingIctServicesData.some(item => item !== '')) {
    entityUsingIctServicesSheet.addRow(entityUsingIctServicesData);
  }
  
  // Process b_04.01 data
  const ictThirdPartyProviderInfoData = [
    entityData['b_04.01.0010'] || entityData['b_04_01_0010'] || '',
    entityData['b_04.01.0020'] || entityData['b_04_01_0020'] || '',
    entityData['b_04.01.0030'] || entityData['b_04_01_0030'] || '',
    entityData['b_04.01.0040'] || entityData['b_04_01_0040'] || ''
  ];
  
  if (ictThirdPartyProviderInfoData.some(item => item !== '')) {
    ictThirdPartyProviderInfoSheet.addRow(ictThirdPartyProviderInfoData);
  }
  
  // Process b_05.01 data
  const ictServicesInfoData = [
    entityData['b_05.01.0010'] || entityData['b_05_01_0010'] || '',
    entityData['b_05.01.0020'] || entityData['b_05_01_0020'] || '',
    entityData['b_05.01.0030'] || entityData['b_05_01_0030'] || ''
  ];
  
  if (ictServicesInfoData.some(item => item !== '')) {
    ictServicesInfoSheet.addRow(ictServicesInfoData);
  }
  
  // Process b_05.02 data
  const functionInfoData = [
    entityData['b_05.02.0010'] || entityData['b_05_02_0010'] || '',
    entityData['b_05.02.0020'] || entityData['b_05_02_0020'] || '',
    entityData['b_05.02.0030'] || entityData['b_05_02_0030'] || ''
  ];
  
  if (functionInfoData.some(item => item !== '')) {
    functionInfoSheet.addRow(functionInfoData);
  }
  
  // Process b_06.01 data
  const ictServiceProviderAssessmentData = [
    entityData['b_06.01.0010'] || entityData['b_06_01_0010'] || '',
    entityData['b_06.01.0020'] || entityData['b_06_01_0020'] || '',
    entityData['b_06.01.0030'] || entityData['b_06_01_0030'] || ''
  ];
  
  if (ictServiceProviderAssessmentData.some(item => item !== '')) {
    ictServiceProviderAssessmentSheet.addRow(ictServiceProviderAssessmentData);
  }
  
  // Process b_07.01 data
  const additionalProviderInfoData = [
    entityData['b_07.01.0010'] || entityData['b_07_01_0010'] || '',
    entityData['b_07.01.0020'] || entityData['b_07_01_0020'] || '',
    entityData['b_07.01.0030'] || entityData['b_07_01_0030'] || ''
  ];
  
  if (additionalProviderInfoData.some(item => item !== '')) {
    additionalProviderInfoSheet.addRow(additionalProviderInfoData);
  }
  
  // Process b_99.01 data (metadata)
  const metadataData = [
    entityData['b_99.01.0010'] || entityData['b_99_01_0010'] || '',
    entityData['b_99.01.0020'] || entityData['b_99_01_0020'] || '',
    entityData['b_99.01.0030'] || entityData['b_99_01_0030'] || ''
  ];
  
  if (metadataData.some(item => item !== '')) {
    metadataSheet.addRow(metadataData);
  }
};
