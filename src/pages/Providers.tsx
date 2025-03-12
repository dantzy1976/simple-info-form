
import React from 'react';
import ProviderForms from '@/components/provider/ProviderForms';

const Providers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Provider Management</h1>
        <div className="w-full max-w-5xl mx-auto">
          <ProviderForms />
        </div>
      </div>
    </div>
  );
};

export default Providers;
