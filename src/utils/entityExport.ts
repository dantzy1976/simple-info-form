
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from './excelExport';
import { SavedEntity } from '@/types/entity.types';

export const handleEntityExport = async (formValues: Record<string, any>) => {
  try {
    // Check if we have current form values to export
    if (formValues && Object.keys(formValues).length > 0) {
      // Export the current form values
      exportToExcel(formValues);
      toast({
        title: "Export successful",
        description: "Current entity information has been exported to Excel.",
      });
      return;
    }
    
    // If no current form values, try to export from database
    const { data, error } = await supabase
      .from('entities')
      .select('data');
      
    if (error) {
      throw error;
    }
    
    if (data && data.length > 0) {
      // Extract just the data portion from each entity
      const allEntityData = data.map(entity => entity.data);
      
      // Export all entity data
      exportToExcel(allEntityData);
      toast({
        title: "Export successful",
        description: `All ${allEntityData.length} entities have been exported to Excel.`,
      });
    } else {
      toast({
        title: "Export failed",
        description: "No data available to export. Please fill out the form first.",
        variant: "destructive",
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
