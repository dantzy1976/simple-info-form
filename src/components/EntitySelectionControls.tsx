
import React from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SavedEntity } from '@/hooks/entity/types';
import { PlusCircle } from 'lucide-react';

interface EntitySelectionControlsProps {
  savedEntities: SavedEntity[];
  onLoadEntity: (entityName: string) => void;
  onNewEntity: () => void;
}

const EntitySelectionControls = ({
  savedEntities,
  onLoadEntity,
  onNewEntity
}: EntitySelectionControlsProps) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="w-full sm:w-auto flex items-center gap-2">
        {savedEntities.length > 0 ? (
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm font-medium text-white whitespace-nowrap">Load entity:</span>
            <Select
              onValueChange={(value) => {
                if (value) onLoadEntity(value);
              }}
            >
              <SelectTrigger className="bg-white/10 border-blue-300 text-white w-full sm:w-[220px]">
                <SelectValue placeholder="Select an entity" />
              </SelectTrigger>
              <SelectContent>
                {savedEntities.map((entity) => (
                  <SelectItem key={entity.name} value={entity.name}>
                    {entity.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <span className="text-sm text-white">No saved entities</span>
        )}
      </div>
      <Button
        onClick={onNewEntity}
        className="bg-white/10 border border-blue-300 text-white hover:bg-white/20 w-full sm:w-auto"
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        New Entity
      </Button>
    </div>
  );
};

export default EntitySelectionControls;
