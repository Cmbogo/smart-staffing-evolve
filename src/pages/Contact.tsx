import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page hero — dark green */}
        <section
          className="py-20"
          style={{ background: '#1A3A2A' }}
          aria-label="Contact page hero"
        >
          <div className="site-container">
            <div className="max-w-2xl">
              <span className="section-label" style={{ color: '#C9B99A' }}>Contact</span>
              <h1
                className="font-display font-bold text-white"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.025em',
                }}
              >
                Let's talk.
              </h1>
              <p className="font-sans text-white/70 text-lg mt-6 leading-relaxed">
                No long intake process. Tell us what you are working on, and we will
                take it from there.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form component */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
