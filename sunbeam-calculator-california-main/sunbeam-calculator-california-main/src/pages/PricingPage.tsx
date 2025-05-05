
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const PricingPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [processingPlan, setProcessingPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Basic solar calculations',
      features: [
        'Basic solar calculator',
        'California locations only',
        'Standard panel efficiency options',
      ],
      action: isAuthenticated ? 'Current Plan' : 'Get Started',
      disabled: isAuthenticated && user?.subscriptionTier === 'free',
      current: isAuthenticated && user?.subscriptionTier === 'free',
    },
    {
      name: 'Basic',
      price: '$9.99',
      period: 'monthly',
      description: 'For homeowners looking to explore solar options',
      features: [
        'All Free plan features',
        'Save up to 10 calculations',
        'Export basic PDF reports',
        'Additional locations',
      ],
      action: isAuthenticated && user?.subscriptionTier === 'basic' ? 'Current Plan' : 'Upgrade',
      disabled: isAuthenticated && user?.subscriptionTier === 'basic',
      current: isAuthenticated && user?.subscriptionTier === 'basic',
      highlighted: true,
    },
    {
      name: 'Professional',
      price: '$29.99',
      period: 'monthly',
      description: 'For solar consultants and professionals',
      features: [
        'All Basic plan features',
        'Unlimited saved calculations',
        'Advanced system design options',
        'Historical weather data integration',
        'Professional PDF reports',
        'API access',
      ],
      action: isAuthenticated && user?.subscriptionTier === 'professional' ? 'Current Plan' : 'Upgrade',
      disabled: isAuthenticated && user?.subscriptionTier === 'professional',
      current: isAuthenticated && user?.subscriptionTier === 'professional',
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      description: 'For installation companies and large teams',
      features: [
        'All Professional plan features',
        'Team collaboration tools',
        'White-label option',
        'Custom integrations',
        'Dedicated support',
        'Volume pricing',
      ],
      action: isAuthenticated && user?.subscriptionTier === 'enterprise' ? 'Current Plan' : 'Contact Sales',
      disabled: isAuthenticated && user?.subscriptionTier === 'enterprise',
      current: isAuthenticated && user?.subscriptionTier === 'enterprise',
    },
  ];

  const handleSubscription = (planName: string) => {
    if (!isAuthenticated) {
      navigate('/register');
      return;
    }

    setProcessingPlan(planName);
    
    // In a real app, this would connect to a payment processor
    // and update the user's subscription in the database
    setTimeout(() => {
      toast.success(`${planName} plan subscription successful`, {
        description: `You've been upgraded to the ${planName} plan. You now have access to all ${planName} features.`,
        duration: 5000,
      });
      
      // Redirect to dashboard after successful payment
      navigate('/dashboard');
      setProcessingPlan(null);
    }, 1500);
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Pricing Plans</h1>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          Choose the perfect plan for your solar energy needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg overflow-hidden flex flex-col ${
              plan.highlighted 
                ? 'border-primary shadow-lg' 
                : 'border-border'
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>
            <div className="flex-grow p-6 pt-0">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0">
              {plan.name === 'Enterprise' ? (
                <Link to="/contact" className="block w-full">
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? 'default' : 'outline'}
                    disabled={plan.disabled}
                  >
                    Contact Sales
                  </Button>
                </Link>
              ) : (
                <Button
                  className="w-full"
                  variant={plan.highlighted ? 'default' : 'outline'}
                  disabled={plan.disabled || processingPlan === plan.name}
                  onClick={() => handleSubscription(plan.name)}
                >
                  {processingPlan === plan.name ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    plan.action
                  )}
                </Button>
              )}
              {plan.current && (
                <p className="text-center mt-2 text-sm text-primary font-medium">Current Plan</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
