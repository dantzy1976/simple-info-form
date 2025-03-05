
import React from 'react';
import { handleEntityExport } from '../utils/entityExport';
import EntityFormActions from './EntityFormActions';
import { SavedEntity } from '@/types/entity.types';

interface EntityExportHandlerProps {
  savedEntities: SavedEntity[];
  formValues: Record<string, any>;
  onSave: () => void;
  submitting: boolean;
}

const EntityExportHandler = ({ 
  formValues, 
  onSave, 
  submitting 
}: EntityExportHandlerProps) => {
  const handleExport = () => {
    console.log('EntityExportHandler - Starting export with values:', formValues);
    
    // Make a deep copy of formValues to prevent reference issues
    const valuesToExport = JSON.parse(JSON.stringify(formValues));
    
    // Log the exact structure being passed to the export handler
    console.log('EntityExportHandler - Exporting values:', valuesToExport);
    
    handleEntityExport(valuesToExport);
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
