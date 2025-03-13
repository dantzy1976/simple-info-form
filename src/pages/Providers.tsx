
import React from 'react';
import ProviderForms from '@/components/provider/ProviderForms';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const Providers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Provider Management</h1>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Main Page
            </Button>
          </Link>
        </div>
        
        <div className="w-full max-w-5xl mx-auto">
          <ProviderForms />
        </div>
      </div>
    </div>
  );
};

export default Providers;
