import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const d = {
  num:'04', title:'Hospitality & Tourism',
  metaTitle:'Hospitality & Tourism HR Solutions | Smart Staffing Kenya',
  metaDesc:'Workforce planning and HR solutions for hotels, lodges, safari operators, and travel businesses across East Africa. Flexible staffing for seasonal and year-round operations.',
  sub:'Workforce planning for hotels, lodges, and travel businesses that must deliver excellence even under seasonal demand pressure.',
  challengeH:'Seasonal demand and guest expectations put constant pressure on hospitality teams.',
  challengeB:'The hospitality sector in East Africa — from Nairobi\'s five-star hotels to Mara bush lodges and Mombasa beach resorts — runs on people. Thin margins, high turnover, and the unforgiving nature of guest experience mean that getting the workforce right is not optional. We build workforce structures that flex without breaking, and we recruit the hospitality professionals who deliver consistently.',
  caps:[
    {t:'Pre-Opening Staffing',b:'We staff new hotels, lodges, and F&B operations from the ground up — building full teams ahead of opening day.'},
    {t:'Seasonal Workforce Planning',b:'We design the staffing models that absorb peak-season demand without permanent headcount bloat.'},
    {t:'F&B & Housekeeping Leadership',b:'Experienced F&B managers, executive chefs, and housekeeping supervisors placed for the quality your brand demands.'},
    {t:'Revenue & Front Office Talent',b:'Front office managers, reservations leads, and revenue managers who drive occupancy and guest satisfaction.'},
    {t:'HR Policy & Staff Handbook Design',b:'We develop the staff handbooks, disciplinary frameworks, and leave policies that bring consistency to large hospitality teams.'},
    {t:'Guest Experience Training Design',b:'We help hospitality organisations define the service standards and build the training programmes that deliver them.'},
  ],
  roles:['Front Office Managers','F&B Managers','Executive Chefs','Housekeeping Supervisors','Guest Relations Officers','Revenue Managers','Events Coordinators','Tour Guides & Drivers','Spa & Wellness Managers','General Managers'],
  clients:['5-star & boutique hotels','Safari lodges & camps','Beach resorts','Tour & travel operators','Airlines & airport services','Conference & events venues','Restaurant groups','Hospitality management companies'],
};

const HospitalityTourism = () => {
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
            <div className="mb-12"><span className="section-label">What We Deliver</span><h2 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, maxWidth:'520px' }}>Our capabilities in hospitality HR.</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{d.caps.map((c,i) => (<div key={i} className="ss-card p-6 flex flex-col gap-3"><span className="font-display font-bold text-[#C9B99A]" style={{ fontSize:'1.5rem',lineHeight:1 }}>0{i+1}</span><h3 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize:'1.1rem',lineHeight:1.2 }}>{c.t}</h3><p className="font-sans text-sm text-[#6B7063] leading-relaxed">{c.b}</p></div>))}</div>
          </div>
        </section>
        <section className="section-padding bg-[#F9F8F6]">
          <div className="site-container"><span className="section-label">Typical Roles</span><h2 className="font-display font-bold text-[#0D0D0D] mb-8" style={{ fontSize:'clamp(1.75rem, 3.5vw, 2.75rem)',lineHeight:1.1 }}>Roles we recruit in hospitality.</h2><div className="grid md:grid-cols-2 gap-3 max-w-2xl">{d.roles.map(r => (<div key={r} className="flex items-center gap-4 py-3" style={{ borderBottom:'1px solid #E5E0D8' }}><span className="block flex-shrink-0" style={{ width:'24px',height:'1px',background:'#C9B99A' }} /><span className="font-sans text-sm text-[#0D0D0D]">{r}</span></div>))}</div></div>
        </section>
        <section className="bg-white py-20" style={{ borderTop:'1px solid #E5E0D8' }}>
          <div className="site-container"><div className="grid lg:grid-cols-2 gap-12 items-center">
            <div><span className="section-label">Work With Us</span><h2 className="font-display font-bold text-[#0D0D0D]" style={{ fontSize:'clamp(1.75rem, 3.5vw, 2.75rem)',lineHeight:1.1 }}>Tell us about your hospitality workforce challenge.</h2></div>
            <div className="flex flex-col gap-4 items-start"><p className="font-sans text-[#6B7063] leading-relaxed">Every engagement starts with understanding your specific context.</p><div className="flex gap-4 flex-wrap"><Link to="/contact" id="hospitality-cta" className="btn-primary">Talk to Us</Link><Link to="/industries" className="btn-secondary">All Industries</Link></div></div>
          </div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default HospitalityTourism;
