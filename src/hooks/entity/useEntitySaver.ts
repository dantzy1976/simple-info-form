
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { FormValues } from './types';

export function useEntitySaver(
  entityName: string, 
  formValues: FormValues, 
  onSaveComplete: () => void
) {
  const [submitting, setSubmitting] = useState(false);

  // Save entity data to Supabase
  const saveEntityData = async () => {
    if (!entityName) {
      toast({
        title: "Error saving entity",
        description: "Entity name is required to save data.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Check if entity with this name already exists
      const { data: existingEntities } = await supabase
        .from('entities')
        .select('id')
        .eq('name', entityName)
        .maybeSingle();

      if (existingEntities) {
        // Update existing entity
        const { error } = await supabase
          .from('entities')
          .update({ 
            data: formValues,
            updated_at: new Date().toISOString()
          })
          .eq('name', entityName);

        if (error) throw error;
      } else {
        // Insert new entity
        const { error } = await supabase
          .from('entities')
          .insert({ 
            name: entityName, 
            data: formValues 
          });

        if (error) throw error;
      }

      // Call the callback to refresh entities
      onSaveComplete();

      toast({
        title: "Entity saved",
        description: `Entity "${entityName}" has been saved successfully.`,
      });
    } catch (error) {
      console.error('Error saving entity:', error);
      toast({
        title: "Error saving entity",
        description: "There was a problem saving your entity data.",
        variant: "destructive",
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    saveEntityData();
    setTimeout(() => {
      console.log('Form submitted with values:', formValues);
      toast({
        title: "Form submitted successfully",
        description: "Your entity information has been registered and saved.",
      });
      setSubmitting(false);
    }, 1000);
  };

  return {
    submitting,
    saveEntityData,
    handleSubmit
  };
}
