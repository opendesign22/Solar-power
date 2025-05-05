
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PANEL_EFFICIENCIES, SYSTEM_DEFAULTS } from '@/utils/constants';
import ProfessionalModeToggle from './ProfessionalModeToggle';
import { Loader2 } from 'lucide-react';

interface CalculatorFormProps {
  dailyConsumption: number;
  setDailyConsumption: React.Dispatch<React.SetStateAction<number>>;
  panelEfficiency: number;
  setPanelEfficiency: React.Dispatch<React.SetStateAction<number>>;
  includesBattery: boolean;
  setIncludesBattery: React.Dispatch<React.SetStateAction<boolean>>;
  batteryDays: number;
  setBatteryDays: React.Dispatch<React.SetStateAction<number>>;
  professionalMode: boolean;
  setProfessionalMode?: React.Dispatch<React.SetStateAction<boolean>>;
  roofAngle: number;
  setRoofAngle: React.Dispatch<React.SetStateAction<number>>;
  shadingFactor: number;
  setShadingFactor: React.Dispatch<React.SetStateAction<number>>;
  systemTemperature: number;
  setSystemTemperature: React.Dispatch<React.SetStateAction<number>>;
  onCalculate: () => void;
  isCalculating?: boolean;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  dailyConsumption,
  setDailyConsumption,
  panelEfficiency,
  setPanelEfficiency,
  includesBattery,
  setIncludesBattery,
  batteryDays,
  setBatteryDays,
  professionalMode,
  setProfessionalMode = () => {},
  roofAngle,
  setRoofAngle,
  shadingFactor,
  setShadingFactor,
  systemTemperature,
  setSystemTemperature,
  onCalculate,
  isCalculating = false
}) => {
  return (
    <div className="calculator-card space-y-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-solar-yellow via-solar-blue to-solar-green" />
      
      <div className="space-y-4">
        <h2 className="mono-heading text-xl">Solar System Parameters</h2>
        
        <div className="space-y-4">
          {/* Professional Mode Toggle */}
          <ProfessionalModeToggle 
            professionalMode={professionalMode}
            setProfessionalMode={setProfessionalMode}
          />
          
          <div>
            <Label htmlFor="dailyConsumption" className="input-label">
              Daily Electricity Consumption (kWh)
            </Label>
            <div className="flex flex-col gap-2">
              <Slider
                id="dailyConsumption"
                min={5}
                max={100}
                step={1}
                value={[dailyConsumption]}
                onValueChange={(value) => setDailyConsumption(value[0])}
                className="py-4"
              />
              <div className="flex justify-between">
                <span className="text-sm text-zinc-500">5 kWh</span>
                <span className="text-sm font-medium">{dailyConsumption} kWh</span>
                <span className="text-sm text-zinc-500">100 kWh</span>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="panelEfficiency" className="input-label">Panel Efficiency</Label>
            <div className="grid grid-cols-3 gap-2 mt-1">
              <Button
                type="button"
                variant={panelEfficiency === PANEL_EFFICIENCIES.standard ? "default" : "outline"}
                className="h-auto py-2 px-3 text-sm"
                onClick={() => setPanelEfficiency(PANEL_EFFICIENCIES.standard)}
              >
                <div className="text-left">
                  <div className="font-medium">Standard</div>
                  <div className="text-xs opacity-70">18% Efficiency</div>
                </div>
              </Button>
              <Button
                type="button"
                variant={panelEfficiency === PANEL_EFFICIENCIES.premium ? "default" : "outline"}
                className="h-auto py-2 px-3 text-sm"
                onClick={() => setPanelEfficiency(PANEL_EFFICIENCIES.premium)}
              >
                <div className="text-left">
                  <div className="font-medium">Premium</div>
                  <div className="text-xs opacity-70">21% Efficiency</div>
                </div>
              </Button>
              <Button
                type="button"
                variant={panelEfficiency === PANEL_EFFICIENCIES.highEnd ? "default" : "outline"}
                className="h-auto py-2 px-3 text-sm"
                onClick={() => setPanelEfficiency(PANEL_EFFICIENCIES.highEnd)}
              >
                <div className="text-left">
                  <div className="font-medium">High-End</div>
                  <div className="text-xs opacity-70">23% Efficiency</div>
                </div>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <Label htmlFor="battery" className="input-label">Include Battery Storage</Label>
              <div className="text-sm text-zinc-500">Add battery backup to your solar system</div>
            </div>
            <Switch
              id="battery"
              checked={includesBattery}
              onCheckedChange={setIncludesBattery}
            />
          </div>
          
          {includesBattery && (
            <div className="pl-4 border-l-2 border-solar-blue/30">
              <Label htmlFor="batteryDays" className="input-label">
                Battery Backup Days
              </Label>
              <div className="flex flex-col gap-2">
                <Slider
                  id="batteryDays"
                  min={0.5}
                  max={5}
                  step={0.5}
                  value={[batteryDays]}
                  onValueChange={(value) => setBatteryDays(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between">
                  <span className="text-sm text-zinc-500">0.5 days</span>
                  <span className="text-sm font-medium">{batteryDays} days</span>
                  <span className="text-sm text-zinc-500">5 days</span>
                </div>
              </div>
            </div>
          )}

          {professionalMode && (
            <div className="space-y-4 border-t border-zinc-100 pt-4 mt-4">
              <h3 className="font-medium text-lg">Advanced Parameters</h3>
              
              <div>
                <Label htmlFor="roofAngle" className="input-label">
                  Roof Tilt Angle (degrees)
                </Label>
                <div className="flex flex-col gap-2">
                  <Slider
                    id="roofAngle"
                    min={0}
                    max={60}
                    step={1}
                    value={[roofAngle]}
                    onValueChange={(value) => setRoofAngle(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-500">0°</span>
                    <span className="text-sm font-medium">{roofAngle}°</span>
                    <span className="text-sm text-zinc-500">60°</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="shadingFactor" className="input-label">
                  Shading Factor
                </Label>
                <div className="flex flex-col gap-2">
                  <Slider
                    id="shadingFactor"
                    min={0.7}
                    max={1}
                    step={0.01}
                    value={[shadingFactor]}
                    onValueChange={(value) => setShadingFactor(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-500">Heavy Shade (70%)</span>
                    <span className="text-sm font-medium">{Math.round(shadingFactor * 100)}%</span>
                    <span className="text-sm text-zinc-500">No Shade (100%)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="systemTemperature" className="input-label">
                  Average System Temperature (°C)
                </Label>
                <div className="flex flex-col gap-2">
                  <Slider
                    id="systemTemperature"
                    min={20}
                    max={60}
                    step={1}
                    value={[systemTemperature]}
                    onValueChange={(value) => setSystemTemperature(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between">
                    <span className="text-sm text-zinc-500">20°C</span>
                    <span className="text-sm font-medium">{systemTemperature}°C</span>
                    <span className="text-sm text-zinc-500">60°C</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="pt-4">
        <Button 
          onClick={onCalculate}
          className="w-full bg-solar-yellow hover:bg-solar-yellow/90 text-zinc-900 font-mono font-medium shadow-md hover:shadow-lg transition-all"
          size="lg"
          disabled={isCalculating}
        >
          {isCalculating ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Calculating...
            </span>
          ) : (
            "Calculate Solar System"
          )}
        </Button>
      </div>
    </div>
  );
};

export default CalculatorForm;
