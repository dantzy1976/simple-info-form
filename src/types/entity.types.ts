
export interface FormValues {
  [key: string]: string | number | boolean | null | undefined;
}

export interface SavedEntity {
  name: string;
  data: FormValues;
}

export interface Provider {
  id: string;
  name: string;
  type: string;
  status: 'draft' | 'active' | 'inactive';
  data: Record<string, string | number | boolean | null | undefined>;
  created_at: string;
  updated_at: string;
}

export interface ProviderFormData {
  // b_02.01 fields
  b_02_01_0010?: string; // Contractual arrangement reference number
  b_02_01_0020?: string; // Type of contractual arrangement
  b_02_01_0030?: string; // Overarching contractual arrangement reference number
  b_02_01_0040?: string; // Currency
  b_02_01_0050?: string | number; // Annual expense or estimated cost
  
  // b_02.02 fields
  b_02_02_0010?: string; // Contractual arrangement reference number
  b_02_02_0020?: string; // LEI of the entity making use of the ICT service(s)
  b_02_02_0030?: string; // Identification code of the ICT third-party service provider
  b_02_02_0040?: string; // Type of code to identify the ICT third-party service provider
  b_02_02_0050?: string; // Function identifier
  b_02_02_0060?: string; // Type of ICT services
  b_02_02_0070?: string; // Start date of the contractual arrangement
  b_02_02_0080?: string; // End date of the contractual arrangement
  b_02_02_0090?: string; // Reason of the termination or ending of the contractual arrangement
  b_02_02_0100?: string | number; // Notice period for the financial entity
  b_02_02_0110?: string | number; // Notice period for the ICT provider
  b_02_02_0120?: string; // Country of the governing law
  b_02_02_0130?: string; // Country of provision of the ICT services
  b_02_02_0140?: string; // Storage of data
  b_02_02_0150?: string; // Location of the data at rest
  b_02_02_0160?: string; // Location of management of the data
  b_02_02_0170?: string; // Sensitiveness of the data
  b_02_02_0180?: string; // Level of reliance
  
  // b_02.03 fields
  b_02_03_0010?: string; // Contractual arrangement reference number
  b_02_03_0020?: string; // Contractual arrangement linked to the contractual arrangement referred in RT.02.03.0010
  b_02_03_0030?: string; // Link
  
  // b_03.01 fields
  b_03_01_0010?: string; // Contractual arrangement reference number
  b_03_01_0020?: string; // LEI of the entity signing the contractual arrangement
  b_03_01_0030?: string; // Link
  
  [key: string]: string | number | boolean | null | undefined; // Allow other properties
}
