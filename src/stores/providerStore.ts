
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/hooks/use-toast';
import { Provider } from '@/types/entity.types';

interface ProviderState {
  providers: Provider[];
  currentProvider: Provider | null;
  
  // Actions
  setProviders: (providers: Provider[]) => void;
  setCurrentProvider: (provider: Provider | null) => void;
  updateCurrentProvider: (data: Partial<Provider>) => void;
  updateProvider: (provider: Provider) => void;
  
  // Operations
  loadProviders: () => void;
  createNewProvider: () => Provider;
  saveProvider: (provider: Provider) => boolean;
  deleteProvider: (providerId: string) => boolean;
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
      
      loadProviders: () => {
        // When using only local storage, this function just returns
        // as the data is already loaded via Zustand's persist middleware
        console.log('Providers loaded from local storage');
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
      
      saveProvider: (provider) => {
        try {
          // Check if the provider already exists in the local array
          const existingIndex = get().providers.findIndex(p => p.id === provider.id);
          let updatedProviders;
          
          if (existingIndex >= 0) {
            // Update existing provider
            updatedProviders = [...get().providers];
            updatedProviders[existingIndex] = {
              ...provider,
              updated_at: new Date().toISOString()
            };
          } else {
            // Add new provider
            updatedProviders = [...get().providers, provider];
          }
          
          set({ providers: updatedProviders });
          toast({
            title: "Provider saved",
            description: "The provider has been saved successfully.",
          });
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
      
      deleteProvider: (providerId) => {
        try {
          const filteredProviders = get().providers.filter(p => p.id !== providerId);
          set({ providers: filteredProviders });
          
          toast({
            title: "Provider deleted",
            description: "The provider has been deleted successfully.",
          });
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
