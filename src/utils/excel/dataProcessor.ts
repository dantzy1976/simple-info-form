import ExcelJS from 'exceljs';

/**
 * Process entity data and add it to the appropriate worksheets
 */
export const processEntityData = (
  data: Record<string, any>, 
  worksheet1: ExcelJS.Worksheet, 
  worksheet2: ExcelJS.Worksheet, 
  worksheet3: ExcelJS.Worksheet,
  providerSheet?: ExcelJS.Worksheet,
  entitySigningSheet?: ExcelJS.Worksheet,
  ictProviderSheet?: ExcelJS.Worksheet,
  ictEntityProviderSheet?: ExcelJS.Worksheet,
  entityUsingIctServicesSheet?: ExcelJS.Worksheet,
  ictThirdPartyProviderInfoSheet?: ExcelJS.Worksheet,
  ictServicesInfoSheet?: ExcelJS.Worksheet,
  functionInfoSheet?: ExcelJS.Worksheet,
  ictServiceProviderAssessmentSheet?: ExcelJS.Worksheet,
  additionalProviderInfoSheet?: ExcelJS.Worksheet
) => {
  // Create normalized objects for each form
  const firstFormData = createEmptyFirstFormData();
  const secondFormData = createEmptySecondFormData();
  const thirdFormData = createEmptyThirdFormData();
  const providerFormData = createEmptyProviderFormData();
  const entitySigningFormData = createEmptyEntitySigningFormData();
  const ictProviderFormData = createEmptyIctProviderFormData();
  const ictEntityProviderFormData = createEmptyIctEntityProviderFormData();
  const entityUsingIctServicesFormData = createEmptyEntityUsingIctServicesFormData();
  const ictThirdPartyProviderInfoFormData = createEmptyIctThirdPartyProviderInfoFormData();
  const ictServicesInfoFormData = createEmptyIctServicesInfoFormData();
  const functionInfoFormData = createEmptyFunctionInfoFormData();
  const ictServiceProviderAssessmentFormData = createEmptyIctServiceProviderAssessmentFormData();
  const additionalProviderInfoFormData = createEmptyAdditionalProviderInfoFormData();
  
  // Process all keys in the data object
  Object.keys(data).forEach(key => {
    console.log(`exportToExcel - Processing key "${key}" with value:`, data[key]);
    
    // Convert key formats for field matching
    const normalizedKey = normalizeKey(key);
    
    console.log(`exportToExcel - Converted key "${key}" to "${normalizedKey}"`);
    
    // Assign data to the appropriate form
    assignDataToForms(
      normalizedKey, 
      key, 
      data, 
      firstFormData, 
      secondFormData, 
      thirdFormData, 
      providerFormData, 
      entitySigningFormData,
      ictProviderFormData,
      ictEntityProviderFormData,
      entityUsingIctServicesFormData,
      ictThirdPartyProviderInfoFormData,
      ictServicesInfoFormData,
      functionInfoFormData,
      ictServiceProviderAssessmentFormData,
      additionalProviderInfoFormData
    );
  });
  
  console.log('exportToExcel - Final normalized data for first form:', firstFormData);
  console.log('exportToExcel - Final normalized data for second form:', secondFormData);
  console.log('exportToExcel - Final normalized data for third form:', thirdFormData);
  
  // Add data rows to each worksheet
  addDataToWorksheet(worksheet1, firstFormData, Object.keys(firstFormData));
  addDataToWorksheet(worksheet2, secondFormData, Object.keys(secondFormData));
  addDataToWorksheet(worksheet3, thirdFormData, Object.keys(thirdFormData));
  
  // Add provider data if provider sheet exists
  if (providerSheet) {
    addDataToWorksheet(providerSheet, providerFormData, Object.keys(providerFormData));
  }
  
  // Add entity signing data if entity signing sheet exists
  if (entitySigningSheet) {
    addDataToWorksheet(entitySigningSheet, entitySigningFormData, Object.keys(entitySigningFormData));
  }
  
  // Add ICT provider data if ICT provider sheet exists
  if (ictProviderSheet) {
    addDataToWorksheet(ictProviderSheet, ictProviderFormData, Object.keys(ictProviderFormData));
  }
  
  // Add ICT entity provider data if ICT entity provider sheet exists
  if (ictEntityProviderSheet) {
    addDataToWorksheet(ictEntityProviderSheet, ictEntityProviderFormData, Object.keys(ictEntityProviderFormData));
  }
  
  // Add entity using ICT services data if that sheet exists
  if (entityUsingIctServicesSheet) {
    addDataToWorksheet(entityUsingIctServicesSheet, entityUsingIctServicesFormData, Object.keys(entityUsingIctServicesFormData));
  }
  
  // Add ICT third-party provider info data if that sheet exists
  if (ictThirdPartyProviderInfoSheet) {
    addDataToWorksheet(ictThirdPartyProviderInfoSheet, ictThirdPartyProviderInfoFormData, Object.keys(ictThirdPartyProviderInfoFormData));
  }
  
  // Add ICT services info data if that sheet exists
  if (ictServicesInfoSheet) {
    addDataToWorksheet(ictServicesInfoSheet, ictServicesInfoFormData, Object.keys(ictServicesInfoFormData));
  }
  
  // Add function info data if that sheet exists
  if (functionInfoSheet) {
    addDataToWorksheet(functionInfoSheet, functionInfoFormData, Object.keys(functionInfoFormData));
  }
  
  // Add ICT service provider assessment data if that sheet exists
  if (ictServiceProviderAssessmentSheet) {
    addDataToWorksheet(ictServiceProviderAssessmentSheet, ictServiceProviderAssessmentFormData, Object.keys(ictServiceProviderAssessmentFormData));
  }
  
  // Add additional provider info data if that sheet exists
  if (additionalProviderInfoSheet) {
    addDataToWorksheet(additionalProviderInfoSheet, additionalProviderInfoFormData, Object.keys(additionalProviderInfoFormData));
  }
};

