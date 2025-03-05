
import React, { useState } from "react";
import EntityForm from "../components/EntityForm";
import EntityDetailForm from "../components/EntityDetailForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Entity Register Management</h1>
        
        <Tabs defaultValue="form1" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="form1">Entity Register</TabsTrigger>
            <TabsTrigger value="form2">Entity Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="form1">
            <EntityForm />
          </TabsContent>
          
          <TabsContent value="form2">
            <EntityDetailForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
