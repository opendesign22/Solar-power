
import React from 'react';
import { Calculator } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

interface CollapsedCalculatorProps {
  onExpand: () => void;
}

const CollapsedCalculator: React.FC<CollapsedCalculatorProps> = ({ onExpand }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <motion.div 
          className="bg-gradient-to-br from-yellow-100 to-blue-100 p-4 rounded-lg shadow-inner w-16 h-16 flex items-center justify-center flex-shrink-0"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <Calculator className="h-8 w-8 text-solar-yellow" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-2">Find Your Solar Savings</h3>
          <p className="text-muted-foreground mb-0">
            Our calculator provides personalized estimates based on your electricity usage and location.
            Discover how much you could save with solar energy.
          </p>
        </div>
        <Button 
          className="bg-solar-yellow hover:bg-solar-yellow/90 text-zinc-900 px-6 shadow-md hover:shadow-lg transition-all"
          onClick={onExpand}
        >
          Start Calculating
        </Button>
      </div>
    </motion.div>
  );
};

export default CollapsedCalculator;
