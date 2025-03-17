
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from './excel';

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
          description: `All ${data.length} entities have been exported to Excel with all form sheets included.`,
        });
        return;
      } else if (!Array.isArray(data) && Object.keys(data).length > 0) {
        console.log('handleEntityExport - Exporting single entity');
        await exportToExcel(data);
        
        toast({
          title: "Export successful",
          description: "Current entity information has been exported to Excel with all form sheets included.",
        });
        return;
      }
    }
    
    // If no data provided or empty data
    toast({
      title: "Export failed",
      description: "No data available to export. Please fill out the form first.",
      variant: "destructive",
    });
  } catch (error) {
    console.error('Export error:', error);
    toast({
      title: "Export failed",
      description: "There was an error exporting the data. Please check the console for details.",
      variant: "destructive",
    });
  }
};
