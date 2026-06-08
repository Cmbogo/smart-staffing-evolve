const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We begin with your business context, not a standard checklist. Every engagement starts with understanding what you are trying to achieve and what is getting in the way."
  },
  {
    number: "02",
    title: "Diagnose",
    description: "We identify root causes. Not the presenting symptoms, but the underlying people and alignment issues that are producing the outcomes you are trying to change."
  },
  {
    number: "03",
    title: "Design",
    description: "We build solutions that fit your organization, your sector, and your stage of growth. Nothing is templated. Everything is specific."
  },
  {
    number: "04",
    title: "Support",
    description: "We stay through implementation. Our work does not end with a report. We support your team through the execution, and we are accountable for results."
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-white section-padding" aria-label="How we work">
      <div className="site-container">
        <div className="max-w-xl mb-16">
          <span className="section-label">Our Process</span>
          <h2 className="font-display text-[#0D0D0D]">
            Four steps. No surprises.
          </h2>
        </div>

        <div className="flex flex-col gap-0 divide-y divide-[#E5E0D8]">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="grid md:grid-cols-[80px_280px_1fr] gap-6 md:gap-12 py-10 items-start"
            >
              <p
                className="font-display font-bold text-[#C9B99A]"
                style={{ fontSize: '2.5rem', lineHeight: 1 }}
              >
                {step.number}
              </p>
              <h3
                className="font-display font-bold text-[#0D0D0D]"
                style={{ fontSize: '1.5rem', lineHeight: '1.2' }}
              >
                {step.title}
              </h3>
              <p className="font-sans text-[#6B7063] text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
