
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EntityFormHeaderProps {
  entityName: string;
  savedEntities: { name: string; data: any }[];
  onLoadEntity: (entityName: string) => void;
}

const EntityFormHeader = ({ entityName, savedEntities, onLoadEntity }: EntityFormHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium text-white">b_01.01</h1>
        <p className="text-blue-100">Enter the details of the entity maintaining the register</p>
        
        {savedEntities.length > 0 && (
          <div className="mt-2 bg-white/10 rounded p-2">
            <div className="flex items-center gap-2">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntityFormHeader;