/**
 * Helper function to create an empty data object for the first form
 */
const createEmptyFirstFormData = () => ({
  'b_01.01.0010': '',
  'b_01.01.0020': '',
  'b_01.01.0030': '',
  'b_01.01.0040': '',
  'b_01.01.0050': '',
  'b_01.01.0060': ''
});

/**
 * Helper function to create an empty data object for the second form
 */
const createEmptySecondFormData = () => ({
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
});

/**
 * Helper function to create an empty data object for the third form
 */
const createEmptyThirdFormData = () => ({
  'b_01.03.0010': '',
  'b_01.03.0020': '',
  'b_01.03.0030': '',
  'b_01.03.0040': ''
});

/**
 * Helper function to create an empty data object for the provider form
 */
const createEmptyProviderFormData = () => ({
  'b_02.03.0010': '',
  'b_02.03.0020': '',
  'b_02.03.0030': 'true'
});

/**
 * Helper function to create an empty data object for the entity signing form
 */
const createEmptyEntitySigningFormData = () => ({
  'b_03.01.0010': '',
  'b_03.01.0020': '',
  'b_03.01.0030': 'true'
});

/**
 * Helper function to create an empty data object for the ICT provider form
 */
const createEmptyIctProviderFormData = () => ({
  'b_03.02.0010': '',
  'b_03.02.0020': '',
  'b_03.02.0030': '',
  'b_03.02.0045': 'true'
});

/**
 * Helper function to create an empty data object for the ICT entity provider form
 */
const createEmptyIctEntityProviderFormData = () => ({
  'b_03.03.0010': '',
  'b_03.03.0020': '',
  'b_03.03.0031': 'true'
});

/**
 * Helper function to create an empty data object for the entity using ICT services form
 */
const createEmptyEntityUsingIctServicesFormData = () => ({
  'b_04.01.0010': '',
  'b_04.01.0020': '',
  'b_04.01.0030': '',
  'b_04.01.0040': ''
});

/**
 * Helper function to create an empty data object for the ICT third-party provider info form
 */
