const WhyChooseUs = () => {
  return (
    <section
      className="section-padding"
      style={{ background: '#1A3A2A' }}
      aria-label="Why Smart Staffing"
    >
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: headline */}
          <div>
            <span className="section-label" style={{ color: '#C9B99A' }}>The Difference</span>
            <h2
              className="font-display font-bold text-white mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
            >
              HR that works in practice, not just on paper.
            </h2>
            <p className="font-sans text-white/70 text-lg leading-relaxed">
              We have held senior HR roles across banking, security, hospitality, and consulting.
              We know what organizations actually face, and we design solutions that fit those realities.
            </p>
          </div>

          {/* Right: differentiators */}
          <div className="flex flex-col gap-8">
            {[
              {
                stat: "10+",
                label: "Years leading HR functions in complex organizations",
              },
              {
                stat: "Cross-sector",
                label: "Experience across banking, security, hospitality, and consulting",
              },
              {
                stat: "Practical",
                label: "Solutions that move from strategy into real execution",
              },
              {
                stat: "Business-first",
                label: "Every recommendation tied to a measurable business outcome",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start pb-8 border-b border-white/15 last:border-0 last:pb-0"
              >
                <p
                  className="font-display font-bold text-[#C9B99A] flex-shrink-0"
                  style={{ fontSize: '2rem', lineHeight: 1, minWidth: '80px' }}
                >
                  {item.stat}
                </p>
                <p className="font-sans text-white/80 text-base leading-relaxed self-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
