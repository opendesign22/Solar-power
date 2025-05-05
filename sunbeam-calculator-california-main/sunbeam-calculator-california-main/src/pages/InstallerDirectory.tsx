
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Map, MessageCircle, Star, Filter, List, Phone, Mail, Globe, Clock, Check } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data - would come from backend in real implementation
const mockInstallers = [
  {
    id: 1,
    name: "SunPower Solutions",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 124,
    badges: ["Premium Partner", "5+ Years"],
    description: "Specializing in residential and commercial solar installations across Southern California.",
    image: "https://placehold.co/400x300/e4e4e7/71717a?text=SunPower",
    phone: "(213) 555-7890",
    email: "info@sunpowersolutions.example",
    website: "sunpowersolutions.example",
    availableHours: "Mon-Fri: 8am-6pm",
    services: ["Residential", "Commercial", "Installation", "Maintenance"],
    completedProjects: 328,
    responseTime: "Within 24 hours"
  },
  {
    id: 2,
    name: "Green Energy Installers",
    location: "San Francisco, CA",
    rating: 4.6,
    reviews: 87,
    badges: ["Certified"],
    description: "Eco-friendly installations with focus on maximum efficiency and minimal environmental impact.",
    image: "https://placehold.co/400x300/e4e4e7/71717a?text=GreenEnergy",
    phone: "(415) 555-2468",
    email: "hello@greenenergyinstallers.example",
    website: "greenenergyinstallers.example",
    availableHours: "Mon-Sat: 9am-5pm",
    services: ["Residential", "Battery Storage", "Installation"],
    completedProjects: 156,
    responseTime: "Within 48 hours"
  },
  {
    id: 3,
    name: "Solar Excellence",
    location: "San Diego, CA",
    rating: 4.9,
    reviews: 156,
    badges: ["Premium Partner", "10+ Years"],
    description: "Award-winning solar installation team with over a decade of experience in custom solutions.",
    image: "https://placehold.co/400x300/e4e4e7/71717a?text=SolarExcellence",
    phone: "(619) 555-1357",
    email: "contact@solarexcellence.example",
    website: "solarexcellence.example",
    availableHours: "Mon-Fri: 8am-7pm",
    services: ["Residential", "Commercial", "Industrial", "Maintenance", "Consultation"],
    completedProjects: 492,
    responseTime: "Same day"
  }
];

// Stats - would be calculated from real data
const stats = {
  totalInstallers: 152,
  avgRating: 4.7,
  premiumPartners: 43,
  certificationsAvailable: 8
};

