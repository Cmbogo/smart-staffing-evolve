import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-[#F9F8F6]"
      style={{
        height: 'calc(100svh - 80px)',
        minHeight: '580px',
        maxHeight: '900px',
        overflow: 'hidden',
      }}
      aria-label="Hero section"
    >
      {/* Full-height two-column grid */}
      <div className="grid lg:grid-cols-2 h-full">

        {/* ── LEFT COLUMN ── */}
        <div
          className="flex flex-col justify-center"
          style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 5rem)' }}
        >
          {/* Overline */}
          <span
            className="font-sans uppercase tracking-widest text-[#C9B99A]"
            style={{ fontSize: '0.68rem', letterSpacing: '0.14em', marginBottom: '0.6rem', display: 'block' }}
          >
            Smart Staffing &amp; Management Consultancy
          </span>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.8vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#0D0D0D',
              marginBottom: '0.65rem',
            }}
          >
            Empowering organizations<br />
            through strategic<br />
            human capital management.
          </h1>

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
              color: '#6B7063',
              lineHeight: 1.6,
              maxWidth: '400px',
              marginBottom: '1.1rem',
            }}
          >
            The right people, in the right roles, from day one.
          </p>

          {/* CTA row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.1rem' }}>
            <Link
              to="/contact"
              id="hero-talk-to-us"
              className="btn-primary"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}
            >
              Talk to Us
            </Link>
            <Link
              to="/services"
              id="hero-see-services"
              className="btn-secondary"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}
            >
              See How It Works
            </Link>
          </div>

          {/* Credibility strip */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              paddingTop: '1rem',
              borderTop: '1px solid #E5E0D8',
            }}
          >
            {[
              { value: '10+', label: 'Years of HR leadership' },
              { value: '9', label: 'Industries served' },
              { value: 'East Africa', label: 'Regional reach' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                    fontWeight: 700,
                    color: '#1A3A2A',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.73rem',
                    color: '#6B7063',
                    marginTop: '0.2rem',
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — image panel ── */}
        <div className="relative hidden lg:block h-full">
          {/* Stone accent bar */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '25%',
              width: '4px',
              height: '100px',
              background: '#C9B99A',
              zIndex: 10,
            }}
            aria-hidden="true"
          />

          <img
            src="/lovable-uploads/New Photos/business-women-talking-near-desk-coffee-break-hallway-big-corporation.jpg"
            alt="Smart Staffing professionals collaborating in a modern workspace"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            fetchPriority="high"
            loading="eager"
          />

          {/* Dark green overlay */}
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(13, 43, 26, 0.25)' }}
            aria-hidden="true"
          />

          {/* Brand badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              right: '1.5rem',
              zIndex: 10,
              background: '#1A3A2A',
              padding: '0.75rem 1rem',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#C9B99A',
                marginBottom: '0.2rem',
              }}
            >
              Est. 2013
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.3,
              }}
            >
              Nairobi &middot; East Africa
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
