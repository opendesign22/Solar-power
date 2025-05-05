
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Book, BookOpen, Calendar, Search, Tag, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPosts = [
  {
    id: 1,
    title: "The Economics of Solar Energy in 2025",
    excerpt: "With falling prices and increasing efficiencies, solar energy has become more economically viable than ever. We break down the numbers and ROI calculations.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78f8af812?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    category: "Economics",
    date: "May 1, 2025",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Battery Storage: Is It Worth the Cost?",
    excerpt: "Battery prices continue to fall while capacities increase. We analyze when adding battery storage makes financial sense for your solar setup.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    category: "Technology",
    date: "April 25, 2025",
    author: "Michael Chen",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "California's Solar Incentives Explained",
    excerpt: "California offers some of the best solar incentives in the country. Learn about tax credits, rebates, and net metering policies.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Policy",
    date: "April 18, 2025",
    author: "Jessica Martinez",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Next-Generation Solar Panel Technology",
    excerpt: "Explore the latest innovations in solar panel technology, from thin-film to bifacial panels and beyond.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    category: "Technology",
    date: "April 12, 2025",
    author: "David Wilson",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "How to Maintain Your Solar System for Maximum Efficiency",
    excerpt: "Regular maintenance of your solar panels can significantly improve their lifespan and efficiency. Learn our top maintenance tips.",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
    category: "Maintenance",
    date: "April 5, 2025",
    author: "Amanda Patel",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Solar Installation: DIY vs Professional",
    excerpt: "Can you install solar panels yourself? We compare the pros and cons of DIY installation versus hiring professionals.",
    image: "https://images.unsplash.com/photo-1636491293452-18b39c0bbf7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    category: "Installation",
    date: "March 28, 2025",
    author: "Robert Garcia",
    readTime: "5 min read"
  }
];

const categories = [
  "All", "Technology", "Economics", "Policy", "Installation", "Maintenance"
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-yellow-50 opacity-80 z-0"></div>
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="mb-4 flex justify-center">
              <div className="bg-white/50 backdrop-blur-sm p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-solar-blue" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Solar Energy Insights & News
            </h1>
            <p className="text-xl text-zinc-600 mb-8">
              Stay updated with the latest solar technologies, industry trends, and useful tips
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                placeholder="Search articles..." 
                className="border-2 border-zinc-200 focus:border-solar-blue"
              />
              <Button>
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container px-4 mx-auto">
        <div className="mb-10">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              <TabsList className="bg-zinc-100">
                {categories.slice(0, 5).map((category) => (
                  <TabsTrigger key={category} value={category} className="data-[state=active]:bg-white">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter(post => category === "All" || post.category === category)
                    .map((post) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                            />
                          </div>
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {post.author}
                              </span>
                            </div>
                            <CardTitle className="line-clamp-2 hover:text-solar-blue transition-colors">
                              <Link to={`/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-2 mt-1">
                              {post.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1">
                            <p className="text-muted-foreground text-sm">
                              {post.readTime}
                            </p>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Link to={`/blog/${post.id}`}>
                              <Button variant="ghost" className="gap-2 hover:bg-blue-50 group">
                                Read More 
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Featured Article */}
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1592833167498-d1a8597a2436?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Solar Innovation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Solar Innovation: What's Coming in the Next Decade</h3>
                <p className="text-zinc-600 mb-4">
                  The solar industry is evolving rapidly with new technologies promising higher efficiencies
                  and lower costs. From perovskite cells to solar windows, we explore the innovations
                  that could revolutionize renewable energy.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-zinc-500" />
                    <span className="text-sm">Dr. Emily Carter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-zinc-500" />
                    <span className="text-sm">May 4, 2025</span>
                  </div>
                </div>
                <Link to="/blog/featured">
                  <Button className="gap-2">
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Stay Informed</h3>
              <p className="mb-6">
                Subscribe to our newsletter to receive the latest solar news, technology updates, and exclusive content
                directly to your inbox.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="max-w-xs border-2 border-zinc-200 focus:border-solar-blue"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <Book className="h-6 w-6 text-solar-blue" />
                  <h4 className="font-bold">What You'll Get</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-solar-yellow"></div>
                    <span>Monthly solar technology updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-solar-yellow"></div>
                    <span>Expert analysis and market trends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-solar-yellow"></div>
                    <span>Exclusive guides and resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-solar-yellow"></div>
                    <span>Special offers and event invitations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-5 w-5 text-zinc-600" />
            <h3 className="text-xl font-bold">Popular Tags</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Solar Panels", "Renewable Energy", "Battery Storage", "Solar Tax Credits", 
              "Net Metering", "California Solar", "DIY Solar", "Solar ROI", 
              "Solar Technology", "Green Energy"].map((tag) => (
              <Button key={tag} variant="outline" size="sm" className="rounded-full">
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