const InstallerDirectory: React.FC = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [installers] = useState(mockInstallers);

  const isFreeUser = !user?.subscriptionTier || user.subscriptionTier === 'free';

  // Filter installers based on search and filters
  const filteredInstallers = installers.filter(installer => {
    const matchesSearch = installer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         installer.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = locationFilter === 'all' || installer.location.includes(locationFilter);
    
    const matchesService = serviceFilter === 'all' || 
                          installer.services.some(s => s.toLowerCase() === serviceFilter.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesService;
  });

  const availableLocations = ['Los Angeles, CA', 'San Francisco, CA', 'San Diego, CA'];
  const availableServices = ['Residential', 'Commercial', 'Industrial', 'Installation', 'Maintenance', 'Consultation', 'Battery Storage'];

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Find Solar Installers</h1>
        <p className="text-muted-foreground mt-1">
          Connect with verified solar installation professionals in your area
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{stats.totalInstallers}</div>
            <p className="text-muted-foreground text-sm">Verified Installers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center text-2xl font-bold">
              {stats.avgRating}
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 ml-1" />
            </div>
            <p className="text-muted-foreground text-sm">Average Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{stats.premiumPartners}</div>
            <p className="text-muted-foreground text-sm">Premium Partners</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{stats.certificationsAvailable}</div>
            <p className="text-muted-foreground text-sm">Certifications</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="bg-card rounded-lg border p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-grow">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="w-full md:w-auto flex gap-2">
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'} 
              size="icon"
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'default' : 'outline'} 
              size="icon"
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === 'map' ? 'default' : 'outline'} 
              size="icon"
              onClick={() => setViewMode('map')}
              title="Map View"
            >
              <Map className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {availableLocations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                {availableServices.map(service => (
                  <SelectItem key={service} value={service}>{service}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Tabs for different view types */}
      <Tabs defaultValue="installers">
        <TabsList className="mb-4">
          <TabsTrigger value="installers">Installers</TabsTrigger>
          <TabsTrigger value="saved" disabled={!user || user.subscriptionTier === "free"}>
            Saved Installers
          </TabsTrigger>
          <TabsTrigger value="contacted" disabled={!user || user.subscriptionTier === "free"}>
            Contacted
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="installers">
          {filteredInstallers.length > 0 ? (
            <>
              {/* Grid View */}
              {viewMode === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredInstallers.slice(0, isFreeUser ? 1 : undefined).map(installer => (
                    <Card key={installer.id} className="overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={installer.image} 
                          alt={installer.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{installer.name}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Map className="h-3.5 w-3.5 mr-1" />
                          {installer.location}
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 font-medium">{installer.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({installer.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {installer.badges.map(badge => (
                            <Badge key={badge} variant="secondary">{badge}</Badge>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{installer.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full flex items-center gap-2">
                          <MessageCircle className="h-4 w-4" />
                          Contact Installer
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}

              {/* List View */}
              {viewMode === 'list' && (
                <div className="space-y-4">
                  {filteredInstallers.slice(0, isFreeUser ? 1 : undefined).map(installer => (
                    <Card key={installer.id}>
                      <div className="flex flex-col md:flex-row overflow-hidden">
                        <div className="w-full md:w-1/4 h-48 md:h-auto">
                          <img 
                            src={installer.image} 
                            alt={installer.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="flex flex-col flex-grow">
                          <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div>
                                <CardTitle>{installer.name}</CardTitle>
                                <div className="flex items-center text-sm text-muted-foreground mt-1">
                                  <Map className="h-3.5 w-3.5 mr-1" />
                                  {installer.location}
                                </div>
                              </div>
                              <div className="flex items-center mt-2 md:mt-0">
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                <span className="ml-1 font-medium">{installer.rating}</span>
                                <span className="text-sm text-muted-foreground ml-1">
                                  ({installer.reviews} reviews)
                                </span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {installer.badges.map(badge => (
                                <Badge key={badge} variant="secondary">{badge}</Badge>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">{installer.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{installer.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{installer.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{installer.website}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{installer.availableHours}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="border-t pt-4 mt-auto">
                            <Button variant="default" className="flex items-center gap-2">
                              <MessageCircle className="h-4 w-4" />
                              Contact Installer
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Map View */}
              {viewMode === 'map' && (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 lg:w-2/3">
                    <div className="aspect-[16/10] bg-muted rounded-md border flex items-center justify-center">
                      <div className="text-center">
                        <Map className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">Map view would display installer locations here</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {isFreeUser ? 'Upgrade to Pro to access interactive maps' : 'Interactive map loading...'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 max-h-[600px] overflow-y-auto">
                    <div className="space-y-4">
                      {filteredInstallers.slice(0, isFreeUser ? 1 : undefined).map(installer => (
                        <Card key={installer.id} className="p-4">
                          <div className="flex gap-4">
                            <div>
                              <h3 className="font-medium">{installer.name}</h3>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Map className="h-3.5 w-3.5 mr-1" />
                                {installer.location}
                              </div>
                              <div className="flex items-center mt-1">
                                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                                <span className="ml-1 text-sm">{installer.rating}</span>
                              </div>
                            </div>
                            <Button size="sm" className="ml-auto flex items-center gap-1">
                              <MessageCircle className="h-3.5 w-3.5" />
                              Contact
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Card className="text-center p-8">
              <p>No installers found matching your search criteria.</p>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="saved">
          <Card className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2">No saved installers yet</h3>
            <p className="text-muted-foreground mb-4">
              Save your favorite installers for quick access later
            </p>
          </Card>
        </TabsContent>
        
        <TabsContent value="contacted">
          <Card className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2">No contacted installers yet</h3>
            <p className="text-muted-foreground mb-4">
              Your message history with installers will appear here
            </p>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Upgrade prompt */}
      {isFreeUser && installers.length > 1 && (
        <div className="mt-8 text-center">
          <Card className="p-6 bg-muted/30">
            <h3 className="text-lg font-medium mb-2">Upgrade to see more installers</h3>
            <p className="text-muted-foreground mb-4">
              Free users can only view limited installer listings. 
              Upgrade to access our complete network of verified solar professionals.
            </p>
            <Link to="/pricing">
              <Button>View Pricing Plans</Button>
            </Link>
          </Card>
        </div>
      )}

      {/* Additional Info Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Why Choose Our Verified Installers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                Verified Professionals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All installers in our directory are thoroughly vetted and certified to ensure quality workmanship.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                Customer Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Real reviews from homeowners who have used these installation services.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                Easy Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Compare installers side-by-side to find the best match for your solar project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InstallerDirectory;
