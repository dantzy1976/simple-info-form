
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OwnerEntityForms from "../components/owner-entity/OwnerEntityForms";
import ProviderForms from "../components/provider/ProviderForms";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Entity Registration System</h1>
        
        <Tabs defaultValue="owner" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="owner">Owner Entity Forms</TabsTrigger>
            <TabsTrigger value="provider">Provider Forms</TabsTrigger>
          </TabsList>
          
          <TabsContent value="owner">
            <OwnerEntityForms />
          </TabsContent>
          
          <TabsContent value="provider">
            <ProviderForms />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
