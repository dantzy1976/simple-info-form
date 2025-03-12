
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FormValues, SavedEntity } from '@/types/entity.types';

interface OwnerEntityState {
  formValues: FormValues;
  entityName: string;
  isEditingName: boolean;
  tempEntityName: string;
  savedEntities: SavedEntity[];
  
  // Actions
  setFormValues: (values: FormValues) => void;
  setEntityName: (name: string) => void;
  setField: (id: string, value: any) => void;
  setIsEditingName: (isEditing: boolean) => void;
  setTempEntityName: (name: string) => void;
  setSavedEntities: (entities: SavedEntity[]) => void;
  
  // Operations
  loadSavedEntities: () => void;
  loadEntityByName: (entityName: string) => void;
  createNewEntity: () => void;
  saveEntityData: () => boolean;
  handleEditNameClick: () => void;
  handleSaveName: () => void;
  handleCancelEdit: () => void;
}

export const useOwnerEntityStore = create<OwnerEntityState>()(
  persist(
    (set, get) => ({
      formValues: {},
      entityName: '',
      isEditingName: false,
      tempEntityName: '',
      savedEntities: [],
      
      setFormValues: (values) => set({ formValues: values }),
      setEntityName: (name) => set({ entityName: name }),
      setField: (id, value) => {
        const normalizedId = id.replace(/\./g, '_');
        const { formValues } = get();
        
        // Create new form values object
        const newFormValues = { ...formValues };
        
        // Handle special synchronization cases
        if (id === 'b_01.01.0010' || id === 'b_01.02.0010') {
          // LEI synchronization for all forms
          newFormValues['b_01_01_0010'] = value;
          newFormValues['b_01_02_0010'] = value;
          newFormValues['b_01_03_0020'] = value; // For form three, sync the LEI to the head office field
        } else if (id === 'b_01.03.0020') {
          // If LEI is updated in form three, sync back to forms 1 and 2
          newFormValues['b_01_01_0010'] = value;
          newFormValues['b_01_02_0010'] = value;
          newFormValues['b_01_03_0020'] = value;
        } else if (id === 'b_01.01.0020' || id === 'b_01.02.0020') {
          // Name synchronization for forms 1 and 2
          newFormValues['b_01_01_0020'] = value;
          newFormValues['b_01_02_0020'] = value;
          // Also update the entity name
          set({ entityName: value || '' });
        } else if (id === 'b_01.01.0030' || id === 'b_01.02.0030') {
          // Country synchronization for forms 1 and 2
          newFormValues['b_01_01_0030'] = value;
          newFormValues['b_01_02_0030'] = value;
        } else if (id === 'b_01.01.0040' || id === 'b_01.02.0040') {
          // Entity type synchronization
          newFormValues['b_01_01_0040'] = value;
          newFormValues['b_01_02_0040'] = value;
        } else {
          // Regular field update
          newFormValues[normalizedId] = value;
        }
        
        set({ formValues: newFormValues });
      },
      setIsEditingName: (isEditing) => set({ isEditingName: isEditing }),
      setTempEntityName: (name) => set({ tempEntityName: name }),
      setSavedEntities: (entities) => set({ savedEntities: entities }),
      
      loadSavedEntities: () => {
        // No need to load from anywhere - the persisted state is already loaded
        // This is just kept for API compatibility
      },
      
      loadEntityByName: (entityNameToLoad) => {
        const { savedEntities } = get();
        const entity = savedEntities.find(entity => entity.name === entityNameToLoad);
        
        if (entity) {
          set({ 
            formValues: entity.data,
            entityName: entity.name
          });
        }
      },
      
      createNewEntity: () => {
        set({
          formValues: {},
          entityName: ""
        });
      },
      
      saveEntityData: () => {
        try {
          const { entityName, formValues, savedEntities } = get();
          
          if (!entityName) {
            return false;
          }

          // Check if entity with this name already exists
          const existingEntityIndex = savedEntities.findIndex(entity => entity.name === entityName);
          const updatedEntities = [...savedEntities];
          
          if (existingEntityIndex >= 0) {
            // Update existing entity
            updatedEntities[existingEntityIndex] = {
              name: entityName,
              data: { ...formValues }
            };
          } else {
            // Add new entity
            updatedEntities.push({
              name: entityName,
              data: { ...formValues }
            });
          }
          
          set({ savedEntities: updatedEntities });
          return true;
        } catch (error) {
          console.error('Error saving entity data:', error);
          return false;
        }
      },
      
      handleEditNameClick: () => {
        const { entityName } = get();
        set({
          tempEntityName: entityName,
          isEditingName: true
        });
      },
      
      handleSaveName: () => {
        const { tempEntityName, formValues } = get();
        const newFormValues = { ...formValues };
        newFormValues['b_01_01_0020'] = tempEntityName;
        newFormValues['b_01_02_0020'] = tempEntityName;
        
        set({
          entityName: tempEntityName,
          formValues: newFormValues,
          isEditingName: false
        });
      },
      
      handleCancelEdit: () => {
        set({ isEditingName: false });
      }
    }),
    {
      name: 'owner-entity-storage',
    }
  )
);
