
import { useEffect, useState } from "react";
import EntityForm from "../components/EntityForm";
import Entity2Form from "../components/Entity2Form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EntitySelectionControls from "@/components/EntitySelectionControls";
import { useEntityForm } from "@/hooks/useEntityForm";
import { SavedEntity } from "@/hooks/entity/types";

const Index = () => {
  const {
    savedEntities,
    handleLoadEntity,
    handleNewEntity,
    loadSavedEntities,
    setEntityName,
    setFormValues
  } = useEntityForm();

  const [activeTab, setActiveTab] = useState("form1");

  // Load saved entities when the component mounts
  useEffect(() => {
    loadSavedEntities();
  }, [loadSavedEntities]);

  // Handle entity loading based on active tab
  const handleEntityLoad = async (entityNameToLoad: string) => {
    const loadedEntity = await handleLoadEntity(entityNameToLoad);
    
    // Update the entity name whether we're on form1 or form2
    if (loadedEntity) {
      setEntityName(loadedEntity.name);
      
      // Based on which tab is active, we either need to do the data mapping or not
      if (activeTab === "form1") {
        setFormValues(loadedEntity.data);
      } else {
        // For form2, we need to map the field IDs
        const mappedData = { ...loadedEntity.data };
        
        // Map fields from form1 to form2
        if (mappedData['b_01_01_0010']) mappedData['b_01_02_0010'] = mappedData['b_01_01_0010'];
        if (mappedData['b_01_01_0020']) mappedData['b_01_02_0020'] = mappedData['b_01_01_0020'];
        if (mappedData['b_01_01_0030']) mappedData['b_01_02_0030'] = mappedData['b_01_01_0030'];
        if (mappedData['b_01_01_0040']) mappedData['b_01_02_0040'] = mappedData['b_01_01_0040'];
        if (mappedData['b_01_01_0050']) mappedData['b_01_02_0070'] = mappedData['b_01_01_0050'];
        
        setFormValues(mappedData);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto">
        <div className="w-full max-w-3xl mx-auto">
          {/* Entity Selection Controls */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow">
            <EntitySelectionControls 
              savedEntities={savedEntities}
              onLoadEntity={handleEntityLoad}
              onNewEntity={handleNewEntity}
            />
          </div>
          
          {/* Form Tabs */}
          <Tabs 
            defaultValue="form1" 
            className="w-full max-w-3xl mx-auto"
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="form1">b_01.01 Entity Form</TabsTrigger>
              <TabsTrigger value="form2">b_01.02 Entity Form</TabsTrigger>
            </TabsList>
            <TabsContent value="form1">
              <EntityForm hideControls={true} />
            </TabsContent>
            <TabsContent value="form2">
              <Entity2Form hideControls={true} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
