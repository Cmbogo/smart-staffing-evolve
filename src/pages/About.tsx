import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page hero — dark green */}
        <section
          className="section-padding"
          style={{ background: '#1A3A2A' }}
          aria-label="About page hero"
        >
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-label" style={{ color: '#C9B99A' }}>About Us</span>
                <h1
                  className="font-display font-bold text-white"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    lineHeight: '1.08',
                    letterSpacing: '-0.025em',
                  }}
                >
                  Who we are.
                </h1>
                <p className="font-sans text-white/70 text-lg mt-6 max-w-md leading-relaxed">
                  Empowering organizations through strategic human capital management.
                </p>
              </div>

              {/* Editorial image — About page */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '4/3', borderRadius: 0 }}
              >
                <img
                  src="/lovable-uploads/about-team.png"
                  alt="Smart Staffing professional consultancy team in Nairobi"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: 0 }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(13, 43, 26, 0.2)' }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About component */}
        <About />

        {/* Contact CTA strip */}
        <section
          style={{ background: '#F9F8F6', borderTop: '1px solid #E5E0D8' }}
          className="py-16"
        >
          <div className="site-container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p
              className="font-display font-bold text-[#0D0D0D]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2' }}
            >
              Empowering organizations through strategic human capital management.
            </p>
            <Link to="/contact" id="about-page-cta" className="btn-primary flex-shrink-0">
              Talk to Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
