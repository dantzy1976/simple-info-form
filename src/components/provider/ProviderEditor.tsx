
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProviderStore } from '@/stores/providerStore';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProviderFormB0201 from './ProviderFormB0201';
import ProviderFormB0202 from './ProviderFormB0202';
import ProviderFormB0203 from './ProviderFormB0203';
import ProviderFormB0301 from './ProviderFormB0301';
import ProviderFormB0302 from './ProviderFormB0302';
import ProviderFormB0303 from './ProviderFormB0303';
import ProviderFormB0401 from './ProviderFormB0401';
import ProviderFormB0501 from './ProviderFormB0501';
import ProviderFormB0502 from './ProviderFormB0502';
import ProviderFormB0601 from './ProviderFormB0601';
import ProviderFormB0701 from './ProviderFormB0701';
import ProviderFormB9901 from './ProviderFormB9901';
import { ArrowLeft, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const ProviderEditor = ({ providerId }: { providerId: string }) => {
  const navigate = useNavigate();
  const { providers, updateProvider, saveProvider } = useProviderStore();
  
  // Find the current provider
  const provider = providers.find(p => p.id === providerId);
  
  if (!provider) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Provider not found</h2>
        <Button onClick={() => navigate('/providers')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Providers
        </Button>
      </div>
    );
  }
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProvider({
      ...provider,
      name: e.target.value,
      updated_at: new Date().toISOString()
    });
  };
  
  const handleTypeChange = (value: string) => {
    updateProvider({
      ...provider,
      type: value,
      updated_at: new Date().toISOString()
    });
  };
  
  const handleStatusChange = (value: string) => {
    updateProvider({
      ...provider,
      status: value as 'draft' | 'active' | 'inactive',
      updated_at: new Date().toISOString()
    });
  };
  
  const handleSave = async () => {
    const success = await saveProvider(provider);
    if (success) {
      toast({
        title: "Provider saved",
        description: "Provider information has been saved successfully.",
      });
    }
  };
  
  const handleBack = () => {
    // Navigate back to the providers page and ensure it shows the list of providers
    navigate('/providers');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Edit Provider</h2>
        <div className="space-x-2">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            <Save className="mr-2 h-4 w-4" /> Save Provider
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Provider Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Provider Name</Label>
              <Input
                id="name"
                value={provider.name}
                onChange={handleNameChange}
                placeholder="Enter provider name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Provider Type</Label>
              <Select value={provider.type} onValueChange={handleTypeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select provider type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software">Software Provider</SelectItem>
                  <SelectItem value="hardware">Hardware Provider</SelectItem>
                  <SelectItem value="cloud">Cloud Service Provider</SelectItem>
                  <SelectItem value="consulting">Consulting Provider</SelectItem>
                  <SelectItem value="other">Other Provider</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={provider.status} onValueChange={handleStatusChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <ProviderFormB0201 providerId={providerId} />
      <ProviderFormB0202 providerId={providerId} />
      <ProviderFormB0203 providerId={providerId} />
      <ProviderFormB0301 providerId={providerId} />
      <ProviderFormB0302 providerId={providerId} />
      <ProviderFormB0303 providerId={providerId} />
      <ProviderFormB0401 providerId={providerId} />
      <ProviderFormB0501 providerId={providerId} />
      <ProviderFormB0502 providerId={providerId} />
      <ProviderFormB0601 providerId={providerId} />
      <ProviderFormB0701 providerId={providerId} />
      <ProviderFormB9901 providerId={providerId} />
    </div>
  );
};

export default ProviderEditor;
