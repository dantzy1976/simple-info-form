
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useProviderStore } from '@/stores/providerStore';
import { toast } from '@/hooks/use-toast';

const ProviderForms = () => {
  const { providers, loadProviders, createNewProvider } = useProviderStore();
  
  useEffect(() => {
    loadProviders();
  }, []);
  
  const handleCreateNewProvider = () => {
    createNewProvider();
    toast({
      title: "New provider",
      description: "Creating a new provider entry",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Provider Management</h2>
        <Button
          onClick={handleCreateNewProvider}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Provider
        </Button>
      </div>
      
      {providers.length === 0 ? (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>No providers yet</CardTitle>
            <CardDescription>
              Create your first provider by clicking the "Add New Provider" button.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {providers.map((provider) => (
            <Card key={provider.id}>
              <CardHeader>
                <CardTitle>{provider.name || "Unnamed Provider"}</CardTitle>
                <CardDescription>{provider.type || "No type specified"}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Status: {provider.status || "Draft"}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProviderForms;
