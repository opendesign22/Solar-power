
import React from 'react';
import { Sun, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CalculatorHeaderProps {
  isExpanded: boolean;
  onExpandToggle: () => void;
}

const CalculatorHeader: React.FC<CalculatorHeaderProps> = ({ isExpanded, onExpandToggle }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="bg-solar-yellow/20 p-3 rounded-full">
          <Sun className="h-6 w-6 text-solar-yellow" />
        </div>
        <h2 className="text-2xl font-mono font-bold">
          Interactive Solar Calculator
        </h2>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onExpandToggle}
        className="flex items-center gap-1 hover:bg-solar-yellow/10"
      >
        {isExpanded ? (
          <>
            <span>Hide Calculator</span>
            <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            <span>Show Calculator</span>
            <ChevronDown className="h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
};

export default CalculatorHeader;
