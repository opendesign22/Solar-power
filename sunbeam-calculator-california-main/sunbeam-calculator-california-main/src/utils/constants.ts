
// California solar data constants
export const CALIFORNIA_REGIONS = [
  { name: "San Francisco", latitude: 37.7749, longitude: -122.4194, sunHours: 5.5 },
  { name: "Los Angeles", latitude: 34.0522, longitude: -118.2437, sunHours: 5.8 },
  { name: "San Diego", latitude: 32.7157, longitude: -117.1611, sunHours: 5.7 },
  { name: "Sacramento", latitude: 38.5816, longitude: -121.4944, sunHours: 5.4 },
  { name: "Fresno", latitude: 36.7378, longitude: -119.7871, sunHours: 5.9 },
  { name: "Palm Springs", latitude: 33.8303, longitude: -116.5453, sunHours: 6.2 }
];

// Worldwide sun hours data
export const WORLDWIDE_REGIONS = [
  // North America
  { name: "New York", country: "USA", latitude: 40.7128, longitude: -74.0060, sunHours: 4.7 },
  { name: "Miami", country: "USA", latitude: 25.7617, longitude: -80.1918, sunHours: 5.6 },
  { name: "Toronto", country: "Canada", latitude: 43.6532, longitude: -79.3832, sunHours: 3.9 },
  { name: "Mexico City", country: "Mexico", latitude: 19.4326, longitude: -99.1332, sunHours: 5.5 },
  
  // Europe
  { name: "London", country: "UK", latitude: 51.5074, longitude: -0.1278, sunHours: 3.4 },
  { name: "Madrid", country: "Spain", latitude: 40.4168, longitude: -3.7038, sunHours: 5.1 },
  { name: "Berlin", country: "Germany", latitude: 52.5200, longitude: 13.4050, sunHours: 3.7 },
  { name: "Rome", country: "Italy", latitude: 41.9028, longitude: 12.4964, sunHours: 4.8 },
  
  // Asia
  { name: "Tokyo", country: "Japan", latitude: 35.6762, longitude: 139.6503, sunHours: 4.2 },
  { name: "Bangkok", country: "Thailand", latitude: 13.7563, longitude: 100.5018, sunHours: 5.9 },
  { name: "Dubai", country: "UAE", latitude: 25.2048, longitude: 55.2708, sunHours: 6.8 },
  { name: "Mumbai", country: "India", latitude: 19.0760, longitude: 72.8777, sunHours: 5.6 },
  
  // Australia/Oceania
  { name: "Sydney", country: "Australia", latitude: 33.8688, longitude: 151.2093, sunHours: 5.3 },
  { name: "Auckland", country: "New Zealand", latitude: -36.8509, longitude: 174.7645, sunHours: 4.6 },
  
  // Africa
  { name: "Cape Town", country: "South Africa", latitude: -33.9249, longitude: 18.4241, sunHours: 6.0 },
  { name: "Cairo", country: "Egypt", latitude: 30.0444, longitude: 31.2357, sunHours: 6.5 },
  
  // South America
  { name: "Rio de Janeiro", country: "Brazil", latitude: -22.9068, longitude: -43.1729, sunHours: 5.7 },
  { name: "Buenos Aires", country: "Argentina", latitude: -34.6037, longitude: -58.3816, sunHours: 5.2 }
];

// Solar panel efficiency data
export const PANEL_EFFICIENCIES = {
  standard: 0.18, // 18% efficiency
  premium: 0.21, // 21% efficiency
  highEnd: 0.23 // 23% efficiency
};

// Financial constants
export const FINANCIAL_CONSTANTS = {
  installationCostPerWatt: 2.5, // $2.50 per watt
  panelCostPerWatt: 0.50, // $0.50 per watt
  inverterCostPerWatt: 0.30, // $0.30 per watt
  mountingCostPerWatt: 0.20, // $0.20 per watt
  batteryCostPerWh: 0.50, // $0.50 per watt-hour
  averageElectricityRate: 0.27, // $0.27 per kWh in California
  federalTaxCredit: 0.30, // 30% federal tax credit
  californiaTaxCredit: 0.10 // 10% California state incentive
};

// System defaults
export const SYSTEM_DEFAULTS = {
  inverterEfficiency: 0.96, // 96% efficiency
  systemLosses: 0.14, // 14% system losses
  panelWattage: 400, // 400W panels
  defaultDailyUsage: 20, // 20 kWh per day
  defaultPanelEfficiency: PANEL_EFFICIENCIES.standard
};
