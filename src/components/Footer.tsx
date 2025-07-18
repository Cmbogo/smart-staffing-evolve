
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/14e992c7-b62d-4a7c-8474-48692bdaad6d.png" 
                alt="Smart Staffing Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm opacity-90 mb-4">
              Empowering organizations through strategic human capital management.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>0716857000</p>
              <p>Info@smartstaffingke.com</p>
              <p>Riverside Drive, Nairobi</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2025 Smart Staffing and Management Consultancy Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
