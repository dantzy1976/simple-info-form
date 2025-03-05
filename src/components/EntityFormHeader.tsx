
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';

interface EntityFormHeaderProps {
  entityName: string;
  savedEntities: { name: string; data: any }[];
  onLoadEntity: (entityName: string) => void;
  onNew: () => void;
}

const EntityFormHeader = ({ entityName, savedEntities, onLoadEntity, onNew }: EntityFormHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium text-white">b_01.01</h1>
        <p className="text-blue-100">Enter the details of the entity maintaining the register</p>
        
        <div className="mt-2 bg-white/10 rounded p-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {savedEntities.length > 0 && (
                <>
                  <label className="text-white text-sm">Load saved entity:</label>
                  <Select onValueChange={onLoadEntity}>
                    <SelectTrigger className="bg-white/10 border-blue-300 text-white w-48">
                      <SelectValue placeholder="Select entity" />
                    </SelectTrigger>
                    <SelectContent>
                      {savedEntities.map((entity) => (
                        <SelectItem key={entity.name} value={entity.name}>
                          {entity.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              )}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={onNew}
              className="bg-white/10 border-blue-300 text-white hover:bg-white/20 flex items-center gap-2"
            >
              <Plus size={16} />
              New Entity
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityFormHeader;
