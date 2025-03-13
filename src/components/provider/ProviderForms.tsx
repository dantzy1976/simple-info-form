import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, FileDown, List, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useProviderStore } from '@/stores/providerStore';
import { toast } from '@/hooks/use-toast';
import ProviderEditor from './ProviderEditor';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { exportToExcel } from '@/utils/excel';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from 'react-router-dom';

const ProviderForms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { providers, loadProviders, createNewProvider, deleteProvider } = useProviderStore();
  const [selectedProviderId, setSelectedProviderId] = useState<string | null>(null);
  const [providerToDelete, setProviderToDelete] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    loadProviders();
    
    // Reset selected provider when returning to this component
    if (location.pathname === '/providers') {
      setSelectedProviderId(null);
    }
  }, [location.pathname]);
  
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProviders = providers.filter(provider => 
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (provider.data?.b_02_01_0010 && provider.data.b_02_01_0010.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // If a provider is selected, show the editor
  if (selectedProviderId) {
    return <ProviderEditor providerId={selectedProviderId} />;
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <List className="h-6 w-6 mr-2 text-blue-500" />
          <h2 className="text-2xl font-bold">Provider Management</h2>
        </div>
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
        <div className="mt-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search providers..." 
              className="pl-10" 
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Provider Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Contract Ref</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProviders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No providers found matching your search.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProviders.map((provider) => (
                    <TableRow key={provider.id}>
                      <TableCell className="font-medium">
                        {provider.name || "Unnamed Provider"}
                      </TableCell>
                      <TableCell>{provider.type || "No type specified"}</TableCell>
                      <TableCell>
                        {provider.data && provider.data.b_02_01_0010 
                          ? provider.data.b_02_01_0010 
                          : "N/A"}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            provider.status === 'active' ? 'bg-green-500' :
                            provider.status === 'inactive' ? 'bg-red-500' :
                            'bg-yellow-500'
                          }
                        >
                          {provider.status || "Draft"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(provider.updated_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={() => handleExportProvider(provider)}
                          >
                            <FileDown className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditProvider(provider.id)}
                          >
                            <Edit className="h-4 w-4" />
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
                                <Trash2 className="h-4 w-4" />
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
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderForms;
