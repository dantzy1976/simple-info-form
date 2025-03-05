
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
  const handleExport = () => handleEntityExport(formValues);

  return (
    <EntityFormActions 
      onExport={handleExport}
      onSave={onSave}
      submitting={submitting}
    />
  );
};

export default EntityExportHandler;
