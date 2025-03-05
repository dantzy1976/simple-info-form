
import { useState, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { SavedEntity, FormValues } from './types';

export function useEntityLoader() {
  const [savedEntities, setSavedEntities] = useState<SavedEntity[]>([]);

  // Load saved entities from Supabase
  const loadSavedEntities = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('entities')
        .select('name, data');
      
      if (error) {
        throw error;
      }
      
      if (data) {
        // Convert Json to FormValues by ensuring it's an object
        const entities: SavedEntity[] = data.map(item => ({
          name: item.name,
          data: item.data as FormValues
        }));
        setSavedEntities(entities);
      }
    } catch (error) {
      console.error('Error loading entities:', error);
      toast({
        title: "Error loading entities",
        description: "There was a problem loading your saved entities.",
        variant: "destructive",
      });
    }
  }, []);

  // Handle loading entity from Supabase
  const handleLoadEntity = async (entityNameToLoad: string) => {
    try {
      const { data, error } = await supabase
        .from('entities')
        .select('name, data')
        .eq('name', entityNameToLoad)
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
  };

  return {
    savedEntities,
    loadSavedEntities,
    handleLoadEntity
  };
}
