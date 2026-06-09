import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const industries = [
  {
    name: "Security Document Printing",
    descriptor: "HR solutions for secure print, document authentication, and fraud prevention firms",
    slug: "security-risk-management",
  },
  {
    name: "Banking & Financial Services",
    descriptor: "HR frameworks for regulated, high-stakes financial institutions",
    slug: "banking-financial-services",
  },
  {
    name: "Healthcare & Pharmaceuticals",
    descriptor: "People strategy for hospitals, clinics, and pharma operations",
    slug: "healthcare-pharmaceuticals",
  },
  {
    name: "Hospitality & Tourism",
    descriptor: "Workforce planning for hotels, lodges, and travel businesses",
    slug: "hospitality-tourism",
  },
  {
    name: "Manufacturing & Logistics",
    descriptor: "Shift-based staffing and labour compliance for production floors",
    slug: "manufacturing-logistics",
  },
  {
    name: "NGOs & Development Sector",
    descriptor: "Talent and HR systems for mission-driven organisations",
    slug: "ngos-development",
  },
  {
    name: "Retail & FMCG",
    descriptor: "High-volume recruitment and performance management at scale",
    slug: "retail-fmcg",
  },
  {
    name: "Technology & Telecoms",
    descriptor: "Attracting and retaining skilled technical talent",
    slug: "technology-telecoms",
  },
  {
    name: "Construction & Real Estate",
    descriptor: "Project-based workforce structures and site HR management",
    slug: "construction-real-estate",
  },
];

// Each industry's full URL path
const industryPath = (slug: string) => `/industries/${slug}`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileIndustriesOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `relative font-sans text-sm font-medium tracking-wide transition-colors duration-150 ${
      isActive(path)
        ? 'text-[#1A3A2A]'
        : 'text-[#0D0D0D] hover:text-[#1A3A2A]'
    }`;

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'border-b-2 border-[#1A3A2A] shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="site-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Smart Staffing home">
            <img
              src="/lovable-uploads/14e992c7-b62d-4a7c-8474-48692bdaad6d.png"
              alt="Smart Staffing &amp; Management Consultancy"
              width={160}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/services" className={navLinkClass('/services')}>Services</Link>

            {/* Industries with dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/industries"
                className={`${navLinkClass('/industries')} flex items-center gap-1`}
              >
                Industries
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`ml-0.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Dropdown panel */}
              <div
                className={`industries-dropdown ${dropdownOpen ? 'open' : ''}`}
                role="menu"
                aria-label="Industries menu"
              >
                <div className="p-6">
                  <p className="section-label mb-4">Industries We Serve</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        to={industryPath(industry.slug)}
                        className="group"
                        role="menuitem"
                      >
                        <p className="font-sans text-sm font-500 text-[#0D0D0D] group-hover:text-[#1A3A2A] transition-colors duration-150 leading-tight mb-0.5">
                          {industry.name}
                        </p>
                        <p className="font-sans text-xs text-[#6B7063] leading-snug">
                          {industry.descriptor}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            <Link to="/careers" className={navLinkClass('/careers')}>Careers</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
          </div>

          {/* CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              id="nav-talk-to-us"
              className="hidden lg:inline-flex btn-primary text-sm py-3 px-6"
            >
              Talk to Us
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
            >
              <span
                className={`block w-6 h-0.5 bg-[#0D0D0D] transition-all duration-200 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#0D0D0D] transition-opacity duration-200 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#0D0D0D] transition-all duration-200 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E0D8]">
          <div className="site-container py-6 flex flex-col gap-4">
            <Link to="/" className="font-sans text-base font-medium text-[#0D0D0D] py-2 border-b border-[#E5E0D8]">
              Home
            </Link>
            <Link to="/services" className="font-sans text-base font-medium text-[#0D0D0D] py-2 border-b border-[#E5E0D8]">
              Services
            </Link>

            {/* Mobile Industries accordion */}
            <div className="border-b border-[#E5E0D8]">
              <button
                className="w-full flex items-center justify-between font-sans text-base font-medium text-[#0D0D0D] py-2"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              >
                Industries
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileIndustriesOpen && (
                <div className="pb-3 pl-2 flex flex-col gap-3">
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      to={industryPath(industry.slug)}
                      className="font-sans text-sm text-[#1A3A2A]"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="font-sans text-base font-medium text-[#0D0D0D] py-2 border-b border-[#E5E0D8]">
              About
            </Link>
            <Link to="/careers" className="font-sans text-base font-medium text-[#0D0D0D] py-2 border-b border-[#E5E0D8]">
              Careers
            </Link>
            <Link to="/contact" className="font-sans text-base font-medium text-[#0D0D0D] py-2 border-b border-[#E5E0D8]">
              Contact
            </Link>
            <Link to="/contact" className="btn-primary self-start mt-2">
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
