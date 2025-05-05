
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Bookmark, Users, DollarSign, Sun, Package } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.name || 'User'}!</h1>
        <p className="text-muted-foreground mt-2">
          Your Sunalyzer Dashboard - {user?.subscriptionTier || 'Free'} Plan
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-3">
          <CardHeader className="pb-3">
            <CardTitle>Your Solar Summary</CardTitle>
            <CardDescription>Overview of your solar energy profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Saved Calculations</h3>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground mt-1">No calculations saved yet</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Potential Savings</h3>
                <p className="text-2xl font-bold">$0</p>
                <p className="text-sm text-muted-foreground mt-1">Calculate to see potential savings</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-1">Plan Status</h3>
                <p className="text-2xl font-bold capitalize">{user?.subscriptionTier || 'Free'}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {user?.subscriptionTier === 'free' ? 'Upgrade for more features' : 'All features unlocked!'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Solar Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Calculate your solar energy needs and potential savings based on your location.
            </p>
            <Link to="/">
              <Button>New Calculation</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bookmark className="h-5 w-5" />
              Saved Calculations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Access your saved solar calculations and reports.
            </p>
            <Link to="/saved-calculations">
              <Button>View Saved</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Find Installers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Connect with verified solar installation professionals in your area.
            </p>
            <Link to="/installers">
              <Button>Find Installers</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Service Plans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Browse maintenance and support plans for your solar system.
            </p>
            <Link to="/service-plans">
              <Button>View Plans</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Subscription Plan
            </CardTitle>
            <CardDescription>
              {user?.subscriptionTier === 'free' 
                ? 'Upgrade to access advanced features and professional tools'
                : `You're currently on the ${user?.subscriptionTier} plan`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div>
                <h3 className="font-medium text-lg capitalize">{user?.subscriptionTier || 'Free'} Plan</h3>
                <p className="text-muted-foreground">
                  {user?.subscriptionTier === 'free' 
                    ? 'Limited access to basic features'
                    : 'Full access to all features'}
                </p>
              </div>
              <div className="ml-auto">
                <Link to="/pricing">
                  <Button variant="outline">
                    {user?.subscriptionTier === 'free' ? 'Upgrade Plan' : 'Manage Plan'}
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
