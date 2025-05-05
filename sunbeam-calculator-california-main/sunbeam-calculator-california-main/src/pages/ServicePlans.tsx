
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const ServicePlans: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const plans = [
    {
      name: "Basic Maintenance",
      price: "$149",
      period: "year",
      description: "Annual inspection and basic maintenance for home solar systems",
      features: [
        "Annual system inspection",
        "Panel cleaning",
        "Performance report",
        "Basic troubleshooting",
      ],
      details: [
        { service: "System Inspection", basic: "1x / year", standard: "2x / year", premium: "4x / year" },
        { service: "Panel Cleaning", basic: "1x / year", standard: "2x / year", premium: "4x / year" },
        { service: "Inverter Check", basic: "Basic", standard: "Detailed", premium: "Comprehensive" },
        { service: "Performance Report", basic: "✓", standard: "✓", premium: "✓" },
        { service: "Troubleshooting", basic: "Basic", standard: "Standard", premium: "Priority" },
      ],
      highlighted: false,
      path: "/service-plans/basic"
    },
    {
      name: "Standard Care",
      price: "$249",
      period: "year",
      description: "Comprehensive care plan with bi-annual maintenance visits",
      features: [
        "All Basic plan features",
        "Bi-annual system inspection",
        "Inverter maintenance",
        "Minor repairs included",
        "Phone support",
      ],
      details: null,
      highlighted: true,
      path: null
    },
    {
      name: "Premium Protection",
      price: "$499",
      period: "year",
      description: "Complete protection with quarterly maintenance and priority service",
      features: [
        "All Standard plan features",
        "Quarterly system inspection",
        "Priority service response",
        "Battery system maintenance",
        "Extended warranty support",
        "Dedicated account manager",
      ],
      details: null,
      highlighted: false,
      path: null
    },
  ];

  const handleSubscribe = (planName: string) => {
    toast({
      title: "Service Plan Selected",
      description: `You've selected the ${planName} plan. A representative will contact you soon.`,
    });
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Solar System Service Plans</h1>
        <p className="text-muted-foreground mt-2">
          Keep your solar investment protected with our professional maintenance plans
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`flex flex-col ${plan.highlighted ? 'border-primary shadow-lg' : ''}`}
          >
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-primary" />
                <CardTitle>{plan.name}</CardTitle>
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {plan.path ? (
                <Link to={plan.path} className="w-full">
                  <Button 
                    className="w-full" 
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    View Details
                  </Button>
                </Link>
              ) : (
                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? 'default' : 'outline'}
                  onClick={() => handleSubscribe(plan.name)}
                >
                  Subscribe
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Plan Comparison</CardTitle>
          <CardDescription>Detailed comparison of our maintenance service plans</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Basic Maintenance</TableHead>
                <TableHead>Standard Care</TableHead>
                <TableHead>Premium Protection</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>System Inspection</TableCell>
                <TableCell>1x / year</TableCell>
                <TableCell>2x / year</TableCell>
                <TableCell>4x / year</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Panel Cleaning</TableCell>
                <TableCell>1x / year</TableCell>
                <TableCell>2x / year</TableCell>
                <TableCell>4x / year</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Inverter Maintenance</TableCell>
                <TableCell>Basic check</TableCell>
                <TableCell>Detailed inspection</TableCell>
                <TableCell>Comprehensive service</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Battery System Check</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Basic</TableCell>
                <TableCell>Comprehensive</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Response Time</TableCell>
                <TableCell>72 hours</TableCell>
                <TableCell>48 hours</TableCell>
                <TableCell>24 hours</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Support</TableCell>
                <TableCell>Email only</TableCell>
                <TableCell>Email & Phone</TableCell>
                <TableCell>Dedicated manager</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minor Repairs</TableCell>
                <TableCell>Not included</TableCell>
                <TableCell>Included</TableCell>
                <TableCell>Included</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Major Repairs Discount</TableCell>
                <TableCell>-</TableCell>
                <TableCell>10% off</TableCell>
                <TableCell>20% off</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Service Plan FAQs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-bold mb-1">What's included in the system inspection?</h3>
            <p className="text-muted-foreground">Our technicians check all electrical connections, inspect physical mounting, evaluate system performance, and identify any potential issues that could impact efficiency or safety.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">How often should I clean my solar panels?</h3>
            <p className="text-muted-foreground">For optimal performance, panels should be cleaned at least twice a year, but this can vary based on your local environment and weather conditions.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Can I upgrade my plan later?</h3>
            <p className="text-muted-foreground">Yes, you can upgrade your service plan at any time. The price difference will be prorated for the remaining term of your contract.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">What if I need service between scheduled maintenance visits?</h3>
            <p className="text-muted-foreground">All plans include the ability to request service visits between scheduled maintenance. Response times and additional costs vary by plan level.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicePlans;
