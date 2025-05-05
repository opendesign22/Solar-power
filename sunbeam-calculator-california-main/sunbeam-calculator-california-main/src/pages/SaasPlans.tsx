
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const SaasPlans: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [processingPlan, setProcessingPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'month',
      description: 'Get started with basic solar calculations',
      features: [
        'Basic solar calculator',
        'California locations only',
        'Standard panel options',
      ],
      action: 'Get Started',
      disabled: isAuthenticated && user?.subscriptionTier === 'free',
      current: isAuthenticated && user?.subscriptionTier === 'free',
    },
    {
      name: 'Basic',
      price: '$9.99',
      period: 'month',
      description: 'Perfect for homeowners exploring solar options',
      features: [
        'All Free features',
        'Save up to 10 calculations',
        'Export basic PDF reports',
        'Additional locations',
      ],
      action: 'Sign Up',
      disabled: isAuthenticated && user?.subscriptionTier === 'basic',
      current: isAuthenticated && user?.subscriptionTier === 'basic',
      highlighted: true,
      popular: true,
    },
    {
      name: 'Professional',
      price: '$29.99',
      period: 'month',
      description: 'Advanced tools for serious solar enthusiasts',
      features: [
        'All Basic features',
        'Unlimited saved calculations',
        'Advanced system design options',
        'Professional PDF reports',
      ],
      action: 'Sign Up',
      disabled: isAuthenticated && user?.subscriptionTier === 'professional',
      current: isAuthenticated && user?.subscriptionTier === 'professional',
    },
  ];

  const handleSubscription = (planName: string) => {
    if (!isAuthenticated) {
      navigate('/register');
      return;
    }

    setProcessingPlan(planName);
    
    // In a real app, this would connect to a payment processor
    setTimeout(() => {
      toast.success(`${planName} plan subscription successful`, {
        description: `You've been subscribed to the ${planName} plan. You now have access to all ${planName} features.`,
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
        <h1 className="text-3xl font-bold mb-2">Choose Your Plan</h1>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          Select the perfect plan for your solar energy needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg overflow-hidden flex flex-col relative ${
              plan.highlighted 
                ? 'border-primary shadow-lg' 
                : 'border-border'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-medium text-xs px-3 py-1 rounded-bl">
                Popular
              </div>
            )}
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
              {plan.current && (
                <p className="text-center mt-2 text-sm text-primary font-medium">Current Plan</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Solar SaaS Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-bold mb-2">Accurate Calculations</h3>
            <p className="text-muted-foreground">
              Our solar calculator uses precise algorithms and real-world data to provide accurate solar potential estimates.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-bold mb-2">Easy to Use</h3>
            <p className="text-muted-foreground">
              User-friendly interface makes it simple to input your data and get reliable solar energy projections.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-bold mb-2">Detailed Reports</h3>
            <p className="text-muted-foreground">
              Comprehensive reports with visual breakdowns of costs, savings, and environmental impact.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 border rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-1">How accurate are the solar calculations?</h3>
            <p className="text-muted-foreground">
              Our calculations are based on historical weather data, your location's solar irradiance, and panel specifications to provide estimates with up to 95% accuracy.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Can I upgrade my plan later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade your subscription at any time. Your new features will be available immediately, and we'll prorate the cost based on your billing cycle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Do you offer refunds?</h3>
            <p className="text-muted-foreground">
              We offer a 14-day money-back guarantee for paid plans. If you're not satisfied, contact our support team for a full refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaasPlans;