const createEmptyIctThirdPartyProviderInfoFormData = () => ({
  'b_05.01.0010': '',
  'b_05.01.0020': '',
  'b_05.01.0030': '',
  'b_05.01.0040': '',
  'b_05.01.0050': '',
  'b_05.01.0060': '',
  'b_05.01.0070': '',
  'b_05.01.0080': '',
  'b_05.01.0090': ''
});

/**
 * Helper function to create an empty data object for the ICT services info form
 */
const createEmptyIctServicesInfoFormData = () => ({
  'b_05.02.0010': '',
  'b_05.02.0020': '',
  'b_05.02.0030': '',
  'b_05.02.0040': '',
  'b_05.02.0050': '',
  'b_05.02.0060': '',
  'b_05.02.0070': ''
});

/**
 * Helper function to create an empty data object for the function info form
 */
const createEmptyFunctionInfoFormData = () => ({
  'b_06.01.0010': '',
  'b_06.01.0020': '',
  'b_06.01.0030': '',
  'b_06.01.0040': '',
  'b_06.01.0050': '',
  'b_06.01.0060': '',
  'b_06.01.0070': '',
  'b_06.01.0080': '',
  'b_06.01.0090': '',
  'b_06.01.0100': ''
});

/**
 * Helper function to create an empty data object for the ICT service provider assessment form
 */
const createEmptyIctServiceProviderAssessmentFormData = () => ({
  'b_07.01.0010': '',
  'b_07.01.0020': '',
  'b_07.01.0030': '',
  'b_07.01.0040': '',
  'b_07.01.0050': '',
  'b_07.01.0060': '',
  'b_07.01.0070': '',
  'b_07.01.0080': '',
  'b_07.01.0090': '',
  'b_07.01.0100': '',
  'b_07.01.0110': '',
  'b_07.01.0120': ''
});

/**
 * Helper function to create an empty data object for the additional provider info form
 */
const createEmptyAdditionalProviderInfoFormData = () => ({
  'b_99.01.0010': '',
  'b_99.01.0020': '',
  'b_99.01.0030': '',
  'b_99.01.0040': '',
  'b_99.01.0050': '',
  'b_99.01.0060': '',
  'b_99.01.0070': '',
  'b_99.01.0080': '',
  'b_99.01.0090': '',
  'b_99.01.0100': '',
  'b_99.01.0110': '',
  'b_99.01.0120': '',
  'b_99.01.0130': '',
  'b_99.01.0140': '',
  'b_99.01.0150': '',
  'b_99.01.0160': '',
  'b_99.01.0170': '',
  'b_99.01.0180': '',
  'b_99.01.0190': ''
});

/**
 * Helper function to normalize keys (convert from form format to export format)
 */
const normalizeKey = (key: string): string => {
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
  
  return normalizedKey;
};

/**
 * Helper function to assign data to the appropriate form data objects
 */
