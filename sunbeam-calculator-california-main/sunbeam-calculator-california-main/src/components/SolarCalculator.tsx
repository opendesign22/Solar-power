
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { calculateSolarNeeds, SolarCalculationResult, getLocationDetails } from '@/utils/solarCalculator';
import { CALIFORNIA_REGIONS, WORLDWIDE_REGIONS, PANEL_EFFICIENCIES, SYSTEM_DEFAULTS } from '@/utils/constants';
import CalculatorForm from '@/components/CalculatorForm';
import ResultsDashboard from '@/components/ResultsDashboard';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from "sonner";
import CalculatorHeader from '@/components/calculator/CalculatorHeader';
import LocationSelector from '@/components/calculator/LocationSelector';
import CalculatorPlaceholder from '@/components/calculator/CalculatorPlaceholder';
import CollapsedCalculator from '@/components/calculator/CollapsedCalculator';

const SolarCalculator: React.FC = () => {
  const [dailyConsumption, setDailyConsumption] = useState(SYSTEM_DEFAULTS.defaultDailyUsage);
  const [panelEfficiency, setPanelEfficiency] = useState(PANEL_EFFICIENCIES.standard);
  const [includesBattery, setIncludesBattery] = useState(false);
  const [batteryDays, setBatteryDays] = useState(1);
  const [professionalMode, setProfessionalMode] = useState(false);
  const [roofAngle, setRoofAngle] = useState(30);
  const [shadingFactor, setShadingFactor] = useState(0.95);
  const [systemTemperature, setSystemTemperature] = useState(30);
  const [calculationResults, setCalculationResults] = useState<SolarCalculationResult | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(CALIFORNIA_REGIONS[0]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [regionType, setRegionType] = useState<'california' | 'worldwide'>('california');
  
  const handleLocationChange = (value: string) => {
    const allRegions = regionType === 'california' ? CALIFORNIA_REGIONS : WORLDWIDE_REGIONS;
    const location = allRegions.find(region => region.name === value);
    if (location) {
      setSelectedLocation(location);
    }
  };
  
  const handleCalculate = () => {
    setIsCalculating(true);
    
    // Simulate a brief calculation delay for better UX
    setTimeout(() => {
      const results = calculateSolarNeeds({
        dailyConsumption,
        location: selectedLocation.name,
        latitude: selectedLocation.latitude,
        sunHours: selectedLocation.sunHours,
        panelEfficiency,
        includesBattery,
        batteryDays,
        professionalMode,
        roofAngle,
        shadingFactor,
        systemTemperature
      });
      
      setCalculationResults(results);
      if (!isExpanded) {
        setIsExpanded(true);
      }
      
      toast("Calculation complete!", {
        description: `Your ${dailyConsumption} kWh system would need approximately ${Math.round(results.numberOfPanels)} panels`,
        action: {
          label: "View Details",
          onClick: () => {
            // This is just for UI feedback - the results are already displayed
            console.log("View calculation details clicked");
          },
        },
      });
      
      setIsCalculating(false);
    }, 800);
  };

  const handleRegionTypeChange = (value: 'california' | 'worldwide') => {
    setRegionType(value);
    // Set the default location based on the region type
    if (value === 'california') {
      setSelectedLocation(CALIFORNIA_REGIONS[0]);
    } else {
      setSelectedLocation(WORLDWIDE_REGIONS[0]);
    }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg overflow-hidden border-t-4 border-t-solar-yellow">
        <CardContent className="p-0">
          <div className="p-6 bg-gradient-to-r from-yellow-50 via-blue-50 to-yellow-50">
            <CalculatorHeader 
              isExpanded={isExpanded} 
              onExpandToggle={() => setIsExpanded(!isExpanded)}
            />
            
            <AnimatePresence>
              {isExpanded ? (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-5"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <LocationSelector
                      regionType={regionType}
                      selectedLocation={selectedLocation}
                      onRegionTypeChange={handleRegionTypeChange}
                      onLocationChange={handleLocationChange}
                    />

                    <CalculatorForm 
                      dailyConsumption={dailyConsumption}
                      setDailyConsumption={setDailyConsumption}
                      panelEfficiency={panelEfficiency}
                      setPanelEfficiency={setPanelEfficiency}
                      includesBattery={includesBattery}
                      setIncludesBattery={setIncludesBattery}
                      batteryDays={batteryDays}
                      setBatteryDays={setBatteryDays}
                      professionalMode={professionalMode}
                      setProfessionalMode={setProfessionalMode}
                      roofAngle={roofAngle}
                      setRoofAngle={setRoofAngle}
                      shadingFactor={shadingFactor}
                      setShadingFactor={setShadingFactor}
                      systemTemperature={systemTemperature}
                      setSystemTemperature={setSystemTemperature}
                      onCalculate={handleCalculate}
                      isCalculating={isCalculating}
                    />
                  </motion.div>

                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-5"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {calculationResults ? (
                      <ResultsDashboard results={calculationResults} />
                    ) : (
                      <CalculatorPlaceholder 
                        onCalculate={handleCalculate}
                        isCalculating={isCalculating}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ) : (
                <CollapsedCalculator onExpand={() => setIsExpanded(true)} />
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SolarCalculator;
