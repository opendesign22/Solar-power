
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

interface ToggleModeProps {
  isProfessional: boolean;
  setIsProfessional: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleMode: React.FC<ToggleModeProps> = ({ isProfessional, setIsProfessional }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mb-6">
      <div className="bg-zinc-100 p-1 rounded-lg flex relative">
        <motion.div 
          className="absolute top-1 left-1 w-[calc(50%-2px)] h-[calc(100%-2px)] rounded-md bg-white shadow-sm" 
          animate={{ x: isProfessional ? '100%' : '0%' }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
        <Button 
          variant="ghost"
          size="sm"
          className={`relative z-10 px-4 py-2 min-w-[120px] font-mono transition-colors ${!isProfessional ? 'text-zinc-900' : 'text-zinc-500'}`}
          onClick={() => setIsProfessional(false)}
        >
          Basic
        </Button>
        <Button 
          variant="ghost"
          size="sm"
          className={`relative z-10 px-4 py-2 min-w-[120px] font-mono transition-colors ${isProfessional ? 'text-zinc-900' : 'text-zinc-500'}`}
          onClick={() => setIsProfessional(true)}
        >
          Professional
        </Button>
      </div>
    </div>
  );
};

export default ToggleMode;
