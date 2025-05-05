
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to Sunalyzer ("we", "our", or "us"). We respect your privacy and are committed to protecting 
              your personal data. This privacy policy will inform you about how we look after your personal data when 
              you visit our website and tell you about your privacy rights.
            </p>
            
            <h2>2. The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you including:
            </p>
            <ul>
              <li>Identity Data such as name and username</li>
              <li>Contact Data such as email address and phone number</li>
              <li>Technical Data such as IP address, browser information, and device information</li>
              <li>Usage Data such as information about how you use our website and services</li>
            </ul>
            
            <h2>3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>To provide you with our solar calculation services</li>
              <li>To improve our website and user experience</li>
              <li>To communicate with you about our services</li>
              <li>To comply with legal obligations</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way, altered, or disclosed.
            </p>
            
            <h2>5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h2>6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Request restriction of processing your personal data</li>
            </ul>
            
            <h2>7. Changes to the Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the "last updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              privacy@sunalyzer.com
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Privacy;
