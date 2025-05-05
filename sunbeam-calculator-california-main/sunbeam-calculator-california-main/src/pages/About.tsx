
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Sun, Users, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">About Sunalyzer</h1>
          <p className="text-xl text-muted-foreground">
            Empowering the world with solar energy knowledge since 2023
          </p>
        </motion.div>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-muted-foreground">
                  At Sunalyzer, our mission is to demystify solar energy and make it accessible to everyone. 
                  We provide accurate, user-friendly tools that help individuals and businesses understand 
                  the benefits and potential of solar power for their specific needs.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                <p className="text-muted-foreground">
                  We envision a world powered by renewable energy, where every home and business can harness 
                  the power of the sun. By providing accessible solar calculation tools, we aim to accelerate 
                  the global transition to sustainable energy sources.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-yellow-100 to-blue-100 h-full p-6">
              <div className="mb-8">
                <motion.div 
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                >
                  <Sun className="h-8 w-8 text-solar-yellow" />
                </motion.div>
                <h3 className="text-xl font-bold text-center mb-2">Expert Calculations</h3>
                <p className="text-center text-muted-foreground">
                  Our calculations are based on real-world data and industry-standard methodologies, 
                  providing you with reliable estimates for your solar potential.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Global Reach</h3>
                <p className="text-center text-muted-foreground">
                  Our tools are designed to support users worldwide, with data for locations across 
                  every continent to provide accurate solar estimates wherever you are.
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">User Privacy</h3>
                <p className="text-center text-muted-foreground">
                  We respect your privacy and are committed to protecting your data. Your calculations 
                  and personal information remain secure with us.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div 
          className="mt-12 bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Sunalyzer began with a simple question: "How can we make solar energy more accessible and 
            understandable for everyone?" Founded by a team of renewable energy enthusiasts and engineers, 
            we set out to create tools that would help people see the potential of solar energy for their homes 
            and businesses.
          </p>
          <p className="text-muted-foreground mb-4">
            What started as a simple solar calculator has grown into a comprehensive platform offering 
            detailed estimations, educational resources, and connections to certified installers. Our team 
            continues to refine our algorithms and expand our database to provide the most accurate calculations 
            possible.
          </p>
          <p className="text-muted-foreground">
            Today, we're proud to serve users from around the world, helping thousands of households and 
            businesses make informed decisions about solar energy. As the renewable energy landscape evolves, 
            we remain committed to our core mission of making solar accessible to all.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
