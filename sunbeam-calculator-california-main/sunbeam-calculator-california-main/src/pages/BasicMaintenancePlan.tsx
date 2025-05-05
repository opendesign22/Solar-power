
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Calendar, Wrench, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

const BasicMaintenancePlan: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = () => {
    setIsProcessing(true);
    
    // In a real implementation, this would connect to a payment processor API
    // For demonstration purposes, we'll simulate a payment process with a timeout
    setTimeout(() => {
      // Payment was successful
      toast.success("Basic Maintenance Plan Selected", {
        description: "Thank you for your payment! You now have access to the Basic Maintenance Plan.",
        duration: 5000,
      });
      
      // Redirect to dashboard after successful payment
      navigate('/dashboard');
      setIsProcessing(false);
    }, 1500);
  };

  // Check if user already has this plan
  const hasBasicPlan = isAuthenticated && user?.subscriptionTier === 'basic';

  const features = [
    "Annual system inspection",
    "Panel cleaning",
    "Performance report",
    "Basic troubleshooting"
  ];

  const detailedFeatures = [
    {
      title: "Annual System Inspection",
      description: "Our technicians thoroughly inspect all electrical connections, mounting hardware, and system components to ensure optimal performance and safety."
    },
    {
      title: "Panel Cleaning",
      description: "Professional cleaning of your solar panels to remove dirt, dust, pollen, and other debris that can reduce energy production by up to 25%."
    },
    {
      title: "Performance Report",
      description: "Detailed analysis of your system's performance, including energy production metrics, efficiency calculations, and recommendations for improvements."
    },
    {
      title: "Basic Troubleshooting",
      description: "Identification and resolution of common issues that may affect your system's performance, with clear documentation of findings."
    }
  ];

  const benefits = [
    "Maintain optimal energy production",
    "Extend the lifespan of your solar investment",
    "Prevent costly repairs through early detection",
    "Ensure maximum return on your solar investment"
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Basic Maintenance Plan</h1>
        <p className="text-muted-foreground text-lg mb-6">
          Professional care for your solar system at an affordable price
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Plan Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">$149</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Annual inspection and basic maintenance for home solar systems
              </p>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {hasBasicPlan ? (
                <Button className="w-full" disabled>
                  Current Plan
                </Button>
              ) : (
                <Button 
                  className="w-full" 
                  onClick={handleSubscribe}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    "Subscribe Now - $149/year"
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Service Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Your annual maintenance includes:</p>
              <ul className="space-y-2">
                <li className="mb-3">
                  <span className="font-medium">One scheduled visit per year</span>
                  <p className="text-sm text-muted-foreground">Comprehensive maintenance and inspection</p>
                </li>
                <li className="mb-3">
                  <span className="font-medium">Flexible scheduling</span>
                  <p className="text-sm text-muted-foreground">Choose a time that works best for you</p>
                </li>
                <li className="mb-3">
                  <span className="font-medium">Service reminder</span>
                  <p className="text-sm text-muted-foreground">We'll contact you when it's time for your annual service</p>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/service-plans" className="text-sm text-primary hover:underline w-full text-center">
                Compare with other plans
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Detailed Service Description</CardTitle>
            <CardDescription>What's included in your Basic Maintenance Plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {detailedFeatures.map((feature) => (
                <div key={feature.title} className="border-b pb-4 last:border-0">
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Why Choose Our Basic Maintenance Plan</CardTitle>
            <CardDescription>Benefits of regular professional maintenance</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-muted p-4 rounded-lg">
              <p className="font-medium mb-2">Recommended for:</p>
              <p className="text-muted-foreground">Homeowners with new to medium-age solar installations looking for essential maintenance at an affordable price.</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between flex-wrap gap-4">
            <Button variant="outline" onClick={() => window.history.back()}>
              Back
            </Button>
            {hasBasicPlan ? (
              <Button disabled>
                Current Plan
              </Button>
            ) : (
              <Button 
                onClick={handleSubscribe}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                  </>
                ) : (
                  "Subscribe to Basic Maintenance"
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BasicMaintenancePlan;
