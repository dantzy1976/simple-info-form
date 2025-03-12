
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EntityFormFields from '../EntityFormFields';
import { providerFormFieldsB0301 } from '@/constants/formConstants';
import { useProviderStore } from '@/stores/providerStore';

const ProviderFormB0301 = ({ providerId }: { providerId: string }) => {
  const { providers, updateProvider } = useProviderStore();
  
  // Find the current provider
  const provider = providers.find(p => p.id === providerId);
  
  if (!provider) {
    return <div>Provider not found</div>;
  }
  
  const handleFieldChange = (id: string, value: any) => {
    // Convert form field IDs like "b_03.01.0010" to "b_03_01_0010" for storage
    const storageKey = id.replace(/\./g, '_');
    
    // Create a new data object with the updated field
    const updatedData = {
      ...provider.data,
      [storageKey]: value
    };
    
    // Update the provider with new data
    updateProvider({
      ...provider,
      data: updatedData,
      updated_at: new Date().toISOString()
    });
  };

  return (
    <Card className="mb-6">
      <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-800 text-white">
        <CardTitle className="text-2xl">b_03.01</CardTitle>
        <p className="text-white/80">Entity Signing Contract</p>
      </CardHeader>
      <CardContent className="p-6">
        <EntityFormFields 
          fields={providerFormFieldsB0301}
          values={provider.data}
          onChange={handleFieldChange}
        />
      </CardContent>
    </Card>
  );
};

export default ProviderFormB0301;
