import { Link } from 'react-router-dom';

const Footer = () => {
  const serviceLinks = [
    "Organizational Transformation",
    "Culture & Leadership",
    "Strategy Execution",
    "Employee Engagement",
    "HR Systems & Policies",
    "HR Audits & Compliance",
    "Talent Acquisition",
  ];

  const industryLinks = [
    "Security Document Printing",
    "Banking & Financial Services",
    "Healthcare & Pharmaceuticals",
    "Hospitality & Tourism",
    "Manufacturing & Logistics",
    "NGOs & Development Sector",
    "Retail & FMCG",
    "Technology & Telecoms",
    "Construction & Real Estate",
  ];

  return (
    <footer style={{ background: '#0D2B1A' }} aria-label="Site footer">
      <div className="site-container pt-16 pb-8">

        {/* 4-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* Col 1: Logo + tagline */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Smart Staffing home">
              <img
                src="/lovable-uploads/14e992c7-b62d-4a7c-8474-48692bdaad6d.png"
                alt="Smart Staffing & Management Consultancy"
                width={140}
                height={56}
                loading="lazy"
                className="h-12 w-auto object-contain mb-5"
              />
            </Link>
            <p
              className="font-display italic text-white/60 leading-relaxed"
              style={{ fontSize: '1rem' }}
            >
              Empowering organizations through strategic human capital management.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#C9B99A] mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#C9B99A] mb-5">
              Industries
            </p>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/industries"
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#C9B99A] mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-sm text-white/60">0716 857 000</p>
              <div>
                <a
                  href="mailto:Info@smartstaffingke.com"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  Info@smartstaffingke.com
                </a>
                <a
                  href="mailto:EMwangi@smartstaffingke.com"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors block"
                >
                  EMwangi@smartstaffingke.com
                </a>
              </div>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Riverside Close, Riverside Drive<br />
                Nairobi, Kenya
              </p>
              <a
                href="https://www.smartstaffingke.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/60 hover:text-white transition-colors"
              >
                www.smartstaffingke.com
              </a>
            </div>
          </div>

        </div>

        {/* Stone divider + copyright */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid #C9B99A' }}
        >
          <p className="font-sans text-xs text-white/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} Smart Staffing and Management Consultancy Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors">
              Contact
            </Link>
            <Link to="/careers" className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors">
              Careers
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
