import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const d = {
  num:'09', title:'Construction & Real Estate',
  metaTitle:'Construction & Real Estate HR Solutions | Smart Staffing Kenya',
  metaDesc:'Project-based workforce structures, site HR management, and specialist recruitment for construction companies and real estate developers across East Africa.',
  sub:'Project-based workforce structures and site HR management for construction companies, developers, and infrastructure projects.',
  challengeH:'Project timelines, site safety, and contract labour compliance create distinct HR demands.',
  challengeB:'Construction and real estate projects in East Africa involve large, often transient workforces assembled under time pressure. Managing contract labour, site safety compliance, and the ramp-up and ramp-down of headcount across project phases requires HR systems built specifically for the sector. We structure the workforce around the project lifecycle — not the other way around.',
  caps:[
    {t:'Project Workforce Structuring',b:'We design the headcount models, contract structures, and ramp-up plans that align your workforce to your project timeline.'},
    {t:'Site & Technical Recruitment',b:'Site engineers, quantity surveyors, project managers, and foremen recruited with verified credentials and relevant site experience.'},
    {t:'HSE Staffing & Compliance',b:'Health, safety, and environment officers placed to manage OSHA compliance, site inductions, and incident reporting frameworks.'},
    {t:'Contract Labour Management',b:'We design the employment frameworks, payroll structures, and contractor management protocols for large casualised workforces.'},
    {t:'Real Estate & Property Talent',b:'Property managers, valuation experts, leasing agents, and facilities managers placed for developers and property management firms.'},
    {t:'HR Systems for Site Operations',b:'Attendance management, leave tracking, and disciplinary frameworks adapted for the realities of multi-site construction operations.'},
  ],
  roles:['Project Managers','Site Engineers','Quantity Surveyors','HSE Officers','Architects & Designers','Civil & Structural Engineers','Property Managers','Facilities Managers','Construction Foremen','Procurement & Contracts Managers'],
  clients:['Property developers','Main contractors','Infrastructure & civil works firms','Government construction agencies','Real estate investment trusts','Facilities management companies','Housing project developers','Specialist subcontractors'],
};

const ConstructionRealEstate = () => {
  useEffect(() => {
    document.title = d.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', d.metaDesc);
  }, []);
  return (
    <div className="min-h-screen"><Header />
      <main>
        <section className="section-padding" style={{ background: '#1A3A2A' }}>
          <div className="site-container"><div className="max-w-3xl">
            <Link to="/industries" className="font-sans text-xs uppercase tracking-widest text-[#C9B99A] hover:text-white transition-colors inline-flex items-center gap-2 mb-6"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>All Industries</Link>
            <span className="section-label" style={{ color: '#C9B99A' }}>Industry {d.num}</span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.025em' }}>{d.title}</h1>
            <p className="font-sans text-white/70 text-lg leading-relaxed max-w-2xl">{d.sub}</p>
          </div></div>
        </section>
        <section className="section-padding bg-[#F9F8F6]">
          <div className="site-container"><div className="grid lg:grid-cols-2 gap-16 items-start">
            <div><span className="section-label">The Challenge</span><h2 className="font-display font-bold text-[#0D0D0D] mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>{d.challengeH}</h2><p className="font-sans text-[#6B7063] leading-relaxed">{d.challengeB}</p></div>
            <div className="ss-card p-8"><p className="section-label mb-4">Organizations We Serve</p><ul className="flex flex-col gap-3">{d.clients.map(c => (<li key={c} className="flex items-start gap-3"><span className="mt-1.5 flex-shrink-0 block rounded-full" style={{ width:'6px',height:'6px',background:'#C9B99A' }} /><span className="font-sans text-sm text-[#0D0D0D]">{c}</span></li>))}</ul></div>
          </div></div>
        </section>
        <section className="section-padding bg-white">
          <div className="site-container">
            <div className="mb-12"><span className="section-label">What We Deliver</span><h2 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, maxWidth:'520px' }}>Our capabilities in construction HR.</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{d.caps.map((c,i) => (<div key={i} className="ss-card p-6 flex flex-col gap-3"><span className="font-display font-bold text-[#C9B99A]" style={{ fontSize:'1.5rem',lineHeight:1 }}>0{i+1}</span><h3 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize:'1.1rem',lineHeight:1.2 }}>{c.t}</h3><p className="font-sans text-sm text-[#6B7063] leading-relaxed">{c.b}</p></div>))}</div>
          </div>
        </section>
        <section className="section-padding bg-[#F9F8F6]">
          <div className="site-container"><span className="section-label">Typical Roles</span><h2 className="font-display font-bold text-[#0D0D0D] mb-8" style={{ fontSize:'clamp(1.75rem, 3.5vw, 2.75rem)',lineHeight:1.1 }}>Roles we recruit in construction &amp; real estate.</h2><div className="grid md:grid-cols-2 gap-3 max-w-2xl">{d.roles.map(r => (<div key={r} className="flex items-center gap-4 py-3" style={{ borderBottom:'1px solid #E5E0D8' }}><span className="block flex-shrink-0" style={{ width:'24px',height:'1px',background:'#C9B99A' }} /><span className="font-sans text-sm text-[#0D0D0D]">{r}</span></div>))}</div></div>
        </section>
        <section className="bg-white py-20" style={{ borderTop:'1px solid #E5E0D8' }}>
          <div className="site-container"><div className="grid lg:grid-cols-2 gap-12 items-center">
            <div><span className="section-label">Work With Us</span><h2 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize:'clamp(1.75rem, 3.5vw, 2.75rem)',lineHeight:1.1 }}>Tell us about your construction workforce challenge.</h2></div>
            <div className="flex flex-col gap-4 items-start"><p className="font-sans text-[#6B7063] leading-relaxed">Every engagement starts with understanding your specific context.</p><div className="flex gap-4 flex-wrap"><Link to="/contact" id="construction-cta" className="btn-primary">Talk to Us</Link><Link to="/industries" className="btn-secondary">All Industries</Link></div></div>
          </div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default ConstructionRealEstate;
