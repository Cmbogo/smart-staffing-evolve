
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-foreground text-primary p-2 rounded-lg">
                <span className="font-bold text-xl">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Smart Staffing</h3>
                <p className="text-sm opacity-90">Management Consultancy</p>
              </div>
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
              <p>0705766772 / 0716857000</p>
              <p>Info@smartstaffingke.com</p>
              <p>Riverside Drive, Nairobi</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Network</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Part of the CreekOxley brand</p>
              <p>Business Management Consultants</p>
              <a 
                href="https://creekoxley.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary-foreground transition-colors underline"
              >
                creekoxley.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2025 Smart Staffing and Management Consultancy Ltd. All rights reserved.
          </p>
          <p className="text-xs opacity-75 mt-2">
            A CreekOxley Business Management Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
