
import { SavedEntity, FormValues } from '@/types/entity.types';
import { toast } from '@/hooks/use-toast';

// In-memory storage for entities (will be persisted via Zustand)
let localEntities: SavedEntity[] = [];

export async function loadEntities(): Promise<SavedEntity[]> {
  return localEntities;
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
    // Check if entity with this name already exists
    const existingEntityIndex = localEntities.findIndex(e => e.name === entityName);

    if (existingEntityIndex >= 0) {
      // Update existing entity
      localEntities[existingEntityIndex] = {
        name: entityName,
        data: formValues
      };
    } else {
      // Insert new entity
      localEntities.push({
        name: entityName,
        data: formValues
      });
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
    const entity = localEntities.find(e => e.name === entityName);
    return entity || null;
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
