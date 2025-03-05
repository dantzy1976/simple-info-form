
import { Json } from '@/integrations/supabase/types';

export interface FormValues {
  [key: string]: any;
}

export interface SavedEntity {
  name: string;
  data: FormValues;
}
