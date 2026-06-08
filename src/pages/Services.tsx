import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page hero — off-white */}
        <section
          className="section-padding"
          style={{ background: '#F9F8F6', borderBottom: '1px solid #E5E0D8' }}
          aria-label="Services page hero"
        >
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="section-label">Our Services</span>
              <h1
                className="font-display font-bold text-[#0D0D0D] mb-6"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.025em',
                }}
              >
                What we do.
              </h1>
              <p className="font-sans text-[#6B7063] text-xl leading-relaxed max-w-2xl">
                Seven practice areas. Each one designed to address a specific and common challenge
                that organizations face when people, culture, and strategy are not aligned.
              </p>
            </div>
          </div>
        </section>

        {/* Services component */}
        <Services />

        {/* Industries cross-link */}
        <section className="bg-white py-16" style={{ borderTop: '1px solid #E5E0D8' }}>
          <div className="site-container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="section-label mb-2 block">Looking for sector-specific expertise?</span>
              <p
                className="font-display font-bold text-[#0D0D0D]"
                style={{ fontSize: '1.5rem', lineHeight: '1.2' }}
              >
                We work across nine industries in East Africa.
              </p>
            </div>
            <Link to="/industries" id="services-industries-link" className="btn-secondary flex-shrink-0">
              See Industries
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
