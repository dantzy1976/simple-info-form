
import React, { useState } from 'react';
import EntityFormField from './EntityFormField';
import { entityFormFields } from '../constants/formConstants';
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from '../utils/excelExport';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormValues {
  [key: string]: any;
}

const EntityForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [submitting, setSubmitting] = useState(false);

  const handleFieldChange = (id: string, value: any) => {
    // Convert field IDs with dots to underscores for easier handling in export
    const normalizedId = id.replace(/\./g, '_');
    
    setFormValues((prev) => ({
      ...prev,
      [normalizedId]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted with values:', formValues);
      toast({
        title: "Form submitted successfully",
        description: "Your entity information has been registered.",
      });
      setSubmitting(false);
    }, 1000);
  };

  const handleExport = () => {
    try {
      exportToExcel(formValues);
      toast({
        title: "Export successful",
        description: "Entity information has been exported to Excel.",
      });
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export failed",
        description: "There was an error exporting the data.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 form-container">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
          <h1 className="text-2xl font-medium text-white">Entity Information Form</h1>
          <p className="text-blue-100 mt-1">Enter the details of the entity maintaining the register</p>
        </div>
        
        <form onSubmit={handleSubmit} className="px-8 py-6">
          {entityFormFields.map((field, index) => (
            <EntityFormField
              key={field.id}
              field={field}
              value={formValues[field.id.replace(/\./g, '_')]}
              onChange={handleFieldChange}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
          
          <div className="mt-8 flex justify-between items-center">
            <Button
              type="button"
              variant="outline"
              onClick={handleExport}
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Export to Excel
            </Button>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Information'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntityForm;
