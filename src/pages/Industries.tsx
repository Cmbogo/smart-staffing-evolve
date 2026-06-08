import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const industries = [
  {
    number: "01",
    name: "Security & Risk Management",
    descriptor: "Staffing for guard forces, risk officers, and compliance teams",
    challenge: "High turnover, inconsistent vetting, and unclear command structures create persistent risk. We build the HR systems and workforce plans that bring discipline to security operations.",
    roles: "Security Officers, Risk Managers, Compliance Leads, Operations Supervisors",
  },
  {
    number: "02",
    name: "Banking & Financial Services",
    descriptor: "HR frameworks for regulated, high-stakes financial institutions",
    challenge: "Regulated environments demand both precision and speed in hiring and performance management. We design frameworks that hold up to audit and keep talent pipelines clear.",
    roles: "Relationship Managers, Credit Analysts, Branch Managers, Compliance Officers",
  },
  {
    number: "03",
    name: "Healthcare & Pharmaceuticals",
    descriptor: "People strategy for hospitals, clinics, and pharma operations",
    challenge: "Clinical talent is scarce, retention is difficult, and the margin for error is zero. We bring structure to healthcare HR without adding bureaucracy.",
    roles: "Clinical Officers, Nurses, Pharmacists, Hospital Administrators",
  },
  {
    number: "04",
    name: "Hospitality & Tourism",
    descriptor: "Workforce planning for hotels, lodges, and travel businesses",
    challenge: "Seasonal demand, thin margins, and high expectations from guests put constant pressure on teams. We build workforce structures that flex without breaking.",
    roles: "Front Office Managers, F&B Supervisors, Guest Relations, Housekeeping Leads",
  },
  {
    number: "05",
    name: "Manufacturing & Logistics",
    descriptor: "Shift-based staffing and labour compliance for production floors",
    challenge: "Managing large shift-based workforces requires clear accountability and consistent labour practice. We design the HR operating models that keep production moving.",
    roles: "Production Supervisors, Logistics Coordinators, Safety Officers, Quality Leads",
  },
  {
    number: "06",
    name: "NGOs & Development Sector",
    descriptor: "Talent and HR systems for mission-driven organisations",
    challenge: "Donor-funded organizations often operate without the HR infrastructure their size demands. We build systems that match the mission and satisfy the compliance requirements.",
    roles: "Programme Officers, M&E Specialists, Finance Managers, Country Directors",
  },
  {
    number: "07",
    name: "Retail & FMCG",
    descriptor: "High-volume recruitment and performance management at scale",
    challenge: "Recruiting at volume without losing quality, and managing performance across distributed teams, requires specific systems. We build those systems.",
    roles: "Area Managers, Sales Representatives, Store Supervisors, Merchandisers",
  },
  {
    number: "08",
    name: "Technology & Telecoms",
    descriptor: "Attracting and retaining skilled technical talent",
    challenge: "Technical talent is competitive and mobile. We help organizations compete on culture and clarity of role, not just compensation.",
    roles: "Software Engineers, Network Technicians, Product Managers, IT Operations",
  },
  {
    number: "09",
    name: "Construction & Real Estate",
    descriptor: "Project-based workforce structures and site HR management",
    challenge: "Project timelines, site safety, and contract labour compliance create distinct HR demands. We structure the workforce around the project, not the other way around.",
    roles: "Project Managers, Site Engineers, Quantity Surveyors, HSE Officers",
  },
];

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero — dark green */}
        <section
          className="section-padding"
          style={{ background: '#1A3A2A' }}
          aria-label="Industries hero"
        >
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="section-label" style={{ color: '#C9B99A' }}>Industries</span>
              <h1
                className="font-display font-bold text-white mb-6"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.025em',
                }}
              >
                The industries we serve.
              </h1>
              <p className="font-sans text-white/70 text-xl leading-relaxed max-w-2xl">
                Nine sectors across East Africa. Each with its own workforce dynamics,
                compliance requirements, and people challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Industries list */}
        <section className="bg-[#F9F8F6] section-padding" aria-label="Industries list">
          <div className="site-container">
            <div className="flex flex-col divide-y divide-[#E5E0D8]">
              {industries.map((industry) => (
                <div
                  key={industry.number}
                  className="py-12 grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 items-start group hover:bg-white transition-colors duration-150 px-0 md:px-4 -mx-4"
                >
                  {/* Number */}
                  <p
                    className="font-display font-bold text-[#C9B99A]"
                    style={{ fontSize: '2rem', lineHeight: 1 }}
                  >
                    {industry.number}
                  </p>

                  {/* Name + descriptor */}
                  <div>
                    <h2
                      className="font-display font-bold text-[#0D0D0D] mb-2"
                      style={{ fontSize: '1.35rem', lineHeight: '1.2' }}
                    >
                      {industry.name}
                    </h2>
                    <p className="font-sans text-sm text-[#6B7063] mb-4">{industry.descriptor}</p>
                    <p className="font-sans text-xs text-[#C9B99A] uppercase tracking-widest mb-1">Typical roles</p>
                    <p className="font-sans text-sm text-[#6B7063]">{industry.roles}</p>
                  </div>

                  {/* Challenge */}
                  <p className="font-sans text-sm text-[#6B7063] leading-relaxed hidden md:block">
                    {industry.challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20" style={{ borderTop: '1px solid #E5E0D8' }}>
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">Work With Us</span>
                <h2
                  className="font-display font-bold text-[#0D0D0D]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}
                >
                  Tell us about your sector. We will tell you how we can help.
                </h2>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <p className="font-sans text-[#6B7063] leading-relaxed">
                  Every engagement starts with understanding your specific context.
                  The conversation is free, and there is no obligation.
                </p>
                <Link to="/contact" id="industries-talk-cta" className="btn-primary">
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
