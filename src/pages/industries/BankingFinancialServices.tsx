import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BankingFinancialServices = () => {
  useEffect(() => {
    document.title = 'Banking & Financial Services HR Solutions | Smart Staffing Kenya';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Specialist HR and staffing solutions for banks, SACCOs, microfinance institutions, and financial services firms across East Africa. Precision hiring for regulated environments.');
  }, []);

  const capabilities = [
    { title: 'Regulatory-Compliant Recruitment', body: 'We design hiring processes built around CBK and CMA requirements — background checks, fit-and-proper assessments, and documented due diligence at every stage.' },
    { title: 'Frontline & Branch Talent', body: 'Relationship managers, tellers, and branch managers who carry both the commercial instinct and the compliance rigour the sector demands.' },
    { title: 'Credit & Risk Talent', body: 'Credit analysts, risk officers, and portfolio managers with verifiable sector experience and the ability to operate in high-accountability environments.' },
    { title: 'HR Framework Design', body: 'We build the performance management, grading, and reward structures that keep financial institutions competitive in attracting and retaining skilled people.' },
    { title: 'Executive & Leadership Search', body: 'Discreet searches for C-suite and senior leadership roles — conducted with confidentiality and sector precision.' },
    { title: 'Compliance & Audit Staffing', body: 'Internal auditors, compliance officers, and AML specialists placed with the rigour that financial sector roles require.' },
  ];

  const roles = ['Relationship Managers', 'Credit Analysts', 'Branch Managers', 'Compliance Officers', 'Internal Auditors', 'Treasury Dealers', 'Risk Managers', 'Tellers & Customer Advisors', 'Finance Directors', 'AML Specialists'];
  const clientTypes = ['Commercial banks', 'Microfinance institutions', 'SACCOs', 'Insurance companies', 'Investment firms', 'Payment and fintech companies', 'Development finance institutions', 'Regulatory bodies'];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section-padding" style={{ background: '#1A3A2A' }} aria-label="Banking hero">
          <div className="site-container">
            <div className="max-w-3xl">
              <Link to="/industries" className="font-sans text-xs uppercase tracking-widest text-[#C9B99A] hover:text-white transition-colors duration-150 inline-flex items-center gap-2 mb-6">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                All Industries
              </Link>
              <span className="section-label" style={{ color: '#C9B99A' }}>Industry 02</span>
              <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}>
                Banking &amp; Financial Services
              </h1>
              <p className="font-sans text-white/70 text-lg leading-relaxed max-w-2xl">
                HR and staffing solutions for regulated, high-stakes financial institutions where hiring errors are not an option.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F9F8F6]" aria-label="Sector context">
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-label">The Challenge</span>
                <h2 className="font-display font-bold text-[#0D0D0D] mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>
                  Precision and speed in regulated environments.
                </h2>
                <p className="font-sans text-[#6B7063] leading-relaxed mb-4">
                  Regulated environments demand both precision and speed in hiring and performance management. Financial institutions face intense scrutiny from regulators, shareholders, and the public — and the people they hire directly reflect on that trust.
                </p>
                <p className="font-sans text-[#6B7063] leading-relaxed">
                  We design recruitment and HR frameworks that hold up to audit and keep talent pipelines clear — so you are never left with a critical vacancy or a compliance gap.
                </p>
              </div>
              <div className="ss-card p-8">
                <p className="section-label mb-4">Organizations We Serve</p>
                <ul className="flex flex-col gap-3">
                  {clientTypes.map((type) => (
                    <li key={type} className="flex items-start gap-3">
                      <span className="mt-1.5 flex-shrink-0 block rounded-full" style={{ width: '6px', height: '6px', background: '#C9B99A' }} aria-hidden="true" />
                      <span className="font-sans text-sm text-[#0D0D0D]">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white" aria-label="Capabilities">
          <div className="site-container">
            <div className="mb-12">
              <span className="section-label">What We Deliver</span>
              <h2 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, maxWidth: '520px' }}>Our capabilities in financial services HR.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="ss-card p-6 flex flex-col gap-3">
                  <span className="font-display font-bold text-[#C9B99A]" style={{ fontSize: '1.5rem', lineHeight: 1 }}>0{i + 1}</span>
                  <h3 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize: '1.1rem', lineHeight: 1.2 }}>{cap.title}</h3>
                  <p className="font-sans text-sm text-[#6B7063] leading-relaxed">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F9F8F6]" aria-label="Roles">
          <div className="site-container">
            <span className="section-label">Typical Roles</span>
            <h2 className="font-display font-bold text-[#0D0D0D] mb-8" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>Roles we recruit in financial services.</h2>
            <div className="grid md:grid-cols-2 gap-3 max-w-2xl">
              {roles.map((role) => (
                <div key={role} className="flex items-center gap-4 py-3" style={{ borderBottom: '1px solid #E5E0D8' }}>
                  <span className="block flex-shrink-0" style={{ width: '24px', height: '1px', background: '#C9B99A' }} aria-hidden="true" />
                  <span className="font-sans text-sm text-[#0D0D0D]">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20" style={{ borderTop: '1px solid #E5E0D8' }}>
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">Work With Us</span>
                <h2 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>Tell us about your financial services workforce challenge.</h2>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <p className="font-sans text-[#6B7063] leading-relaxed">Every engagement starts with understanding your specific context. The conversation is free, and there is no obligation.</p>
                <div className="flex gap-4 flex-wrap">
                  <Link to="/contact" id="banking-bottom-cta" className="btn-primary">Talk to Us</Link>
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

export default BankingFinancialServices;
