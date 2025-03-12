
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, FileDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useProviderStore } from '@/stores/providerStore';
import { toast } from '@/hooks/use-toast';
import ProviderEditor from './ProviderEditor';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { exportToExcel } from '@/utils/excel';

const ProviderForms = () => {
  const { providers, loadProviders, createNewProvider, deleteProvider } = useProviderStore();
  const [selectedProviderId, setSelectedProviderId] = useState<string | null>(null);
  const [providerToDelete, setProviderToDelete] = useState<string | null>(null);
  
  useEffect(() => {
    // Still call loadProviders to ensure we're using the latest state
    loadProviders();
  }, []);
  
  const handleCreateNewProvider = () => {
    const newProvider = createNewProvider();
    setSelectedProviderId(newProvider.id);
    toast({
      title: "New provider",
      description: "Creating a new provider entry",
    });
  };
  
  const handleEditProvider = (id: string) => {
    setSelectedProviderId(id);
  };
  
  const handleDeleteConfirm = async () => {
    if (providerToDelete) {
      const success = await deleteProvider(providerToDelete);
      if (success) {
        setProviderToDelete(null);
        toast({
          title: "Provider deleted",
          description: "Provider has been deleted successfully.",
        });
        
        // If we deleted the currently selected provider, go back to the list
        if (selectedProviderId === providerToDelete) {
          setSelectedProviderId(null);
        }
      }
    }
  };
  
  const handleExportProvider = (provider: any) => {
    exportToExcel(provider);
    toast({
      title: "Export started",
      description: "Exporting provider data to Excel",
    });
  };
  
  // If a provider is selected, show the editor
  if (selectedProviderId) {
    return <ProviderEditor providerId={selectedProviderId} />;
  }
  
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
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{provider.name || "Unnamed Provider"}</CardTitle>
                    <CardDescription>{provider.type || "No type specified"}</CardDescription>
                  </div>
                  <Badge
                    className={
                      provider.status === 'active' ? 'bg-green-500' :
                      provider.status === 'inactive' ? 'bg-red-500' :
                      'bg-yellow-500'
                    }
                  >
                    {provider.status || "Draft"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(provider.updated_at).toLocaleDateString()}
                </p>
                {provider.data && provider.data.b_02_01_0010 && (
                  <p className="text-sm font-medium mt-2">
                    Contract Ref: {provider.data.b_02_01_0010}
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => handleExportProvider(provider)}
                >
                  <FileDown className="h-4 w-4 mr-1" /> Export
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditProvider(provider.id)}
                >
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Dialog open={providerToDelete === provider.id} onOpenChange={(open) => {
                  if (!open) setProviderToDelete(null);
                }}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="destructive"
                      size="sm"
                      onClick={() => setProviderToDelete(provider.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Delete
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Deletion</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this provider? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setProviderToDelete(null)}>
                        Cancel
                      </Button>
                      <Button variant="destructive" onClick={handleDeleteConfirm}>
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProviderForms;
