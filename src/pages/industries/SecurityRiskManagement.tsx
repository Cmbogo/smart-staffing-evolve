import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SecurityRiskManagement = () => {
  useEffect(() => {
    document.title = 'Security & Risk Management HR Solutions | Smart Staffing Kenya';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Specialist HR, staffing, and workforce solutions for security, risk management, and security hardware sectors across East Africa. Serving guard forces, secure print, fraud prevention, and compliance teams.');
  }, []);

  const capabilities = [
    {
      title: 'Guard Force & Physical Security Staffing',
      body: 'We recruit, vet, and place security officers, site supervisors, and operations managers with verified backgrounds and the discipline the role demands.',
    },
    {
      title: 'Security Hardware & Technology Talent',
      body: 'We source engineers, technicians, and solutions specialists for organizations delivering CCTV, access control, biometrics, and integrated security systems.',
    },
    {
      title: 'Secure Print & Document Security',
      body: 'We staff for organizations that design and deliver secure printing products, services, and solutions across business and government sectors — putting them at the forefront of security print, fraud prevention, and anti-counterfeiting technology.',
    },
    {
      title: 'Compliance & Risk Advisory Talent',
      body: 'We place risk managers, compliance leads, and regulatory affairs professionals who can navigate complex frameworks and build cultures of accountability.',
    },
    {
      title: 'HR Systems for Security Operations',
      body: 'We design the workforce frameworks, shift structures, vetting protocols, and performance management systems that bring discipline and auditability to security operations.',
    },
    {
      title: 'Training & Competency Development',
      body: 'Working with your operations leads, we develop competency frameworks and training structures that standardize performance across large, distributed security teams.',
    },
  ];

  const clientTypes = [
    'Manned guarding and patrol companies',
    'Electronic security system integrators',
    'Secure print and document authentication firms',
    'Government security agencies',
    'Banking and financial sector security divisions',
    'Anti-counterfeiting and fraud prevention companies',
    'Risk consulting and advisory firms',
    'Corporate security departments',
  ];

  const roles = [
    'Security Officers & Supervisors',
    'Risk Managers & Analysts',
    'Compliance Officers',
    'Operations Directors',
    'Security Systems Engineers',
    'Secure Print Technicians',
    'Fraud Prevention Specialists',
    'CCTV & Access Control Technicians',
    'HSE Officers',
    'Document Security Specialists',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ── Hero ── */}
        <section
          className="section-padding"
          style={{ background: '#1A3A2A' }}
          aria-label="Security & Risk Management hero"
        >
          <div className="site-container">
            <div className="max-w-3xl">
              <Link
                to="/industries"
                className="font-sans text-xs uppercase tracking-widest text-[#C9B99A] hover:text-white transition-colors duration-150 inline-flex items-center gap-2 mb-6"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                All Industries
              </Link>
              <span className="section-label" style={{ color: '#C9B99A' }}>Industry 01</span>
              <h1
                className="font-display font-bold text-white mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
              >
                Security &amp; Risk Management
              </h1>
              <p className="font-sans text-white/70 text-lg leading-relaxed max-w-2xl">
                Workforce solutions for guard forces, security technology firms, secure print operations, and compliance-driven risk functions across East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sector overview ── */}
        <section className="section-padding bg-[#F9F8F6]" aria-label="Sector context">
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-label">The Challenge</span>
                <h2
                  className="font-display font-bold text-[#0D0D0D] mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}
                >
                  Security demands people you can trust — and systems that prove it.
                </h2>
                <p className="font-sans text-[#6B7063] leading-relaxed mb-4">
                  High turnover, inconsistent vetting, and unclear command structures create persistent exposure in security operations. In high-stakes sectors — from government security print to physical guarding of critical infrastructure — the margin for an HR failure is zero.
                </p>
                <p className="font-sans text-[#6B7063] leading-relaxed mb-4">
                  We work with security companies, security hardware integrators, and organizations that design and deliver secure printing products, services, and solutions across multiple business and government sectors. These clients operate at the forefront of security print, fraud prevention, and anti-counterfeiting technology — and they need people who match that standard.
                </p>
                <p className="font-sans text-[#6B7063] leading-relaxed">
                  We build the HR systems and workforce plans that bring discipline, auditability, and reliability to security operations — whether you run a guard force, a surveillance installation team, or a document authentication unit.
                </p>
              </div>

              {/* Client types */}
              <div className="ss-card p-8">
                <p className="section-label mb-4">Organizations We Serve</p>
                <ul className="flex flex-col gap-3">
                  {clientTypes.map((type) => (
                    <li key={type} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 flex-shrink-0 block rounded-full"
                        style={{ width: '6px', height: '6px', background: '#C9B99A' }}
                        aria-hidden="true"
                      />
                      <span className="font-sans text-sm text-[#0D0D0D]">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section className="section-padding bg-white" aria-label="What we deliver">
          <div className="site-container">
            <div className="mb-12">
              <span className="section-label">What We Deliver</span>
              <h2
                className="font-display font-bold text-[#0D0D0D]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, maxWidth: '520px' }}
              >
                Our capabilities in security HR.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="ss-card p-6 flex flex-col gap-3">
                  <span
                    className="font-display font-bold text-[#C9B99A]"
                    style={{ fontSize: '1.5rem', lineHeight: 1 }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="font-display font-bold text-[#0D0D0D]"
                    style={{ fontSize: '1.1rem', lineHeight: 1.2 }}
                  >
                    {cap.title}
                  </h3>
                  <p className="font-sans text-sm text-[#6B7063] leading-relaxed">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roles we place ── */}
        <section className="section-padding bg-[#F9F8F6]" aria-label="Roles we place">
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="section-label">Typical Roles</span>
                <h2
                  className="font-display font-bold text-[#0D0D0D] mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}
                >
                  Roles we recruit and place in security.
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {roles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-4 py-3"
                      style={{ borderBottom: '1px solid #E5E0D8' }}
                    >
                      <span
                        className="block flex-shrink-0"
                        style={{ width: '24px', height: '1px', background: '#C9B99A' }}
                        aria-hidden="true"
                      />
                      <span className="font-sans text-sm text-[#0D0D0D]">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '3rem' }}>
                <div
                  className="p-8"
                  style={{ background: '#1A3A2A' }}
                >
                  <p
                    className="font-display font-bold text-white mb-4"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.2 }}
                  >
                    Working in secure print and fraud prevention?
                  </p>
                  <p className="font-sans text-white/70 text-sm leading-relaxed mb-6">
                    We understand the intersection of physical security, technology, and document integrity. Our HR solutions are calibrated for organizations whose work depends on absolute precision and verified personnel.
                  </p>
                  <Link
                    to="/contact"
                    id="security-page-cta"
                    className="btn-primary"
                    style={{ background: '#C9B99A', borderColor: '#C9B99A', color: '#0D0D0D' }}
                  >
                    Start a Conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-white py-20" style={{ borderTop: '1px solid #E5E0D8' }}>
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">Work With Us</span>
                <h2
                  className="font-display font-bold text-[#0D0D0D]"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}
                >
                  Tell us about your security workforce challenge.
                </h2>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <p className="font-sans text-[#6B7063] leading-relaxed">
                  Every engagement starts with understanding your specific context. The conversation is free, and there is no obligation.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link to="/contact" id="security-bottom-cta" className="btn-primary">Talk to Us</Link>
                  <Link to="/industries" className="btn-secondary">All Industries</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityRiskManagement;
