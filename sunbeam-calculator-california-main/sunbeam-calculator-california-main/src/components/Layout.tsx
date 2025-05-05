
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { User, LogIn, Sun, Calculator, DollarSign, Users, FileText, InfoIcon } from 'lucide-react';

const Layout: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-border">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link to="/" className="font-mono text-xl font-bold flex items-center gap-2">
                <Sun className="h-6 w-6" />
                <span>Sunalyzer</span>
              </Link>
              <nav className="hidden md:flex items-center gap-4">
                <Link to="/" className="text-sm font-medium hover:text-primary">
                  Calculator
                </Link>
                <Link to="/pricing" className="text-sm font-medium hover:text-primary">
                  Pricing
                </Link>
                <Link to="/saas-plans" className="text-sm font-medium hover:text-primary">
                  SaaS Plans
                </Link>
                <Link to="/service-plans" className="text-sm font-medium hover:text-primary">
                  Service Plans
                </Link>
                <Link to="/about" className="text-sm font-medium hover:text-primary">
                  About
                </Link>
                <Link to="/blog" className="text-sm font-medium hover:text-primary">
                  Blog
                </Link>
                {isAuthenticated && (
                  <>
                    <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
                      Dashboard
                    </Link>
                    <Link to="/saved-calculations" className="text-sm font-medium hover:text-primary">
                      Saved Calculations
                    </Link>
                    <Link to="/installers" className="text-sm font-medium hover:text-primary">
                      Find Installers
                    </Link>
                  </>
                )}
              </nav>
            </div>
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <Link to="/profile">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {user?.name || 'Profile'}
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={() => logout()}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="default" size="sm">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="py-6 border-t border-border bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
            <div>
              <h3 className="font-medium mb-3">Sunalyzer</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/saas-plans" className="text-sm text-muted-foreground hover:text-primary">SaaS Plans</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">Solar Calculator</Link></li>
                <li><Link to="/service-plans" className="text-sm text-muted-foreground hover:text-primary">Service Plans</Link></li>
                <li><Link to="/installers" className="text-sm text-muted-foreground hover:text-primary">Find Installers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Account</h3>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-sm text-muted-foreground hover:text-primary">Login</Link></li>
                <li><Link to="/register" className="text-sm text-muted-foreground hover:text-primary">Register</Link></li>
                {isAuthenticated && (
                  <li><Link to="/profile" className="text-sm text-muted-foreground hover:text-primary">Profile</Link></li>
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border">
            <p>Sunalyzer Solar Energy Calculator</p>
            <p className="mt-1">© {new Date().getFullYear()} | All calculations are estimates and may vary based on actual conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
