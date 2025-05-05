
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SolarCalculationResult } from '@/utils/solarCalculator';
import { SYSTEM_DEFAULTS } from '@/utils/constants';

interface ResultsDashboardProps {
  results: SolarCalculationResult | null;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results }) => {
  if (!results) return null;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number, decimals = 1) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="mono-heading text-xl mb-4">Solar System Results</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-solar-yellow/5 border-solar-yellow/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-mono">System Size</CardTitle>
            <CardDescription>Calculated solar system capacity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-mono font-medium">{results.systemSizeKW.toFixed(2)} kW</div>
            <p className="text-sm text-zinc-500 mt-2">{results.numberOfPanels} x {SYSTEM_DEFAULTS.panelWattage}W panels</p>
          </CardContent>
        </Card>

        <Card className="bg-solar-blue/5 border-solar-blue/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-mono">Annual Production</CardTitle>
            <CardDescription>Estimated yearly energy generation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-mono font-medium">
              {formatNumber(results.annualProduction)} kWh
            </div>
            <p className="text-sm text-zinc-500 mt-2">
              {formatNumber(results.dailyProduction)} kWh daily average
            </p>
          </CardContent>
        </Card>

        <Card className="bg-solar-green/5 border-solar-green/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-mono">Payback Period</CardTitle>
            <CardDescription>Time to recoup investment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-mono font-medium">
              {formatNumber(results.paybackPeriod)} years
            </div>
            <p className="text-sm text-zinc-500 mt-2">
              {formatCurrency(results.annualSavings)} saved annually
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-mono">Financial Summary</CardTitle>
            <CardDescription>Cost breakdown and savings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-600">Installation Cost</span>
                <span className="font-mono">{formatCurrency(results.installationCost)}</span>
              </div>
              
              {results.batteryCost > 0 && (
                <div className="flex justify-between">
                  <span className="text-zinc-600">Battery Cost</span>
                  <span className="font-mono">{formatCurrency(results.batteryCost)}</span>
                </div>
              )}
              
              <div className="flex justify-between text-solar-green">
                <span>Federal Incentive</span>
                <span className="font-mono">-{formatCurrency(results.federalIncentive)}</span>
              </div>
              
              <div className="flex justify-between text-solar-green">
                <span>State Incentive</span>
                <span className="font-mono">-{formatCurrency(results.stateIncentive)}</span>
              </div>
              
              <div className="border-t pt-2 mt-4 flex justify-between font-medium">
                <span>Net Cost</span>
                <span className="font-mono">{formatCurrency(results.netCost)}</span>
              </div>
            </div>
            
            <div className="pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-600">Monthly Savings</span>
                <span className="font-mono text-solar-green">
                  {formatCurrency(results.monthlySavings)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-600">Annual Savings</span>
                <span className="font-mono text-solar-green">
                  {formatCurrency(results.annualSavings)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-600">25-Year Savings</span>
                <span className="font-mono text-solar-green">
                  {formatCurrency(results.annualSavings * 25)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-mono">System Specifications</CardTitle>
            <CardDescription>Technical details about your solar system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg p-4 bg-zinc-50">
                <div className="text-sm text-zinc-500">System Size</div>
                <div className="font-mono font-medium">{results.systemSizeKW.toFixed(2)} kW</div>
              </div>
              
              <div className="rounded-lg p-4 bg-zinc-50">
                <div className="text-sm text-zinc-500">Number of Panels</div>
                <div className="font-mono font-medium">{results.numberOfPanels}</div>
              </div>
              
              <div className="rounded-lg p-4 bg-zinc-50">
                <div className="text-sm text-zinc-500">Panel Wattage</div>
                <div className="font-mono font-medium">{SYSTEM_DEFAULTS.panelWattage}W</div>
              </div>
              
              <div className="rounded-lg p-4 bg-zinc-50">
                <div className="text-sm text-zinc-500">Inverter Efficiency</div>
                <div className="font-mono font-medium">{SYSTEM_DEFAULTS.inverterEfficiency * 100}%</div>
              </div>
              
              {results.batterySize > 0 && (
                <>
                  <div className="rounded-lg p-4 bg-zinc-50">
                    <div className="text-sm text-zinc-500">Battery Capacity</div>
                    <div className="font-mono font-medium">
                      {formatNumber(results.batterySize / 1000, 1)} kWh
                    </div>
                  </div>
                  
                  <div className="rounded-lg p-4 bg-zinc-50">
                    <div className="text-sm text-zinc-500">Backup Duration</div>
                    <div className="font-mono font-medium">
                      {results.batterySize / (results.dailyProduction * 1000)} days
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="pt-2 text-sm text-zinc-500">
              <p>This system will produce approximately {Math.round(results.annualProduction / 365)} kWh per day, 
              which is designed to offset your daily consumption. The system includes {results.numberOfPanels} solar 
              panels rated at {SYSTEM_DEFAULTS.panelWattage}W each.</p>
              
              <p className="mt-2">
                {results.batterySize > 0 ? 
                  `Your system includes ${formatNumber(results.batterySize / 1000, 1)} kWh of battery storage.` : 
                  'Your system does not include battery storage.'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsDashboard;
