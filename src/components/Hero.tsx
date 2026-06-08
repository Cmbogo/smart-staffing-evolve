import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-[#F9F8F6] flex items-center overflow-hidden"
      style={{ height: 'calc(100vh - 80px)' }}
      aria-label="Hero section"
    >
      {/* Layout: headline left, image right */}
      <div className="site-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center h-full">

          {/* Left: Headline + CTA */}
          <div className="flex flex-col justify-center">
            <span className="section-label">Smart Staffing &amp; Management Consultancy</span>

            <h1 className="display-headline text-[#0D0D0D] mb-8 font-display">
              Empowering organizations<br />
              through strategic human capital<br />
              management.
            </h1>

            <p className="font-sans text-lg text-[#6B7063] mb-10 leading-relaxed max-w-md">
              The right people, in the right roles, from day one.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                id="hero-talk-to-us"
                className="btn-primary"
              >
                Talk to Us
              </Link>
              <Link
                to="/services"
                id="hero-see-services"
                className="btn-secondary"
              >
                See How It Works
              </Link>
            </div>

            {/* Credibility strip */}
            <div className="mt-8 pt-6 border-t border-[#E5E0D8] flex gap-10">
              <div>
                <p className="font-display text-3xl font-bold text-[#1A3A2A]">10+</p>
                <p className="font-sans text-sm text-[#6B7063] mt-0.5">Years of HR leadership</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#1A3A2A]">9</p>
                <p className="font-sans text-sm text-[#6B7063] mt-0.5">Industries served</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#1A3A2A]">East Africa</p>
                <p className="font-sans text-sm text-[#6B7063] mt-0.5">Regional reach</p>
              </div>
            </div>
          </div>

          {/* Right: Editorial image */}
          <div className="relative hidden lg:block" style={{ height: 'calc(100vh - 80px)' }}>
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/lovable-uploads/hero-editorial.png"
                alt="Professional team in executive meeting — Smart Staffing consultancy"
                width={800}
                height={1000}
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover"
                style={{ borderRadius: 0 }}
              />
              {/* Dark green tint overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'rgba(13, 43, 26, 0.35)' }}
                aria-hidden="true"
              />
            </div>
            {/* Stone accent line */}
            <div
              className="absolute left-0 top-1/4 w-1 h-32"
              style={{ background: '#C9B99A' }}
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
