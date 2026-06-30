import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="bg-[#F9F8F6] section-padding" aria-label="About Smart Staffing">
      <div className="site-container">

        {/* Opening statement */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="font-display text-[#0D0D0D] mb-6">
              About Smart Staffing &amp; Management Consultancy.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-sans text-[#0D0D0D] text-lg leading-relaxed">
              We help organizations align people, culture, and strategy to drive business
              performance through practical, results-driven solutions.
            </p>
            <p className="font-sans text-[#6B7063] leading-relaxed">
              Our founding team has spent over a decade inside HR functions, across banking,
              security document printing firms, hospitality, and professional services. We know what works in practice,
              and we build our work around that.
            </p>
          </div>
        </div>

        {/* Vision, Mission, Social Responsibility */}
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E0D8] mb-24">
          <div className="bg-white p-10">
            <p className="section-label mb-4">Vision</p>
            <p className="font-display font-bold text-[#0D0D0D] mb-4"
              style={{ fontSize: '1.35rem', lineHeight: '1.3' }}>
              To be a trusted partner in transforming organizations by aligning people,
              culture, and strategy for sustainable performance.
            </p>
          </div>
          <div className="bg-white p-10">
            <p className="section-label mb-4">Mission</p>
            <p className="font-display font-bold text-[#0D0D0D] mb-4"
              style={{ fontSize: '1.35rem', lineHeight: '1.3' }}>
              To support organizations in solving critical people and performance challenges
              through practical, business-focused solutions that deliver measurable results.
            </p>
          </div>
          <div className="bg-white p-10">
            <p className="section-label mb-4">Social Responsibility</p>
            <p className="font-display font-bold text-[#0D0D0D] mb-4"
              style={{ fontSize: '1.35rem', lineHeight: '1.3' }}>
              We are committed to promoting fair employment practices and supporting the
              development of sustainable, high-performing workplaces.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <span className="section-label mb-8 block">Our Values</span>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E0D8]">
            {[
              {
                title: "Business-Centered Thinking",
                desc: "Every recommendation we make is connected to a business outcome. We do not build HR for its own sake."
              },
              {
                title: "Practicality Over Theory",
                desc: "We have worked inside organizations. We know which textbook answers do not survive contact with reality."
              },
              {
                title: "Partnership & Collaboration",
                desc: "We work with your team, not around them. The solutions we build are ones your people can own."
              },
              {
                title: "Accountability for Results",
                desc: "We stay engaged through implementation. We are accountable for outcomes, not just deliverables."
              },
              {
                title: "Integrity & Professionalism",
                desc: "We tell clients what they need to hear, clearly and respectfully, even when it is uncomfortable."
              },
            ].map((value) => (
              <div key={value.title} className="bg-[#F9F8F6] p-8">
                <h3 className="font-display font-bold text-[#0D0D0D] mb-3"
                  style={{ fontSize: '1.1rem', lineHeight: '1.3' }}>
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-[#6B7063] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-display font-bold text-[#0D0D0D]"
              style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
              Ready to work with us?
            </p>
            <Link to="/contact" id="about-talk-link" className="btn-primary">
              Talk to Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
