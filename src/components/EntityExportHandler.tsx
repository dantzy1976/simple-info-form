
import React from 'react';
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from '../utils/excelExport';
import EntityFormActions from './EntityFormActions';
import { supabase } from '@/integrations/supabase/client';

interface SavedEntity {
  name: string;
  data: Record<string, any>;
}

interface EntityExportHandlerProps {
  savedEntities: SavedEntity[];
  formValues: Record<string, any>;
  onSave: () => void;
  submitting: boolean;
}

const EntityExportHandler = ({ 
  savedEntities, 
  formValues, 
  onSave, 
  submitting 
}: EntityExportHandlerProps) => {
  const handleExport = async () => {
    try {
      // Get fresh data from Supabase to ensure we have the latest
      const { data, error } = await supabase
        .from('entities')
        .select('data');
        
      if (error) {
        throw error;
      }
      
      if (data && data.length > 0) {
        // Extract just the data portion from each entity and ensure it's properly typed
        const allEntityData = data.map(entity => entity.data as Record<string, any>);
        
        // Export all entity data
        exportToExcel(allEntityData);
        toast({
          title: "Export successful",
          description: `All ${allEntityData.length} entities have been exported to Excel.`,
        });
      } else {
        // If no saved entities in database, export current form values
        exportToExcel(formValues);
        toast({
          title: "Export successful",
          description: "Current entity information has been exported to Excel.",
        });
      }
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export failed",
        description: "There was an error exporting the data.",
        variant: "destructive",
      });
    }
  };

  return (
    <EntityFormActions 
      onExport={handleExport}
      onSave={onSave}
      submitting={submitting}
    />
  );
};

export default EntityExportHandler;
