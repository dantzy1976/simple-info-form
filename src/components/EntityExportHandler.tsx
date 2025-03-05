
import React from 'react';
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from '../utils/excelExport';
import EntityFormActions from './EntityFormActions';

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
  const handleExport = () => {
    try {
      // Export all saved entities
      const allEntityData = savedEntities.map(entity => entity.data);
      
      if (allEntityData.length === 0) {
        // If no saved entities, export current form values
        exportToExcel(formValues);
        toast({
          title: "Export successful",
          description: "Current entity information has been exported to Excel.",
        });
      } else {
        // Export all saved entities
        exportToExcel(allEntityData);
        toast({
          title: "Export successful",
          description: `All ${allEntityData.length} entities have been exported to Excel.`,
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
