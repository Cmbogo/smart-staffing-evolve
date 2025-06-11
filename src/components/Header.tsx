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
        <nav className="flex items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/14e992c7-b62d-4a7c-8474-48692bdaad6d.png" 
              alt="Smart Staffing Logo" 
              className="h-16 w-auto object-contain"
            />
          </Link>
          
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-16">
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
          
          {/* Right spacer for mobile balance */}
          <div className="w-16 md:w-0"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