const assignDataToForms = (
  normalizedKey: string,
  originalKey: string,
  data: Record<string, any>,
  firstFormData: Record<string, string>,
  secondFormData: Record<string, string>,
  thirdFormData: Record<string, string>,
  providerFormData?: Record<string, string>,
  entitySigningFormData?: Record<string, string>,
  ictProviderFormData?: Record<string, string>,
  ictEntityProviderFormData?: Record<string, string>,
  entityUsingIctServicesFormData?: Record<string, string>,
  ictThirdPartyProviderInfoFormData?: Record<string, string>,
  ictServicesInfoFormData?: Record<string, string>,
  functionInfoFormData?: Record<string, string>,
  ictServiceProviderAssessmentFormData?: Record<string, string>,
  additionalProviderInfoFormData?: Record<string, string>
) => {
  // Check if this belongs to first form
  if (normalizedKey && normalizedKey.includes('01.01') && Object.keys(firstFormData).includes(normalizedKey)) {
    firstFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched first form field "${normalizedKey}" with value:`, data[originalKey]);
  } 
  // Check if this belongs to second form
  else if (normalizedKey && normalizedKey.includes('01.02') && Object.keys(secondFormData).includes(normalizedKey)) {
    secondFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched second form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to third form
  else if (normalizedKey && normalizedKey.includes('01.03') && Object.keys(thirdFormData).includes(normalizedKey)) {
    thirdFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched third form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to provider form
  else if (providerFormData && normalizedKey && normalizedKey.includes('02.03') && Object.keys(providerFormData).includes(normalizedKey)) {
    providerFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched provider form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to entity signing form
  else if (entitySigningFormData && normalizedKey && normalizedKey.includes('03.01') && Object.keys(entitySigningFormData).includes(normalizedKey)) {
    entitySigningFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched entity signing form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to ICT provider form
  else if (ictProviderFormData && normalizedKey && normalizedKey.includes('03.02') && Object.keys(ictProviderFormData).includes(normalizedKey)) {
    ictProviderFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched ICT provider form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to ICT entity provider form
  else if (ictEntityProviderFormData && normalizedKey && normalizedKey.includes('03.03') && Object.keys(ictEntityProviderFormData).includes(normalizedKey)) {
    ictEntityProviderFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched ICT entity provider form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to entity using ICT services form
  else if (entityUsingIctServicesFormData && normalizedKey && normalizedKey.includes('04.01') && Object.keys(entityUsingIctServicesFormData).includes(normalizedKey)) {
    entityUsingIctServicesFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched entity using ICT services form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to ICT third-party provider info form
  else if (ictThirdPartyProviderInfoFormData && normalizedKey && normalizedKey.includes('05.01') && Object.keys(ictThirdPartyProviderInfoFormData).includes(normalizedKey)) {
    ictThirdPartyProviderInfoFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched ICT third-party provider info form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to ICT services info form
  else if (ictServicesInfoFormData && normalizedKey && normalizedKey.includes('05.02') && Object.keys(ictServicesInfoFormData).includes(normalizedKey)) {
    ictServicesInfoFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched ICT services info form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to function info form
  else if (functionInfoFormData && normalizedKey && normalizedKey.includes('06.01') && Object.keys(functionInfoFormData).includes(normalizedKey)) {
    functionInfoFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched function info form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to ICT service provider assessment form
  else if (ictServiceProviderAssessmentFormData && normalizedKey && normalizedKey.includes('07.01') && Object.keys(ictServiceProviderAssessmentFormData).includes(normalizedKey)) {
    ictServiceProviderAssessmentFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched ICT service provider assessment form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Check if this belongs to additional provider info form
  else if (additionalProviderInfoFormData && normalizedKey && normalizedKey.includes('99.01') && Object.keys(additionalProviderInfoFormData).includes(normalizedKey)) {
    additionalProviderInfoFormData[normalizedKey] = data[originalKey];
    console.log(`exportToExcel - Matched additional provider info form field "${normalizedKey}" with value:`, data[originalKey]);
  }
  // Try direct mapping for keys that weren't converted properly
  else {
    tryDirectMapping(
      originalKey, 
      data, 
      firstFormData, 
      secondFormData, 
      thirdFormData, 
      providerFormData, 
      entitySigningFormData,
      ictProviderFormData,
      ictEntityProviderFormData,
      entityUsingIctServicesFormData,
      ictThirdPartyProviderInfoFormData,
      ictServicesInfoFormData,
      functionInfoFormData,
      ictServiceProviderAssessmentFormData,
      additionalProviderInfoFormData
    );
  }
};

/**
 * Helper function to attempt direct mapping for keys that don't normalize properly
 */
const tryDirectMapping = (
  key: string,
  data: Record<string, any>,
  firstFormData: Record<string, string>,
  secondFormData: Record<string, string>,
  thirdFormData: Record<string, string>,
  providerFormData?: Record<string, string>,
  entitySigningFormData?: Record<string, string>,
  ictProviderFormData?: Record<string, string>,
  ictEntityProviderFormData?: Record<string, string>,
  entityUsingIctServicesFormData?: Record<string, string>,
  ictThirdPartyProviderInfoFormData?: Record<string, string>,
  ictServicesInfoFormData?: Record<string, string>,
  functionInfoFormData?: Record<string, string>,
  ictServiceProviderAssessmentFormData?: Record<string, string>,
  additionalProviderInfoFormData?: Record<string, string>
) => {
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
  // Provider form direct mapping
  else if (providerFormData && key.includes('02_03')) {
    const directKey = `b_02.03.${key.split('_').pop()}`;
    if (Object.keys(providerFormData).includes(directKey)) {
      providerFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched provider form field "${directKey}" with value:`, data[key]);
    }
  }
  // Entity signing form direct mapping
  else if (entitySigningFormData && key.includes('03_01')) {
    const directKey = `b_03.01.${key.split('_').pop()}`;
    if (Object.keys(entitySigningFormData).includes(directKey)) {
      entitySigningFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched entity signing form field "${directKey}" with value:`, data[key]);
    }
  }
  // ICT provider form direct mapping
  else if (ictProviderFormData && key.includes('03_02')) {
    const directKey = `b_03.02.${key.split('_').pop()}`;
    if (Object.keys(ictProviderFormData).includes(directKey)) {
      ictProviderFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched ICT provider form field "${directKey}" with value:`, data[key]);
    }
  }
  // ICT entity provider form direct mapping
  else if (ictEntityProviderFormData && key.includes('03_03')) {
    const directKey = `b_03.03.${key.split('_').pop()}`;
    if (Object.keys(ictEntityProviderFormData).includes(directKey)) {
      ictEntityProviderFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched ICT entity provider form field "${directKey}" with value:`, data[key]);
    }
  }
  // Entity using ICT services form direct mapping
  else if (entityUsingIctServicesFormData && key.includes('04_01')) {
    const directKey = `b_04.01.${key.split('_').pop()}`;
    if (Object.keys(entityUsingIctServicesFormData).includes(directKey)) {
      entityUsingIctServicesFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched entity using ICT services form field "${directKey}" with value:`, data[key]);
    }
  }
  // ICT third-party provider info form direct mapping
  else if (ictThirdPartyProviderInfoFormData && key.includes('05_01')) {
    const directKey = `b_05.01.${key.split('_').pop()}`;
    if (Object.keys(ictThirdPartyProviderInfoFormData).includes(directKey)) {
      ictThirdPartyProviderInfoFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched ICT third-party provider info form field "${directKey}" with value:`, data[key]);
    }
  }
  // ICT services info form direct mapping
  else if (ictServicesInfoFormData && key.includes('05_02')) {
    const directKey = `b_05.02.${key.split('_').pop()}`;
    if (Object.keys(ictServicesInfoFormData).includes(directKey)) {
      ictServicesInfoFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched ICT services info form field "${directKey}" with value:`, data[key]);
    }
  }
  // Function info form direct mapping
  else if (functionInfoFormData && key.includes('06_01')) {
    const directKey = `b_06.01.${key.split('_').pop()}`;
    if (Object.keys(functionInfoFormData).includes(directKey)) {
      functionInfoFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched function info form field "${directKey}" with value:`, data[key]);
    }
  }
  // ICT service provider assessment form direct mapping
  else if (ictServiceProviderAssessmentFormData && key.includes('07_01')) {
    const directKey = `b_07.01.${key.split('_').pop()}`;
    if (Object.keys(ictServiceProviderAssessmentFormData).includes(directKey)) {
      ictServiceProviderAssessmentFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched ICT service provider assessment form field "${directKey}" with value:`, data[key]);
    }
  }
  // Additional provider info form direct mapping
  else if (additionalProviderInfoFormData && key.includes('99_01')) {
    const directKey = `b_99.01.${key.split('_').pop()}`;
    if (Object.keys(additionalProviderInfoFormData).includes(directKey)) {
      additionalProviderInfoFormData[directKey] = data[key];
      console.log(`exportToExcel - Direct matched additional provider info form field "${directKey}" with value:`, data[key]);
    }
  }
};

/**
 * Helper function to add data to worksheet and style it
 */
const addDataToWorksheet = (
  worksheet: ExcelJS.Worksheet, 
  formData: Record<string, string>,
  keys: string[]
) => {
  // Extract values in the same order as the columns
  const values = keys.map(key => formData[key]);
  
  // Add the row with all values
  const dataRow = worksheet.addRow(values);

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
};
