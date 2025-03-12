
import { supabase } from '@/integrations/supabase/client';
import { SavedEntity, FormValues } from '@/types/entity.types';
import { toast } from '@/hooks/use-toast';

export async function loadEntities(): Promise<SavedEntity[]> {
  try {
    const { data, error } = await supabase
      .from('entities')
      .select('name, data')
      .eq('type', 'owner')
      .order('updated_at', { ascending: false });
    
    if (error) {
      throw error;
    }
    
    if (data) {
      return data.map(item => ({
        name: item.name,
        data: item.data as FormValues
      }));
    }
    
    return [];
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
    // Check if entity with this name already exists
    const { data: existingEntities } = await supabase
      .from('entities')
      .select('id')
      .eq('name', entityName)
      .eq('type', 'owner')
      .maybeSingle();

    if (existingEntities) {
      // Update existing entity
      const { error } = await supabase
        .from('entities')
        .update({ 
          data: formValues,
          updated_at: new Date().toISOString()
        })
        .eq('name', entityName)
        .eq('type', 'owner');

      if (error) throw error;
    } else {
      // Insert new entity
      const { error } = await supabase
        .from('entities')
        .insert({ 
          name: entityName, 
          data: formValues,
          type: 'owner'
        });

      if (error) throw error;
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
    const { data, error } = await supabase
      .from('entities')
      .select('name, data')
      .eq('name', entityName)
      .eq('type', 'owner')
      .maybeSingle();
    
    if (error) throw error;
    
    if (data) {
      return {
        name: data.name,
        data: data.data as FormValues
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
