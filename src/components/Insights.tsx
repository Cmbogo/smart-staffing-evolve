import { Link } from 'react-router-dom';

const Insights = () => {
  return (
    <section className="bg-[#F9F8F6] section-padding" aria-label="Perspectives section">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <span className="section-label">Perspectives</span>
            <h2 className="font-display text-[#0D0D0D] mb-6">
              Thinking on people, performance, and organizations.
            </h2>
            <p className="font-sans text-[#6B7063] text-lg leading-relaxed mb-8">
              We share what we observe in organizations across East Africa — patterns in
              leadership, culture, and performance that are worth examining clearly.
            </p>
            <Link to="/contact" id="insights-cta" className="btn-secondary">
              Start a Conversation
            </Link>
          </div>

          {/* Right: featured perspective card */}
          <div className="ss-card p-10">
            <p className="section-label mb-6">Featured</p>
            <blockquote
              className="font-display font-bold text-[#0D0D0D] mb-4"
              style={{ fontSize: '1.5rem', lineHeight: '1.25' }}
            >
              "Culture is not what you put on a wall. It is what you tolerate on a Monday morning."
            </blockquote>
            <p className="font-sans text-sm text-[#6B7063] leading-relaxed mb-6">
              Most organizational culture problems are accountability problems in disguise.
              The gap between stated values and daily behaviour is always visible to employees,
              even when leadership cannot see it.
            </p>
            <div className="pt-6 border-t border-[#E5E0D8]">
              <p className="font-sans text-xs text-[#6B7063] uppercase tracking-widest">
                Smart Staffing &amp; Management Consultancy — Perspectives
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Insights;
