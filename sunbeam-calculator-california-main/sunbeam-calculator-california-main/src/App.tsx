
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import PricingPage from "./pages/PricingPage";
import Profile from "./pages/Profile";
import SavedCalculations from "./pages/SavedCalculations";
import InstallerDirectory from "./pages/InstallerDirectory";
import InstallerRegistration from "./pages/InstallerRegistration";
import ServicePlans from "./pages/ServicePlans";
import BasicMaintenancePlan from "./pages/BasicMaintenancePlan";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import SaasPlans from "./pages/SaasPlans";
import { useEffect } from "react";

// Initialize AdSense
const initializeAdsense = () => {
  const script = document.createElement('script');
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.dataset.adClient = 'ca-pub-XXXXXXXXXXXXXXXX'; // Replace with your AdSense publisher ID
  document.head.appendChild(script);
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize AdSense when the app loads
    initializeAdsense();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/service-plans" element={<ServicePlans />} />
                <Route path="/service-plans/basic" element={<BasicMaintenancePlan />} />
                <Route path="/saas-plans" element={<SaasPlans />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/about" element={<About />} />
                <Route path="/installers/register" element={<InstallerRegistration />} />
                
                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/saved-calculations" element={<SavedCalculations />} />
                  <Route path="/installers" element={<InstallerDirectory />} />
                </Route>
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
