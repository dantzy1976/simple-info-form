
import ExcelJS from 'exceljs';
import { addHeader, setColumnWidths } from './utils';

/**
 * Creates the b_01.01 worksheet
 */
export const createFirstWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_01.01');
  
  addHeader(worksheet, [
    'b_01.01.0010',
    'b_01.01.0020',
    'b_01.01.0030',
    'b_01.01.0040',
    'b_01.01.0050',
    'b_01.01.0060'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_01.02 worksheet
 */
export const createSecondWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_01.02');
  
  addHeader(worksheet, [
    'b_01.02.0010',
    'b_01.02.0020',
    'b_01.02.0030',
    'b_01.02.0040',
    'b_01.02.0050',
    'b_01.02.0060',
    'b_01.02.0070'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_01.03 worksheet
 */
export const createThirdWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_01.03');
  
  addHeader(worksheet, [
    'b_01.03.0010',
    'b_01.03.0020',
    'b_01.03.0030'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_02.01 worksheet for provider arrangements
 */
export const createProviderArrangementWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_02.01');
  
  addHeader(worksheet, [
    'b_02.01.0010',
    'b_02.01.0020',
    'b_02.01.0030',
    'b_02.01.0040',
    'b_02.01.0050',
    'b_02.01.0060'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_02.02 worksheet for entity signing
 */
export const createEntitySigningWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_02.02');
  
  addHeader(worksheet, [
    'b_02.02.0010',
    'b_02.02.0020',
    'b_02.02.0030',
    'b_02.02.0040',
    'b_02.02.0050',
    'b_02.02.0060'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_03.01 worksheet for ICT provider
 */
export const createIctProviderWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_03.01');
  
  addHeader(worksheet, [
    'b_03.01.0010',
    'b_03.01.0020',
    'b_03.01.0030'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_03.02 worksheet for ICT entity provider
 */
export const createIctEntityProviderWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_03.02');
  
  addHeader(worksheet, [
    'b_03.02.0010',
    'b_03.02.0020',
    'b_03.02.0030',
    'b_03.02.0045'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_03.03 worksheet for entity using ICT services
 */
export const createEntityUsingIctServicesWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_03.03');
  
  addHeader(worksheet, [
    'b_03.03.0010',
    'b_03.03.0020',
    'b_03.03.0031'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_04.01 worksheet for ICT third-party provider info
 */
export const createIctThirdPartyProviderInfoWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_04.01');
  
  addHeader(worksheet, [
    'b_04.01.0010',
    'b_04.01.0020',
    'b_04.01.0030',
    'b_04.01.0040'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_05.01 worksheet for ICT services info
 */
export const createIctServicesInfoWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_05.01');
  
  addHeader(worksheet, [
    'b_05.01.0010',
    'b_05.01.0020',
    'b_05.01.0030'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_05.02 worksheet for function info
 */
export const createFunctionInfoWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_05.02');
  
  addHeader(worksheet, [
    'b_05.02.0010',
    'b_05.02.0020',
    'b_05.02.0030'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_06.01 worksheet for ICT service provider assessment
 */
export const createIctServiceProviderAssessmentWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_06.01');
  
  addHeader(worksheet, [
    'b_06.01.0010',
    'b_06.01.0020',
    'b_06.01.0030'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_07.01 worksheet for additional provider info
 */
export const createAdditionalProviderInfoWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_07.01');
  
  addHeader(worksheet, [
    'b_07.01.0010',
    'b_07.01.0020',
    'b_07.01.0030'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};

/**
 * Creates the b_99.01 worksheet for final metadata info
 */
export const createMetadataWorksheet = (workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet('b_99.01');
  
  addHeader(worksheet, [
    'b_99.01.0010',
    'b_99.01.0020',
    'b_99.01.0030'
  ]);
  
  setColumnWidths(worksheet, 25);
  
  return worksheet;
};
