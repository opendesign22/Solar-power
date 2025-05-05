
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Download } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const SavedCalculations: React.FC = () => {
  const { user } = useAuth();
  const isFreeUser = !user?.subscriptionTier || user.subscriptionTier === 'free';
  
  // Mock saved calculations (would come from backend/database in real app)
  const savedCalculations = [];

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Saved Calculations</h1>
          <p className="text-muted-foreground mt-1">Access your saved solar energy calculations</p>
        </div>
        <Link to="/">
          <Button variant="default" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            New Calculation
          </Button>
        </Link>
      </div>

      {savedCalculations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* This would be populated with actual saved calculations */}
        </div>
      ) : (
        <Card className="border-dashed border-2">
          <CardHeader>
            <CardTitle className="text-center">No Saved Calculations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-6">
                You haven't saved any solar calculations yet.
                {isFreeUser && " Free users can save up to 3 calculations."}
              </p>
              <Link to="/">
                <Button>
                  Create Your First Calculation
                </Button>
              </Link>
              {isFreeUser && (
                <p className="text-sm text-muted-foreground mt-4">
                  Need to save more? <Link to="/pricing" className="text-primary hover:underline">Upgrade your plan</Link>
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SavedCalculations;
