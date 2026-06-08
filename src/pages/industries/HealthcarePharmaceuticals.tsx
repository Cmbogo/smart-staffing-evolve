import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const data = {
  number: '03', slug: 'healthcare-pharmaceuticals',
  title: 'Healthcare & Pharmaceuticals',
  metaTitle: 'Healthcare & Pharmaceuticals HR Solutions | Smart Staffing Kenya',
  metaDesc: 'Specialist HR and staffing solutions for hospitals, clinics, and pharmaceutical companies across East Africa. Clinical talent recruitment with zero margin for error.',
  sub: 'People strategy for hospitals, clinics, and pharmaceutical operations where the margin for error is zero.',
  challenge: { heading: 'Clinical talent is scarce. Retention is hard. Standards are non-negotiable.', body: 'The healthcare sector in East Africa operates under intense pressure — clinical staff shortages, high turnover in nursing, and evolving regulatory standards set by bodies like the Kenya Medical Practitioners and Dentists Council. We bring structure to healthcare HR without adding bureaucracy, placing professionals who are both qualified and committed.' },
  capabilities: [
    { title: 'Clinical Recruitment', body: 'We source and vet doctors, nurses, clinical officers, and allied health professionals with verified credentials and licensing status.' },
    { title: 'Hospital Administration', body: 'We place hospital administrators, finance managers, and operations leads with the systems thinking to run complex healthcare environments.' },
    { title: 'Pharmaceutical Talent', body: 'Regulatory affairs officers, pharmacists, and medical sales representatives placed with the scientific and compliance grounding the industry demands.' },
    { title: 'HR Policy & Job Evaluation', body: 'We design grading structures and remuneration frameworks that comply with healthcare sector norms and keep you competitive in a tight talent market.' },
    { title: 'Locum & Contract Staffing', body: 'Flexible solutions for covering short-term clinical gaps without compromising care standards or administrative continuity.' },
    { title: 'Training & Competency Mapping', body: 'We map clinical and administrative competencies against role requirements and design structured development plans.' },
  ],
  roles: ['Clinical Officers', 'Registered Nurses', 'Pharmacists', 'Hospital Administrators', 'Medical Officers', 'Lab Technologists', 'Radiographers', 'Medical Sales Reps', 'Finance & Procurement Managers', 'Health Records Officers'],
  clients: ['Private hospitals & clinics', 'Public health institutions', 'Pharmaceutical manufacturers', 'Medical device distributors', 'NGO health programmes', 'Diagnostic laboratories', 'Dental & specialist practices', 'Community health organizations'],
};

const HealthcarePharmaceuticals = () => {
  useEffect(() => {
    document.title = data.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', data.metaDesc);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section-padding" style={{ background: '#1A3A2A' }}>
          <div className="site-container"><div className="max-w-3xl">
            <Link to="/industries" className="font-sans text-xs uppercase tracking-widest text-[#C9B99A] hover:text-white transition-colors inline-flex items-center gap-2 mb-6">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>All Industries
            </Link>
            <span className="section-label" style={{ color: '#C9B99A' }}>Industry {data.number}</span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}>{data.title}</h1>
            <p className="font-sans text-white/70 text-lg leading-relaxed max-w-2xl">{data.sub}</p>
          </div></div>
        </section>
        <section className="section-padding bg-[#F9F8F6]">
          <div className="site-container"><div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">The Challenge</span>
              <h2 className="font-display font-bold text-[#0D0D0D] mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>{data.challenge.heading}</h2>
              <p className="font-sans text-[#6B7063] leading-relaxed">{data.challenge.body}</p>
            </div>
            <div className="ss-card p-8">
              <p className="section-label mb-4">Organizations We Serve</p>
              <ul className="flex flex-col gap-3">{data.clients.map((c) => (<li key={c} className="flex items-start gap-3"><span className="mt-1.5 flex-shrink-0 block rounded-full" style={{ width: '6px', height: '6px', background: '#C9B99A' }} /><span className="font-sans text-sm text-[#0D0D0D]">{c}</span></li>))}</ul>
            </div>
          </div></div>
        </section>
        <section className="section-padding bg-white">
          <div className="site-container">
            <div className="mb-12"><span className="section-label">What We Deliver</span><h2 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, maxWidth: '520px' }}>Our capabilities in healthcare HR.</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{data.capabilities.map((cap, i) => (<div key={i} className="ss-card p-6 flex flex-col gap-3"><span className="font-display font-bold text-[#C9B99A]" style={{ fontSize: '1.5rem', lineHeight: 1 }}>0{i + 1}</span><h3 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize: '1.1rem', lineHeight: 1.2 }}>{cap.title}</h3><p className="font-sans text-sm text-[#6B7063] leading-relaxed">{cap.body}</p></div>))}</div>
          </div>
        </section>
        <section className="section-padding bg-[#F9F8F6]">
          <div className="site-container">
            <span className="section-label">Typical Roles</span>
            <h2 className="font-display font-bold text-[#0D0D0D] mb-8" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>Roles we recruit in healthcare.</h2>
            <div className="grid md:grid-cols-2 gap-3 max-w-2xl">{data.roles.map((r) => (<div key={r} className="flex items-center gap-4 py-3" style={{ borderBottom: '1px solid #E5E0D8' }}><span className="block flex-shrink-0" style={{ width: '24px', height: '1px', background: '#C9B99A' }} /><span className="font-sans text-sm text-[#0D0D0D]">{r}</span></div>))}</div>
          </div>
        </section>
        <section className="bg-white py-20" style={{ borderTop: '1px solid #E5E0D8' }}>
          <div className="site-container"><div className="grid lg:grid-cols-2 gap-12 items-center">
            <div><span className="section-label">Work With Us</span><h2 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>Tell us about your healthcare workforce challenge.</h2></div>
            <div className="flex flex-col gap-4 items-start"><p className="font-sans text-[#6B7063] leading-relaxed">Every engagement starts with understanding your specific context. The conversation is free, and there is no obligation.</p><div className="flex gap-4 flex-wrap"><Link to="/contact" id="healthcare-cta" className="btn-primary">Talk to Us</Link><Link to="/industries" className="btn-secondary">All Industries</Link></div></div>
          </div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default HealthcarePharmaceuticals;
