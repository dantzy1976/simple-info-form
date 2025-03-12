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
  updateProvider: (provider: Provider) => void;
  
  // Operations
  loadProviders: () => Promise<void>;
  createNewProvider: () => Provider;
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
      
      updateProvider: (updatedProvider) => {
        const providers = get().providers.map(provider => 
          provider.id === updatedProvider.id ? updatedProvider : provider
        );
        
        set({ providers });
      },
      
      loadProviders: async () => {
        try {
          // Using 'providers' table name here (changed from 'entities')
          const { data, error } = await supabase
            .from('providers')
            .select('*')
            .order('created_at', { ascending: false });
            
          if (error) throw error;
          
          set({ providers: data as Provider[] });
        } catch (error) {
          console.error('Error loading providers:', error);
          // Fallback to local data if there's an error
          // This allows the app to work without Supabase connection
          console.log('Using local provider data only');
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
        
        const updatedProviders = [...get().providers, newProvider];
        set({ 
          providers: updatedProviders,
          currentProvider: newProvider 
        });
        
        return newProvider;
      },
      
      saveProvider: async (provider) => {
        try {
          // Using 'providers' table name here (changed from 'entities')
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
            description: "There was an error saving the provider. Changes are stored locally only.",
            variant: "destructive",
          });
          // Even if saving to Supabase fails, keep the local changes
          return true;
        }
      },
      
      deleteProvider: async (providerId) => {
        try {
          // Using 'providers' table name here (changed from 'entities')
          const { error } = await supabase
            .from('providers')
            .delete()
            .eq('id', providerId);
          
          // Even if there's an error with Supabase, remove from local state
          const filteredProviders = get().providers.filter(p => p.id !== providerId);
          set({ providers: filteredProviders });
          
          if (error) throw error;
          return true;
        } catch (error) {
          console.error('Error deleting provider:', error);
          toast({
            title: "Failed to delete from database",
            description: "There was an error deleting the provider from the database, but it was removed locally.",
            variant: "destructive",
          });
          return true;
        }
      }
    }),
    {
      name: 'provider-storage',
    }
  )
);
