
import { toast } from '@/hooks/use-toast';
import { SavedEntity, FormValues } from '@/types/entity.types';
import { useOwnerEntityStore } from '@/stores/ownerEntityStore';

// Local storage implementation that will replace Supabase
export async function loadEntities(): Promise<SavedEntity[]> {
  try {
    // Get entities directly from Zustand store
    const savedEntities = useOwnerEntityStore.getState().savedEntities;
    return savedEntities;
  } catch (error) {
    console.error('Error loading entities:', error);
    toast({
      title: "Error loading entities",
      description: "There was a problem loading your saved entities.",
      variant: "destructive",
    });
    return [];
  }
}

export async function saveEntity(entityName: string, formValues: FormValues): Promise<boolean> {
  if (!entityName) {
    toast({
      title: "Error saving entity",
      description: "Entity name is required to save data.",
      variant: "destructive",
    });
    return false;
  }

  try {
    // Get current state from Zustand
    const { savedEntities, setSavedEntities } = useOwnerEntityStore.getState();
    
    // Check if entity with this name already exists
    const existingEntityIndex = savedEntities.findIndex(entity => entity.name === entityName);
    
    if (existingEntityIndex >= 0) {
      // Update existing entity
      const updatedEntities = [...savedEntities];
      updatedEntities[existingEntityIndex] = {
        name: entityName,
        data: { ...formValues }
      };
      
      setSavedEntities(updatedEntities);
    } else {
      // Insert new entity
      const newEntity: SavedEntity = {
        name: entityName,
        data: { ...formValues }
      };
      
      setSavedEntities([...savedEntities, newEntity]);
    }

    toast({
      title: "Entity saved",
      description: `Entity "${entityName}" has been saved successfully.`,
    });
    
    return true;
  } catch (error) {
    console.error('Error saving entity:', error);
    toast({
      title: "Error saving entity",
      description: "There was a problem saving your entity data.",
      variant: "destructive",
    });
    return false;
  }
}

export async function loadEntityByName(entityName: string): Promise<SavedEntity | null> {
  try {
    // Get entities from Zustand store
    const { savedEntities } = useOwnerEntityStore.getState();
    
    // Find entity by name
    const entity = savedEntities.find(entity => entity.name === entityName);
    
    if (entity) {
      return {
        name: entity.name,
        data: entity.data
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error loading entity:', error);
    toast({
      title: "Error loading entity",
      description: "There was a problem loading your entity data.",
      variant: "destructive",
    });
    return null;
  }
}
