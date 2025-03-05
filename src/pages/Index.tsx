
import EntityForm from "../components/EntityForm";
import Entity2Form from "../components/Entity2Form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto">
        <Tabs defaultValue="form1" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="form1">b_01.01 Entity Form</TabsTrigger>
            <TabsTrigger value="form2">b_01.02 Entity Form</TabsTrigger>
          </TabsList>
          <TabsContent value="form1">
            <EntityForm />
          </TabsContent>
          <TabsContent value="form2">
            <Entity2Form />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
