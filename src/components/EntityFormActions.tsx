
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Save, Plus } from 'lucide-react';

interface EntityFormActionsProps {
  onExport: () => void;
  onSave: () => void;
  onNew: () => void;
  submitting: boolean;
}

const EntityFormActions = ({ onExport, onSave, onNew, submitting }: EntityFormActionsProps) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={onExport}
          className="flex items-center gap-2"
        >
          <Download size={16} />
          Export to Excel
        </Button>
        
        <Button
          type="button"
          variant="outline"
          onClick={onSave}
          className="flex items-center gap-2"
        >
          <Save size={16} />
          Save Entity
        </Button>
        
        <Button
          type="button"
          variant="outline"
          onClick={onNew}
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          New Entity
        </Button>
      </div>
      
      <button 
        type="submit" 
        className="submit-button"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit Information'}
      </button>
    </div>
  );
};

export default EntityFormActions;
