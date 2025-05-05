import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calculator, Sun, Book, DollarSign, BadgeCheck, Lightbulb, Quote, Leaf, Trees, Recycle, CloudSun } from 'lucide-react';
import SolarCalculator from '@/components/SolarCalculator';

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-blue-50 opacity-50 z-0"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-mono tracking-tight">
                  Make the Switch to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Solar Energy</span>
                </h1>
                <p className="text-xl text-zinc-600 mb-8">
                  Calculate your potential savings, design your perfect system,
                  and connect with certified installers in California.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/pricing">
                    <Button size="lg" className="gap-2">
                      View Plans <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="#calculator">
                    <Button variant="outline" size="lg" className="gap-2">
                      Try Calculator <Calculator className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="glassmorphic p-2 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Solar Panels" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-zinc-100">
                <div className="flex items-center gap-3">
                  <Sun className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="font-medium">Average Savings</p>
                    <p className="text-xl font-bold">$18,000+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Sunalyzer?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform offers everything you need to make informed decisions about solar energy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-yellow-400">
              <CardHeader>
                <Calculator className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle>Accurate Calculations</CardTitle>
                <CardDescription>
                  Get precise estimates based on your location and energy usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                Our advanced algorithms take into account your specific location in California, 
                roof angle, shading, and local weather patterns for accurate results.
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-blue-400">
              <CardHeader>
                <Lightbulb className="h-8 w-8 mb-2 text-blue-500" />
                <CardTitle>System Design</CardTitle>
                <CardDescription>
                  Customize your solar system with various panel options
                </CardDescription>
              </CardHeader>
              <CardContent>
                Choose from different panel efficiencies, add battery storage, and 
                see how various configurations affect your cost and energy production.
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-green-400">
              <CardHeader>
                <BadgeCheck className="h-8 w-8 mb-2 text-green-500" />
                <CardTitle>Trusted Installers</CardTitle>
                <CardDescription>
                  Connect with pre-screened, certified solar installation professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                Browse our network of verified solar installers, read reviews, and 
                get competitive quotes for your project with confidence.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solar Calculator Section */}
      <section id="calculator" className="py-16 bg-gradient-to-br from-zinc-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Calculate Your Solar Potential</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our interactive calculator to estimate your solar system size, cost, and savings
            </p>
          </div>
          
          <SolarCalculator />
        </div>
      </section>

      {/* Energy Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Energy Sources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how solar energy compares to traditional electricity from the grid
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Sun className="h-6 w-6 text-yellow-500" />
                    </div>
                    <CardTitle>Solar Energy</CardTitle>
                  </div>
                  <span className="text-green-500 font-medium">Renewable</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Initial Investment</span>
                  <span className="font-medium">$15,000 - $25,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Monthly Cost (After Payback)</span>
                  <span className="font-medium text-green-600">$0 - $30</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>System Lifespan</span>
                  <span className="font-medium">25+ years</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Environmental Impact</span>
                  <span className="font-medium text-green-600">Minimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Price Stability</span>
                  <span className="font-medium text-green-600">Excellent</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={scrollToCalculator}>
                  Calculate Your Solar Savings
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-zinc-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-zinc-600">
                        <path d="M21 7 7.5 12l-4.45 1.78a2 2 0 0 0-1.05 1.05l-1.78 4.45L21 7Z" />
                        <path d="m21 7-4.45 13.78a2 2 0 0 1-1.05 1.05L7.5 12 21 7Z" />
                      </svg>
                    </div>
                    <CardTitle>Grid Electricity</CardTitle>
                  </div>
                  <span className="text-amber-500 font-medium">Non-renewable</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Initial Investment</span>
                  <span className="font-medium text-green-600">$0</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Monthly Cost</span>
                  <span className="font-medium text-red-600">$150 - $300+</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>System Lifespan</span>
                  <span className="font-medium">N/A</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Environmental Impact</span>
                  <span className="font-medium text-red-600">Significant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Price Stability</span>
                  <span className="font-medium text-red-600">Unpredictable</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/pricing" className="w-full">
                  <Button variant="outline" className="w-full">
                    Compare Electricity Rates
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="gap-2" onClick={scrollToCalculator}>
              Try Our Full Calculator <Calculator className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from homeowners who have made the switch to solar energy with Sunalyzer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-yellow-400 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-start">
                  <Quote className="h-10 w-10 text-yellow-400 mr-2 flex-shrink-0" />
                  <CardTitle className="text-xl">
                    Exceeded My Expectations
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 italic">
                  "After using Sunalyzer's calculator, I could clearly see how much I would save. 
                  The installer they connected me with was professional and the whole process was seamless. 
                  I'm now saving over $200 a month on my electricity bill!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 font-medium mr-3">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">Jennifer Davis</p>
                    <p className="text-sm text-muted-foreground">San Diego, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-400 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-start">
                  <Quote className="h-10 w-10 text-blue-400 mr-2 flex-shrink-0" />
                  <CardTitle className="text-xl">
                    The Best Investment
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 italic">
                  "Installing solar panels through Sunalyzer was the best home investment I've made. 
                  Their system design tool helped me visualize exactly what it would look like on 
                  my roof. Two years later, I've recouped almost half of my initial investment."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 font-medium mr-3">
                    RM
                  </div>
                  <div>
                    <p className="font-medium">Robert Martinez</p>
                    <p className="text-sm text-muted-foreground">Los Angeles, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-400 h-full md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <div className="flex items-start">
                  <Quote className="h-10 w-10 text-green-400 mr-2 flex-shrink-0" />
                  <CardTitle className="text-xl">
                    Environmentally Conscious
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 italic">
                  "I wanted to reduce my carbon footprint, but I needed to make sure it made financial 
                  sense too. Sunalyzer helped me understand both the environmental impact and the 
                  financial benefits. My system has already prevented 3 tons of CO2 emissions!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 font-medium mr-3">
                    AS
                  </div>
                  <div>
                    <p className="font-medium">Amelia Singh</p>
                    <p className="text-sm text-muted-foreground">Sacramento, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/testimonials">
              <Button variant="outline" className="gap-2">
                View All Testimonials <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Environmental Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Switching to solar energy doesn't just save you money — it helps save our planet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-green-200 border">
              <CardHeader className="pb-2">
                <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <CloudSun className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Reduce CO₂ Emissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The average residential solar system offsets about 100,000 lbs of carbon dioxide in 25 years — equivalent 
                  to driving a car for 100,000 miles.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 border">
              <CardHeader className="pb-2">
                <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <Trees className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Preserve Ecosystems</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Solar energy production doesn't require water for cooling, saving precious water resources and 
                  protecting local ecosystems from pollution.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 border">
              <CardHeader className="pb-2">
                <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <Recycle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Renewable Resource</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Unlike fossil fuels, solar energy is unlimited and renewable. The sun provides more energy in one hour 
                  than the world uses in an entire year.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 border">
              <CardHeader className="pb-2">
                <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Clean Air & Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  By reducing reliance on fossil fuels, solar energy helps improve air quality and public health, 
                  reducing respiratory and cardiovascular diseases.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-green-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Your Environmental Impact</h3>
                <p className="mb-4 text-lg">
                  Installing a typical 6kW solar system in California can reduce your carbon footprint dramatically:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                      <BadgeCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Equivalent to planting <span className="font-semibold">120 trees</span> each year</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                      <BadgeCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Offset <span className="font-semibold">8-10 tons</span> of CO₂ emissions annually</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                      <BadgeCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Save over <span className="font-semibold">10,000 gallons</span> of water per year compared to conventional electricity</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/#calculator">
                    <Button className="gap-2">
                      Calculate Your Impact <Calculator className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Solar panels in California landscape" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">Solar energy helps preserve California's natural beauty</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/environmental-impact">
              <Button variant="outline" className="gap-2">
                Learn More About Environmental Benefits <Leaf className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your solar energy needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Basic solar calculator</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>California locations only</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Standard panel options</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border-primary border-2 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground py-1 px-3 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>All Free features</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Save up to 10 calculations</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Export basic PDF reports</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Additional locations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border">
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$29.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>All Basic features</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Unlimited saved calculations</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Advanced system design options</span>
                  </li>
                  <li className="flex items-start">
                    <BadgeCheck className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Professional PDF reports</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button variant="outline" className="w-full">Sign Up</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/pricing">
              <Button variant="link" className="gap-2">
                View All Plans & Enterprise Options <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section with link to new Blog page */}
      <section className="py-16 bg-gradient-to-br from-zinc-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Solar Energy Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about solar technology, savings, and sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1613665813446-82a78f8af812?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                    alt="Solar Panels on Roof" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>The Economics of Solar Energy in 2025</CardTitle>
                  <CardDescription>May 1, 2025 • 5 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    With falling prices and increasing efficiencies, solar energy has become more 
                    economically viable than ever. We break down the numbers and ROI calculations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/blog">
                    <Button variant="ghost" className="gap-2 group">
                      Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
                    alt="Battery Storage" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Battery Storage: Is It Worth the Cost?</CardTitle>
                  <CardDescription>April 25, 2025 • 4 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Battery prices continue to fall while capacities increase. We analyze when adding 
                    battery storage makes financial sense for your solar setup.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/blog">
                    <Button variant="ghost" className="gap-2 group">
                      Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="California Landscape" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>California's Solar Incentives Explained</CardTitle>
                  <CardDescription>April 18, 2025 • 6 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    California offers some of the best solar incentives in the country. 
                    Learn about tax credits, rebates, and net metering policies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/blog">
                    <Button variant="ghost" className="gap-2 group">
                      Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                View All Articles <Book className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Embrace Solar Energy?</h2>
            <p className="text-lg mb-8">
              Take the first step toward energy independence and environmental sustainability.
              Calculate your solar potential today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#calculator">
                <Button size="lg" className="gap-2">
                  Start Calculating <Calculator className="h-4 w-4" />
                </Button>
              </a>
              <Link to="/installers">
                <Button variant="outline" size="lg" className="gap-2">
                  Find Installers <Lightbulb className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
