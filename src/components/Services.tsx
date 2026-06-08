import { Link } from 'react-router-dom';

const services = [
  {
    number: "01",
    title: "Organizational Transformation",
    description: "Aligning structures, roles, and people to business goals during periods of change.",
    detail: "We map your current operating model against your strategic intent, identify misalignments, and redesign roles and reporting lines to close the gap."
  },
  {
    number: "02",
    title: "Culture and Leadership Alignment",
    description: "Defining the leadership behaviours and culture that drive performance.",
    detail: "We work with senior teams to articulate what good leadership looks like in your context, and put in place the frameworks to make it stick."
  },
  {
    number: "03",
    title: "Strategy Execution and Performance",
    description: "Translating strategy into clear roles, KPIs, and accountability frameworks.",
    detail: "Strategy only works when each person knows what they are responsible for. We build the performance architecture that makes accountability real."
  },
  {
    number: "04",
    title: "Employee Engagement and Productivity",
    description: "Diagnosing disengagement and implementing practical performance solutions.",
    detail: "We conduct structured diagnostics to find the root causes, not just the symptoms, of low engagement, and design interventions that hold."
  },
  {
    number: "05",
    title: "HR Systems, Policies and Contracts",
    description: "Designing HR frameworks that promote consistency and scalability.",
    detail: "From employment contracts to leave policies to disciplinary procedures, we build systems your managers can use confidently."
  },
  {
    number: "06",
    title: "HR Audits and Compliance",
    description: "Assessing HR practices to identify gaps, ensure compliance, and reduce risk.",
    detail: "A structured review of your current practices against legal requirements and industry standards, with a clear remediation plan."
  },
  {
    number: "07",
    title: "Talent Acquisition and Workforce Planning",
    description: "Attracting and placing talent that fits both the role and the organisation.",
    detail: "We design hiring processes that go beyond credentials, assessing fit, capacity, and long-term potential for your specific context."
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#F9F8F6] section-padding" aria-label="Our services">
      <div className="site-container">
        <div className="max-w-xl mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="font-display text-[#0D0D0D] mb-4">
            Services built around real business problems.
          </h2>
          <p className="font-sans text-[#6B7063] text-lg leading-relaxed">
            We work with organizations to address the people and performance challenges
            that hold them back from executing their strategy.
          </p>
        </div>

        {/* Services list */}
        <div className="flex flex-col divide-y divide-[#E5E0D8]">
          {services.map((service) => (
            <div
              key={service.number}
              className="group grid md:grid-cols-[80px_1fr_1fr] gap-6 py-10 items-start hover:bg-white transition-colors duration-150 px-0 md:px-4 -mx-4"
            >
              <p
                className="font-display font-bold text-[#C9B99A]"
                style={{ fontSize: '2rem', lineHeight: 1 }}
              >
                {service.number}
              </p>
              <div>
                <h3 className="font-display font-bold text-[#0D0D0D] mb-2"
                  style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>
                  {service.title}
                </h3>
                <p className="font-sans text-[#6B7063] text-sm">{service.description}</p>
              </div>
              <p className="font-sans text-sm text-[#6B7063] leading-relaxed hidden md:block">
                {service.detail}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[#E5E0D8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-display text-[#0D0D0D]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Not sure which service fits your situation?
          </p>
          <Link to="/contact" id="services-talk-link" className="btn-primary flex-shrink-0">
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
