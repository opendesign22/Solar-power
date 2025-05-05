
import React from 'react';
import { CALIFORNIA_REGIONS, WORLDWIDE_REGIONS } from '@/utils/constants';
import { MapPin, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface LocationSelectorProps {
  regionType: 'california' | 'worldwide';
  selectedLocation: { name: string; latitude: number; longitude: number; sunHours: number; country?: string };
  onRegionTypeChange: (value: 'california' | 'worldwide') => void;
  onLocationChange: (value: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  regionType,
  selectedLocation,
  onRegionTypeChange,
  onLocationChange
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor="region-type" className="text-sm font-medium mb-1 block">Select Region</Label>
      <Tabs 
        defaultValue={regionType} 
        value={regionType}
        onValueChange={(value) => onRegionTypeChange(value as 'california' | 'worldwide')}
        className="mb-4"
      >
        <TabsList className="w-full">
          <TabsTrigger value="california" className="flex-1">
            <MapPin className="h-4 w-4 mr-2" /> California
          </TabsTrigger>
          <TabsTrigger value="worldwide" className="flex-1">
            <Globe className="h-4 w-4 mr-2" /> Worldwide
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      <Select 
        value={selectedLocation.name} 
        onValueChange={onLocationChange}
      >
        <SelectTrigger id="location" className="flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {regionType === 'california' ? (
              CALIFORNIA_REGIONS.map((region) => (
                <SelectItem key={region.name} value={region.name}>
                  {region.name}
                </SelectItem>
              ))
            ) : (
              WORLDWIDE_REGIONS.map((region) => (
                <SelectItem key={region.name} value={region.name}>
                  {region.name}, {region.country}
                </SelectItem>
              ))
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground mt-1">
        Average sun hours: {selectedLocation.sunHours} hours/day
      </p>
    </div>
  );
};

export default LocationSelector;
