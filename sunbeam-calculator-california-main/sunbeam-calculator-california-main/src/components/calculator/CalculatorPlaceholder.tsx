
import React from 'react';
import { Calculator } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

interface CalculatorPlaceholderProps {
  onCalculate: () => void;
  isCalculating: boolean;
}

const CalculatorPlaceholder: React.FC<CalculatorPlaceholderProps> = ({ 
  onCalculate, 
  isCalculating 
}) => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-6 text-center">
      <motion.div 
        className="mb-6 p-6 bg-blue-50 rounded-full"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Calculator className="h-12 w-12 text-blue-400" />
      </motion.div>
      <h3 className="text-xl font-medium mb-3">Ready to Calculate</h3>
      <p className="text-muted-foreground mb-6">
        Adjust the parameters on the left and click "Calculate Solar System" 
        to see your personalized solar recommendation.
      </p>
      <Button 
        onClick={onCalculate}
        className="bg-solar-yellow hover:bg-solar-yellow/90 text-zinc-900 shadow-md hover:shadow-lg transition-all"
        disabled={isCalculating}
      >
        {isCalculating ? (
          <>
            <span className="animate-pulse">Calculating...</span>
          </>
        ) : (
          <>Quick Estimate with Current Settings</>
        )}
      </Button>
    </div>
  );
};

export default CalculatorPlaceholder;
