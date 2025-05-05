
import React from 'react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Settings } from 'lucide-react';

interface ProfessionalModeToggleProps {
  professionalMode: boolean;
  setProfessionalMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfessionalModeToggle: React.FC<ProfessionalModeToggleProps> = ({
  professionalMode,
  setProfessionalMode
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4 text-zinc-500" />
          <Label htmlFor="professionalMode" className="input-label">Professional Mode</Label>
        </div>
        <div className="text-sm text-zinc-500">Enable advanced parameters</div>
      </div>
      <Switch
        id="professionalMode"
        checked={professionalMode}
        onCheckedChange={setProfessionalMode}
      />
    </div>
  );
};

export default ProfessionalModeToggle;
