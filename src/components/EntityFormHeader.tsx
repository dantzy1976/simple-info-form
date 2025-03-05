
import React from 'react';

interface EntityFormHeaderProps {
  entityName: string;
}

const EntityFormHeader = ({ entityName }: EntityFormHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium text-white">b_01.01</h1>
        <p className="text-blue-100">Enter the details of the entity maintaining the register</p>
      </div>
    </div>
  );
};

export default EntityFormHeader;
