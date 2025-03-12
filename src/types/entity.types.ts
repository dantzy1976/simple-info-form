
import { Json } from '@/integrations/supabase/types';

export interface FormValues {
  [key: string]: any;
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
  data: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface ProviderFormData {
  b_02_01_0010?: string; // Contractual arrangement reference number
  b_02_01_0020?: string; // Type of contractual arrangement
  b_02_01_0030?: string; // Overarching contractual arrangement reference number
  b_02_01_0040?: string; // Currency
  b_02_01_0050?: string | number; // Annual expense or estimated cost
  [key: string]: any; // Allow other properties
}
