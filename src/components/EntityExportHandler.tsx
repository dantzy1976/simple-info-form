
import React from 'react';
import { handleEntityExport } from '../utils/entityExport';
import EntityFormActions from './EntityFormActions';
import { SavedEntity } from '@/types/entity.types';

interface EntityExportHandlerProps {
  savedEntities: SavedEntity[];
  formValues: Record<string, string | number | boolean | null | undefined>;
  onSave: () => boolean | Promise<boolean>;
  submitting: boolean;
}

const EntityExportHandler = ({ 
  savedEntities,
  formValues, 
  onSave, 
  submitting 
}: EntityExportHandlerProps) => {
  const handleExport = () => {
    console.log('EntityExportHandler - Starting export with current form values:', formValues);
    console.log('EntityExportHandler - Total saved entities:', savedEntities.length);
    
    // Make a deep copy of the data to prevent reference issues
    const entitiesToExport = savedEntities.map(entity => {
      return JSON.parse(JSON.stringify(entity.data));
    });
    
    // Add current form values if they exist and have content
    if (formValues && Object.keys(formValues).length > 0) {
      // Check if this form is already included in saved entities
      const formEntityName = formValues['b_01_01_0020'] || formValues['b_01.01.0020'];
      const alreadySaved = savedEntities.some(entity => entity.name === formEntityName);
      
      if (!alreadySaved) {
        console.log('EntityExportHandler - Adding current form to export dataset');
        // Ensure all form data, including third form, is included
        const formDataToExport = JSON.parse(JSON.stringify(formValues));
        entitiesToExport.push(formDataToExport);
      }
    }
    
    console.log('EntityExportHandler - Exporting all entities data:', entitiesToExport);
    
    // Pass the array of all entities to export
    handleEntityExport(entitiesToExport);
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
