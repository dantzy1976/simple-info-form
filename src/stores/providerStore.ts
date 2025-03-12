
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '@/integrations/supabase/client';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/hooks/use-toast';

export interface Provider {
  id: string;
  name: string;
  type: string;
  status: 'draft' | 'active' | 'inactive';
  data: Record<string, any>;
  created_at: string;
  updated_at: string;
}

interface ProviderState {
  providers: Provider[];
  currentProvider: Provider | null;
  
  // Actions
  setProviders: (providers: Provider[]) => void;
  setCurrentProvider: (provider: Provider | null) => void;
  updateCurrentProvider: (data: Partial<Provider>) => void;
  
  // Operations
  loadProviders: () => Promise<void>;
  createNewProvider: () => void;
  saveProvider: (provider: Provider) => Promise<boolean>;
  deleteProvider: (providerId: string) => Promise<boolean>;
}

export const useProviderStore = create<ProviderState>()(
  persist(
    (set, get) => ({
      providers: [],
      currentProvider: null,
      
      setProviders: (providers) => set({ providers }),
      setCurrentProvider: (provider) => set({ currentProvider: provider }),
      updateCurrentProvider: (data) => {
        const current = get().currentProvider;
        if (!current) return;
        
        set({
          currentProvider: {
            ...current,
            ...data,
            updated_at: new Date().toISOString()
          }
        });
      },
      
      loadProviders: async () => {
        try {
          const { data, error } = await supabase
            .from('providers')
            .select('*')
            .order('created_at', { ascending: false });
            
          if (error) throw error;
          
          set({ providers: data as Provider[] });
        } catch (error) {
          console.error('Error loading providers:', error);
          toast({
            title: "Failed to load providers",
            description: "There was an error loading your providers.",
            variant: "destructive",
          });
        }
      },
      
      createNewProvider: () => {
        const newProvider: Provider = {
          id: uuidv4(),
          name: '',
          type: '',
          status: 'draft',
          data: {},
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        set({ currentProvider: newProvider });
      },
      
      saveProvider: async (provider) => {
        try {
          // Check if provider exists
          const { data: existingProvider } = await supabase
            .from('providers')
            .select('id')
            .eq('id', provider.id)
            .maybeSingle();
            
          if (existingProvider) {
            // Update
            const { error } = await supabase
              .from('providers')
              .update({
                name: provider.name,
                type: provider.type,
                status: provider.status,
                data: provider.data,
                updated_at: new Date().toISOString()
              })
              .eq('id', provider.id);
              
            if (error) throw error;
          } else {
            // Insert
            const { error } = await supabase
              .from('providers')
              .insert(provider);
              
            if (error) throw error;
          }
          
          await get().loadProviders();
          return true;
        } catch (error) {
          console.error('Error saving provider:', error);
          toast({
            title: "Failed to save provider",
            description: "There was an error saving the provider.",
            variant: "destructive",
          });
          return false;
        }
      },
      
      deleteProvider: async (providerId) => {
        try {
          const { error } = await supabase
            .from('providers')
            .delete()
            .eq('id', providerId);
            
          if (error) throw error;
          
          await get().loadProviders();
          return true;
        } catch (error) {
          console.error('Error deleting provider:', error);
          toast({
            title: "Failed to delete provider",
            description: "There was an error deleting the provider.",
            variant: "destructive",
          });
          return false;
        }
      }
    }),
    {
      name: 'provider-storage',
    }
  )
);
