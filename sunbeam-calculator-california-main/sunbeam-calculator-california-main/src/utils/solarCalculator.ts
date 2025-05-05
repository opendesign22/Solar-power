
import { SYSTEM_DEFAULTS, FINANCIAL_CONSTANTS, CALIFORNIA_REGIONS, WORLDWIDE_REGIONS } from './constants';

export interface SolarCalculationParams {
  dailyConsumption: number;
  location: string;
  latitude: number;
  sunHours: number;
  panelEfficiency: number;
  includesBattery: boolean;
  batteryDays?: number;
  professionalMode?: boolean;
  roofAngle?: number;
  shadingFactor?: number;
  systemTemperature?: number;
}

export interface SolarCalculationResult {
  systemSizeKW: number;
  numberOfPanels: number;
  dailyProduction: number;
  annualProduction: number;
  installationCost: number;
  federalIncentive: number;
  stateIncentive: number;
  netCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  batteryCost: number;
  batterySize: number;
}

export function calculateSolarNeeds(params: SolarCalculationParams): SolarCalculationResult {
  // Destructure params with defaults
  const {
    dailyConsumption,
    location,
    latitude,
    sunHours,
    panelEfficiency = SYSTEM_DEFAULTS.defaultPanelEfficiency,
    includesBattery = false,
    batteryDays = 1,
    professionalMode = false,
    roofAngle = calculateOptimalTilt(latitude),
    shadingFactor = 1.0,
    systemTemperature = 25,
  } = params;

  // Basic calculations
  const systemEfficiency = panelEfficiency * (1 - SYSTEM_DEFAULTS.systemLosses);
  const inverterEfficiency = SYSTEM_DEFAULTS.inverterEfficiency;

  // Calculate system size needed
  const systemSizeKW = (dailyConsumption / (sunHours * systemEfficiency * inverterEfficiency * shadingFactor));
  
  // Calculate number of panels
  const numberOfPanels = Math.ceil((systemSizeKW * 1000) / SYSTEM_DEFAULTS.panelWattage);
  
  // Calculate actual system size based on number of panels
  const actualSystemSizeKW = (numberOfPanels * SYSTEM_DEFAULTS.panelWattage) / 1000;
  
  // Calculate production
  const temperatureAdjustment = professionalMode ? 
    1 - (Math.max(0, systemTemperature - 25) * 0.004) : 1;
  
  const tiltEfficiency = professionalMode ?
    calculateTiltEfficiency(latitude, roofAngle) : 1;
    
  const dailyProduction = actualSystemSizeKW * sunHours * temperatureAdjustment * tiltEfficiency;
  const annualProduction = dailyProduction * 365;
  
  // Financial calculations
  const installationCost = actualSystemSizeKW * 1000 * FINANCIAL_CONSTANTS.installationCostPerWatt;
  let batteryCost = 0;
  let batterySize = 0;
  
  if (includesBattery) {
    batterySize = (dailyConsumption * batteryDays * 1000) / 0.8; // 80% depth of discharge
    batteryCost = batterySize * FINANCIAL_CONSTANTS.batteryCostPerWh;
  }
  
  const totalCost = installationCost + batteryCost;
  const federalIncentive = totalCost * FINANCIAL_CONSTANTS.federalTaxCredit;
  const stateIncentive = totalCost * FINANCIAL_CONSTANTS.californiaTaxCredit;
  const netCost = totalCost - federalIncentive - stateIncentive;
  
  // Savings calculations
  const annualSavings = annualProduction * FINANCIAL_CONSTANTS.averageElectricityRate;
  const monthlySavings = annualSavings / 12;
  const paybackPeriod = netCost / annualSavings;
  
  return {
    systemSizeKW: actualSystemSizeKW,
    numberOfPanels,
    dailyProduction,
    annualProduction,
    installationCost,
    federalIncentive,
    stateIncentive,
    netCost,
    monthlySavings,
    annualSavings,
    paybackPeriod,
    batteryCost,
    batterySize
  };
}

// Helper functions
function calculateOptimalTilt(latitude: number): number {
  return latitude * 0.76 + 3.1;
}

function calculateTiltEfficiency(latitude: number, tiltAngle: number): number {
  const optimalTilt = calculateOptimalTilt(latitude);
  const deviation = Math.abs(optimalTilt - tiltAngle);
  
  // Simplified efficiency calculation based on deviation from optimal
  if (deviation <= 5) return 1.0;
  if (deviation <= 15) return 0.97;
  if (deviation <= 30) return 0.93;
  return 0.88;
}

export function getLocationDetails(locationName: string) {
  // First check California regions
  let location = CALIFORNIA_REGIONS.find(region => region.name === locationName);
  
  // If not found in California, check worldwide regions
  if (!location) {
    location = WORLDWIDE_REGIONS.find(region => region.name === locationName);
  }
  
  return location || CALIFORNIA_REGIONS[0]; // Default to first California location if not found
}
