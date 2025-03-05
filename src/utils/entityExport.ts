
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from './excel';
import { SavedEntity } from '@/types/entity.types';

export const handleEntityExport = async (data: Record<string, any>[] | Record<string, any>) => {
  try {
    console.log('handleEntityExport - Received data:', data);
    
    // If we received data to export directly
    if (data) {
      if (Array.isArray(data) && data.length > 0) {
        console.log(`handleEntityExport - Exporting array of ${data.length} entities`);
        await exportToExcel(data);
        
        toast({
          title: "Export successful",
          description: `All ${data.length} entities have been exported to Excel.`,
        });
        return;
      } else if (!Array.isArray(data) && Object.keys(data).length > 0) {
        console.log('handleEntityExport - Exporting single entity');
        await exportToExcel(data);
        
        toast({
          title: "Export successful",
          description: "Current entity information has been exported to Excel.",
        });
        return;
      }
    }
    
    // If no data provided or empty data, try to load from database
    console.log('handleEntityExport - No valid data provided, fetching from database');
    const { data: dbData, error } = await supabase
      .from('entities')
      .select('data');
      
    if (error) {
      throw error;
    }
    
    if (dbData && dbData.length > 0) {
      console.log(`handleEntityExport - Loaded ${dbData.length} entities from database`);
      
      // Extract just the data portion from each entity
      const allEntityData = dbData.map(entity => entity.data);
      
      // Export all entity data
      await exportToExcel(allEntityData);
      
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
