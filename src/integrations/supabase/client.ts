// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wcgxskzkpswiokhzrsrk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjZ3hza3prcHN3aW9raHpyc3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExODEyOTgsImV4cCI6MjA1Njc1NzI5OH0.f11vzNOHsnHjZjP9OfrQwm0vhKzq3JRTPv09r4jpPNw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);