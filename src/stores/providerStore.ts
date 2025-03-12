
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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
          // Local-only implementation - nothing to load from server
          console.log('Providers loaded from local storage');
          // All providers are already loaded from persist middleware
        } catch (error) {
          console.error('Error loading providers:', error);
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
          // Local-only implementation - just update the state
          const existingProviderIndex = get().providers.findIndex(p => p.id === provider.id);
          
          if (existingProviderIndex >= 0) {
            // Update existing provider
            const updatedProviders = [...get().providers];
            updatedProviders[existingProviderIndex] = {
              ...provider,
              updated_at: new Date().toISOString()
            };
            
            set({ providers: updatedProviders });
          } else {
            // Add new provider
            set({ 
              providers: [...get().providers, {
                ...provider,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              }]
            });
          }
          
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
          // Local-only implementation - just filter out the deleted provider
          const filteredProviders = get().providers.filter(p => p.id !== providerId);
          set({ providers: filteredProviders });
          
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
