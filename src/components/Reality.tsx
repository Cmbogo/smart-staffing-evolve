const Reality = () => {
  return (
    <section className="bg-white section-padding" aria-label="The challenge section">
      <div className="site-container">

        {/* Full-width editorial pull-quote */}
        <div className="max-w-4xl">
          <span className="section-label">The Challenge</span>
          <blockquote
            className="font-display text-[#0D0D0D] mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontWeight: 700,
            }}
          >
            Most organizations fail at execution, not strategy.
          </blockquote>
          <p className="font-sans text-lg text-[#6B7063] max-w-2xl leading-relaxed">
            The gap is almost never the business plan. It is the people and alignment behind it.
            When leadership, roles, and culture pull in different directions, performance suffers.
          </p>
        </div>

        {/* Challenge grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E0D8]">
          {[
            {
              number: "01",
              challenge: "Misaligned leadership",
              detail: "Executives and managers working from different assumptions about what success looks like."
            },
            {
              number: "02",
              challenge: "Unclear roles",
              detail: "Accountability gaps that let problems persist because no one owns them."
            },
            {
              number: "03",
              challenge: "Undefined culture",
              detail: "Behaviour norms that exist in practice but conflict with stated values."
            },
            {
              number: "04",
              challenge: "Disengaged teams",
              detail: "People going through the motions, without connection to outcomes."
            },
          ].map((item) => (
            <div key={item.number} className="bg-[#F9F8F6] p-8">
              <p className="font-display text-5xl font-bold text-[#C9B99A] mb-4">{item.number}</p>
              <p className="font-sans font-600 text-[#0D0D0D] mb-3 font-semibold">{item.challenge}</p>
              <p className="font-sans text-sm text-[#6B7063] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reality;
