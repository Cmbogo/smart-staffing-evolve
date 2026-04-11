
import { CheckCircle, Briefcase, Globe, Wrench, Rocket } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: Briefcase, text: "Over 10 years of HR leadership experience" },
    { icon: Globe, text: "Cross-industry exposure (Banking, Security Printing, Hospitality, Consulting)" },
    { icon: Wrench, text: "A practical, business-focused approach" },
    { icon: Rocket, text: "Solutions that go beyond policy into real execution" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just provide HR solutions—we solve business problems through people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <reason.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-card-foreground font-medium">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
