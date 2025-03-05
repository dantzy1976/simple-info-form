
import React, { useState } from 'react';
import EntityFormField from './EntityFormField';
import { entityFormFields } from '../constants/formConstants';
import { toast } from '@/hooks/use-toast';
import { exportToExcel } from '../utils/excelExport';
import { Download, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormValues {
  [key: string]: any;
}

const EntityForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [submitting, setSubmitting] = useState(false);
  const [entityName, setEntityName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempEntityName, setTempEntityName] = useState("");

  const handleFieldChange = (id: string, value: any) => {
    // Convert field IDs with dots to underscores for easier handling in export
    const normalizedId = id.replace(/\./g, '_');
    
    // If this is the entity name field (b_01.01.0020), update the header
    if (id === 'b_01.01.0020') {
      setEntityName(value || '');
    }
    
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

  const handleEditNameClick = () => {
    setTempEntityName(entityName);
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    setEntityName(tempEntityName);
    setIsEditingName(false);
    
    // Update the form value for entity name field as well
    const normalizedId = 'b_01.01.0020'.replace(/\./g, '_');
    setFormValues((prev) => ({
      ...prev,
      [normalizedId]: tempEntityName,
    }));
  };

  const handleCancelEdit = () => {
    setIsEditingName(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 form-container">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium text-white">b_01.01</h1>
            <p className="text-blue-100">Enter the details of the entity maintaining the register</p>
            
            <div className="mt-2 border-t border-blue-400 pt-2 flex items-center justify-between">
              {isEditingName ? (
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="text"
                    value={tempEntityName}
                    onChange={(e) => setTempEntityName(e.target.value)}
                    className="bg-white/10 text-white border border-blue-300 rounded px-2 py-1 w-full"
                    placeholder="Enter entity name"
                  />
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={handleSaveName}
                  >
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-white">
                    {entityName || 'Enter entity name'}
                  </h2>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-black hover:bg-gray-100 text-xs px-2 py-1 h-7"
                    onClick={handleEditNameClick}
                  >
                    <Pencil size={14} className="mr-1" /> Edit
                  </Button>
                </>
              )}
            </div>
          </div>
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
