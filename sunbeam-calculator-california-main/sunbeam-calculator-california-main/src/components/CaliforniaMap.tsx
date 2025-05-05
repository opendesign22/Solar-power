
import React from 'react';
import { cn } from '@/lib/utils';
import { CALIFORNIA_REGIONS } from '@/utils/constants';

interface CaliforniaMapProps {
  selectedLocation: string;
  onSelectLocation: (location: string) => void;
}

const CaliforniaMap: React.FC<CaliforniaMapProps> = ({ 
  selectedLocation, 
  onSelectLocation 
}) => {
  return (
    <div className="calculator-card solar-gradient overflow-hidden mb-6">
      <h3 className="font-mono text-lg mb-4">Select Location</h3>
      <div className="relative w-full h-[300px] bg-white rounded-lg p-4 overflow-hidden border border-zinc-100">
        {/* California state outline - simplified for this implementation */}
        <svg 
          className="w-full h-full opacity-10"
          viewBox="0 0 100 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M18.5,12.5c-1.2,3.6-2.4,7.4-3.7,11.3c-0.8,2.5-2.4,4.6-1.7,7.5c0.8,2.9,0.1,6.1,0.4,9.2 c0.3,3.3,1.8,5.9,2.9,8.8c0.7,1.8,0.8,3.8,1.4,5.6c1.4,4.3,0.4,8.8,0.8,13.2c0.2,2.3,0.9,4.1,2,6.1c3.1,6.2,3.8,13.2,6,19.7 c1.5,4.5,4.1,8.6,4.8,13.5c1.3,9.8,3.4,19.5,5.5,29.2c0.6,2.9,2.4,5.3,2.7,8.3c0.4,3.9,2.2,7.4,3.6,11c0.7,1.8,2.4,2.4,3.4,3.9 c1.1,1.7,1,3.8,1.8,5.6c0.4,1,1.2,1.8,2.3,2c2.6,0.3,5-0.5,7.5-0.3c1.5,0.1,3.7-0.8,3.4,1.9c-0.2,1.7-0.3,3.3,1.7,3.6 c3.1,0.6,6.5,0.3,9.6,0.8c-1.7,3.1-1.8,6.9-3.2,10.1c-1,2.3-0.5,4.9-0.6,7.3c0,0.2,0.2,0.4,0.3,0.5c1.8,0.6,3.6,1.8,5.5,1.5 c2-0.3,3.9-0.3,5.9-0.4c3.8-0.3,7.7-0.6,11.1-2.8c3.2-2.1,6.7-4.2,10.5-4.7c3-0.4,5.6-2.5,8.6-3.1c1.3-0.2,2.7,0.1,3.5-1.3 c0.5-0.8,0.8-1.8,1.1-2.8c1-2.7,4-3.8,5-6.5c0.7-2.1-0.1-4.4-0.1-6.5c0-2.1,1.7-4.5,3.9-4.3c1.2,0.1,2.1,0.8,3,1.4 c1.4,1,2.8,1.3,4.5,1.6c4.1,0.8,7.7-0.6,11.6-1.1c3.1-0.4,5.3,0.9,8.4,0.3c0.5-0.1,1.1-0.3,1.6-0.5c1.3-0.6,3-1,3.8-2.4 c1.3-2.2,1-4.7,1.9-6.9c1-2.3,3.2-3.2,4.6-5.1c1.7-2.1,3.7-3.8,5.1-6c1.2-1.9,1.4-4.1,2.1-6.2c0.3-0.8,1-1.4,1.1-2.2 c0.5-4,0.9-8,1.3-12c0-0.4,0.3-0.9,0.1-1.2c-0.7-1-0.7-2.1-0.8-3.2c-0.2-1.6-0.8-2.8-2.2-3.7c-1.3-0.8-1.8-2.3-2.5-3.5 c-0.1-0.2-0.1-0.5-0.2-0.8c-0.8-3-2.9-4.6-5.8-5.3c-2.3-0.6-3.8-2.6-5.5-4.1c-1.2-1-2.1-2.3-3.5-3.2c-1.9-1.3-4-1.4-6.1-1.6 c-4.4-0.5-8.8-1-13.3-1.5c-0.6-0.1-1.7-0.4-1.7-1c-0.1-0.8-1.1-0.6-1.6-0.7c-1.2-0.3-2.1-1.1-3-2c-0.9-0.9-1.8-1.9-3.1-2.2 c-1.1-0.3-2.4-0.3-3.6-0.2c-3.5,0.3-7.1-0.2-10.6,0.1c-3.5,0.4-7.1,0.2-10.6,0.5c-1.2,0.1-2.4,0.1-3.6-0.1c-2.5-0.5-4.9-0.2-7.3,0.1 c-1.7,0.2-3.2,1-4.9,1.2c-3.4,0.3-5.7,2.7-8.2,4.6c-2.3,1.7-4.5,3.5-7.5,4c-2.7,0.5-5.4,0.9-8.1,1.4c-2.2,0.4-4.6,0.4-6.3,2.1 c-1.5,1.5-3.3,2.4-5.2,3.1c-2,0.7-3.8,1.7-5.7,2.6c-0.1,0-0.1,0.1-0.2,0.1c-3.7,2.2-6.9,5.1-9.7,8.4c-0.1,0.2-0.3,0.4-0.5,0.6 c-1.3,1.4-3.2,2.1-4,3.9c-0.4,1-1.4,1.9-2.4,2.5c-2.8,1.5-5.1,3.5-5.7,6.9C20.1,78.3,19,80.8,18.5,83.4 c-0.2,0.9-0.9,1.5-0.7,2.4c0.1,0.5,0.4,0.5,0.8,0.7c1,0.4,1.3,0.5,0.6,1.5c-0.3,0.4-1.2,0.8-0.5,1.5c1,1,0.5,2.1,0.3,3.2 c-0.3,1.2-1.4,1.9-1.6,3.1c-0.1,0.8,0.6,1.9-0.5,2.4c-1.3,0.6-0.9,1.7-0.8,2.7c0.2,3-0.1,6,0,9c0.1,2,0.5,4,0.7,6 c0.1,1.9,0.3,3.7,1.1,5.5c0.7,1.6,0,2.9-0.5,4.3c-0.2,0.6-0.4,1.2-0.5,1.8c-0.4,2-0.3,4.1-0.9,6.1c-0.9,2.8-0.6,5.7-1,8.6 c-0.1,0.5,0.2,1.4-0.6,1.4c-1.2,0-0.8-1.4-1.3-1.9c-1.3-1.3-0.8-3.1-0.9-4.7c-0.1-2.5,0.1-5-0.6-7.5c-0.8-3-1-5.9-0.8-9 c0.1-2.8-0.4-5.3-1.7-7.7c-0.7-1.4-1-2.9-1-4.5c0-0.9-0.1-1.8-0.3-2.6c-0.9-3.2-0.4-6.4-0.3-9.7c0.1-2.3-0.4-4.5-0.2-6.8 c0.1-1.3,0.8-2.4,1.8-3.3c0.9-0.8,1.1-1.8,0.7-3c-0.4-1.3-0.7-2.6-0.1-3.9c0.5-1.3,1-2.6,1.2-4c0.2-1,0.8-1.4,1.5-1.8 c1-0.5,1.9-1.2,1.1-2.5c-0.5-0.9-0.9-2.1-0.1-3c0.8-0.9,0.8-1.9,0.5-3c-0.3-1.3,0.2-2.5,0.5-3.7c0.3-1.1,0-2.3,0.2-3.4 c0.3-1.8,0.3-3.7,0.1-5.5c-0.1-1.4-0.2-2.7,0.1-4.1c0.5-2.5,0.6-5,0.8-7.6c0.3-3.3,0.7-6.5,0.9-9.8c0.1-1.9-1-3.5-1.3-5.3 c-0.2-1.3-0.7-2.4-1.4-3.5c-0.9-1.3-0.6-2.7-0.4-4.2c0.2-1.9,1.5-3.4,1.1-5.4c-0.2-1,0-2,0-3c0-2-0.1-4.1-0.7-6 c-0.3-0.8-0.5-1.7-0.9-2.5c-0.8-1.5-1-2.9-0.3-4.5c0.6-1.3,0.9-2.7,0.2-4.2c-0.5-1.2-0.6-2.6-0.7-4c-0.1-2.8-1-5.4-1.2-8.1 c-0.1-2-0.3-4.1-0.4-6.2c-0.2-3,0.5-5.9,0.7-8.9c0.1-3,0.2-5.9,1.2-8.7c0.6-1.8,0.6-3.9,0.7-5.9C17.1,26.3,19.3,19.5,18.5,12.5z" 
            stroke="#64B5F6"
            strokeWidth="0.5"
            fill="#64B5F6"
          />
        </svg>
        
        {/* Map markers for each location */}
        <div className="absolute top-0 left-0 w-full h-full">
          {CALIFORNIA_REGIONS.map((location) => {
            // These are approximate positions - would be refined in a production app
            const top = location.latitude > 36 ? 
              (38 - location.latitude) * 30 + 50 : 
              (36 - location.latitude) * 15 + 110;
            
            const left = (location.longitude + 123) * 30;
            
            return (
              <div 
                key={location.name}
                className={cn(
                  "absolute w-4 h-4 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2",
                  selectedLocation === location.name ? 
                    "bg-solar-yellow border-2 border-white shadow-lg scale-125" : 
                    "bg-solar-blue hover:bg-solar-yellow transition-all"
                )}
                style={{ top: `${top}px`, left: `${left}px` }}
                onClick={() => onSelectLocation(location.name)}
              />
            );
          })}
        </div>
        
        {/* Location list */}
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-zinc-100">
          <div className="text-xs text-zinc-500 mb-2">California Regions:</div>
          <div className="space-y-1">
            {CALIFORNIA_REGIONS.map((location) => (
              <div 
                key={location.name}
                className={cn(
                  "text-sm cursor-pointer px-3 py-1 rounded-md transition-colors",
                  selectedLocation === location.name ? 
                    "bg-solar-yellow/20 text-zinc-900 font-medium" : 
                    "hover:bg-solar-blue/10"
                )}
                onClick={() => onSelectLocation(location.name)}
              >
                {location.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaliforniaMap;
