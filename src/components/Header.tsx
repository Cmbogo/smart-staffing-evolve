
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-center py-2 text-sm text-muted-foreground border-b">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>0705766772 / 0716857000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Info@smartstaffingke.com</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e67ca8da-a734-4de7-b67f-20e6e5a3dce2" 
              alt="Smart Staffing Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="font-bold text-lg text-primary">Smart Staffing</h1>
              <p className="text-xs text-muted-foreground">Management Consultancy</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-16">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">About</Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">Services</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</Link>
            </div>
          </div>
          
          <button className="md:hidden">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </div>
          </button>
          
          {/* Spacer to balance the logo on the left */}
          <div className="hidden md:block w-[200px]"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
