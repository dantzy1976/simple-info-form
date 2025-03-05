
import React from 'react';
import { Button } from '@/components/ui/button';
import { exportToExcel } from '@/utils/excelExport';
import { Save, FileDown, FileUp, Loader2 } from 'lucide-react';

interface EntityExportHandlerProps {
  savedEntities: { name: string; data: any }[];
  formValues: Record<string, any>;
  onSave: () => void;
  submitting: boolean;
  formType?: 'b_01.01' | 'b_01.02';
}

const EntityExportHandler = ({ 
  savedEntities, 
  formValues, 
  onSave, 
  submitting,
  formType = 'b_01.01'
}: EntityExportHandlerProps) => {
  const handleExportSingle = () => {
    exportToExcel(formValues, formType);
  };

  const handleExportAll = () => {
    const entities = savedEntities.map(entity => entity.data);
    exportToExcel(entities, formType);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-end">
      <Button 
        type="button" 
        onClick={onSave}
        variant="outline"
        className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
      >
        <Save className="mr-1.5 h-4 w-4" />
        Save Entity
      </Button>
      
      <Button 
        type="button" 
        onClick={handleExportSingle}
        variant="outline"
        className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
      >
        <FileDown className="mr-1.5 h-4 w-4" />
        Export Current
      </Button>
      
      {savedEntities.length > 0 && (
        <Button 
          type="button" 
          onClick={handleExportAll}
          variant="outline"
          className="bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100"
        >
          <FileUp className="mr-1.5 h-4 w-4" />
          Export All ({savedEntities.length})
        </Button>
      )}
      
      <Button 
        type="submit" 
        disabled={submitting}
        className="bg-blue-600 text-white hover:bg-blue-700"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Form'
        )}
      </Button>
    </div>
  );
};

export default EntityExportHandler;
