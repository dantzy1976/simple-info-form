
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
