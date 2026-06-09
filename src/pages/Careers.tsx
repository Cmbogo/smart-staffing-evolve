import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero — off-white */}
        <section
          className="section-padding"
          style={{ background: '#F9F8F6', borderBottom: '1px solid #E5E0D8' }}
          aria-label="Careers hero"
        >
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="section-label">Careers</span>
              <h1
                className="font-display font-bold text-[#0D0D0D] mb-6"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.025em',
                }}
              >
                Work with us.
              </h1>
              <p className="font-sans text-[#6B7063] text-xl leading-relaxed max-w-2xl">
                We are always looking for sharp, principled consultants who do their
                best work when the problems are real and the stakes are high.
              </p>
            </div>
          </div>
        </section>

        {/* What we look for */}
        <section className="bg-white section-padding" aria-label="What we look for">
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-label">What We Look For</span>
                <h2
                  className="font-display font-bold text-[#0D0D0D] mb-8"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15' }}
                >
                  Practitioners, not theorists.
                </h2>
                <div className="flex flex-col gap-8">
                  {[
                    {
                      title: "HR experience that counts",
                      desc: "We want people who have worked inside organizations, not just studied them. Sector experience across banking, security document printing, healthcare, or NGOs is an advantage."
                    },
                    {
                      title: "Clarity of thinking",
                      desc: "Our work requires the ability to diagnose complex situations quickly and communicate findings simply. If you can write a clear paragraph, you are ahead."
                    },
                    {
                      title: "Integrity without negotiation",
                      desc: "We tell clients what they need to hear. The same standard applies internally. We do not want people who manage up."
                    },
                    {
                      title: "Comfort with ambiguity",
                      desc: "Consulting work is not structured. Every client is different. We need people who find that energizing, not exhausting."
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="pb-8 border-b border-[#E5E0D8] last:border-0 last:pb-0"
                    >
                      <h3
                        className="font-display font-bold text-[#0D0D0D] mb-2"
                        style={{ fontSize: '1.15rem', lineHeight: '1.3' }}
                      >
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-[#6B7063] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: apply panel */}
              <div
                style={{ background: '#1A3A2A' }}
                className="p-10"
              >
                <span className="section-label" style={{ color: '#C9B99A' }}>Open Application</span>
                <h3
                  className="font-display font-bold text-white mb-4"
                  style={{ fontSize: '1.75rem', lineHeight: '1.2' }}
                >
                  We are not always advertising a role.
                </h3>
                <p className="font-sans text-white/70 leading-relaxed mb-8">
                  If your background is strong and you believe you can add something
                  specific to what we do, send us a message. We read every application
                  and respond to every one that is relevant.
                </p>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-sans text-xs text-[#C9B99A] uppercase tracking-widest mb-1">
                      Send your CV to
                    </p>
                    <a
                      href="mailto:Info@smartstaffingke.com"
                      className="font-sans text-white hover:text-[#C9B99A] transition-colors text-lg"
                    >
                      Info@smartstaffingke.com
                    </a>
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <p className="font-sans text-white/50 text-sm">
                      Include your sector experience and what kind of work you are
                      looking for. A two-paragraph note tells us more than a
                      covering letter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="py-16"
          style={{ background: '#F9F8F6', borderTop: '1px solid #E5E0D8' }}
        >
          <div className="site-container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p
              className="font-display font-bold text-[#0D0D0D]"
              style={{ fontSize: '1.5rem', lineHeight: '1.2' }}
            >
              Questions before applying? We are easy to reach.
            </p>
            <Link to="/contact" id="careers-contact-cta" className="btn-primary flex-shrink-0">
              Talk to Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
