
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the Sunalyzer website and services, you agree to be bound by these Terms and Conditions 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
              from using or accessing this site.
            </p>
            
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily use our solar calculation tools and services for personal, 
              non-commercial purposes only. This is the grant of a license, not a transfer of title.
            </p>
            
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Sunalyzer's website are provided on an 'as is' basis. Sunalyzer makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
            
            <h2>4. Solar Calculation Accuracy</h2>
            <p>
              While we strive to provide accurate solar calculations, the estimates provided by our calculators are 
              based on general information and assumptions. Actual solar system performance and costs may vary based 
              on your specific circumstances, local conditions, installation details, and other factors.
            </p>
            
            <h2>5. Limitations</h2>
            <p>
              In no event shall Sunalyzer or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the materials on Sunalyzer's website, even if Sunalyzer or a Sunalyzer authorized representative 
              has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2>6. Revisions and Errata</h2>
            <p>
              The materials appearing on Sunalyzer's website could include technical, typographical, or photographic 
              errors. Sunalyzer does not warrant that any of the materials on its website are accurate, complete or current.
            </p>
            
            <h2>7. Links</h2>
            <p>
              Sunalyzer has not reviewed all of the sites linked to its website and is not responsible for the contents 
              of any such linked site. The inclusion of any link does not imply endorsement by Sunalyzer of the site.
            </p>
            
            <h2>8. Modifications to Terms</h2>
            <p>
              Sunalyzer may revise these terms of service for its website at any time without notice. By using this 
              website you are agreeing to be bound by the then current version of these terms of service.
            </p>
            
            <h2>9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably 
              submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Terms;
