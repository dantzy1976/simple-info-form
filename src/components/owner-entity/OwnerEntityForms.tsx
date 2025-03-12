
import React, { useEffect, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

import EntityFormB0101 from './EntityFormB0101';
import EntityFormB0102 from './EntityFormB0102';
import EntityFormB0103 from './EntityFormB0103';
import EntityExportHandler from '../EntityExportHandler';
import { useOwnerEntityStore } from '@/stores/ownerEntityStore';

const OwnerEntityForms = () => {
  const [showForm0102, setShowForm0102] = useState(false);
  const [showForm0103, setShowForm0103] = useState(false);

  const {
    formValues,
    entityName,
    savedEntities,
    setEntityName,
    loadEntityByName,
    createNewEntity,
    saveEntityData
  } = useOwnerEntityStore();
  
  // No need to load entities on mount as they're already available via zustand

  const handleNewEntity = () => {
    createNewEntity();
    toast({
      title: "New entity created",
      description: "You can now enter information for a new entity.",
    });
  };

  const handleLoadEntity = (entityNameToLoad: string) => {
    loadEntityByName(entityNameToLoad);
    toast({
      title: "Entity loaded",
      description: `Entity "${entityNameToLoad}" has been loaded successfully.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 bg-slate-100 p-4 rounded-lg">
        <div className="flex items-center gap-2 flex-1">
          {savedEntities.length > 0 && (
            <>
              <label className="text-gray-700 text-sm font-medium">Load saved entity:</label>
              <Select onValueChange={handleLoadEntity}>
                <SelectTrigger className="bg-white border-gray-300 flex-1">
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
          onClick={handleNewEntity}
          className="bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2"
        >
          <Plus size={16} />
          New Entity
        </Button>
      </div>

      {/* Form B_01.01 is always visible */}
      <EntityFormB0101 />
      
      {/* Toggle button for B_01.02 */}
      <div className="flex flex-col gap-4 mb-4">
        <Button
          type="button"
          onClick={() => setShowForm0102(!showForm0102)}
          className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-2"
        >
          {showForm0102 ? (
            <>
              <ArrowUp size={16} />
              b_01.02
            </>
          ) : (
            <>
              <ArrowDown size={16} />
              b_01.02
            </>
          )}
        </Button>
      </div>
      
      {/* Form B_01.02 */}
      {showForm0102 && <EntityFormB0102 />}
      
      {/* Toggle button for B_01.03 */}
      <div className="flex flex-col gap-4 mb-4">
        <Button
          type="button"
          onClick={() => setShowForm0103(!showForm0103)}
          className="bg-purple-500 text-white hover:bg-purple-600 flex items-center gap-2"
        >
          {showForm0103 ? (
            <>
              <ArrowUp size={16} />
              b_01.03
            </>
          ) : (
            <>
              <ArrowDown size={16} />
              b_01.03
            </>
          )}
        </Button>
      </div>
      
      {/* Form B_01.03 */}
      {showForm0103 && <EntityFormB0103 />}
      
      {/* Export functionality */}
      <Separator className="my-6" />
      <div className="mt-8">
        <EntityExportHandler 
          savedEntities={savedEntities}
          formValues={formValues}
          onSave={saveEntityData}
          submitting={false}
        />
      </div>
    </div>
  );
};

export default OwnerEntityForms;
