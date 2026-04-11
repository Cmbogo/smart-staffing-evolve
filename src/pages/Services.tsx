
import { RefreshCw, Users, Target, HeartHandshake, FileText, Shield, UserSearch } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Organizational Transformation",
      description: "Aligning structures, roles, and people to business goals during periods of change."
    },
    {
      icon: Users,
      title: "Culture & Leadership Alignment",
      description: "Defining and embedding the leadership behaviours and culture that drive performance."
    },
    {
      icon: Target,
      title: "Strategy Execution & Performance Alignment",
      description: "Translating strategy into clear roles, KPIs, and accountability frameworks."
    },
    {
      icon: HeartHandshake,
      title: "Employee Engagement & Productivity",
      description: "Identifying root causes of disengagement and implementing practical performance solutions."
    },
    {
      icon: FileText,
      title: "HR Systems, Policies & Contracts",
      description: "Designing structured HR frameworks that promote consistency and scalability."
    },
    {
      icon: Shield,
      title: "HR Audits & Compliance",
      description: "Assessing HR practices to identify gaps, ensure compliance, and mitigate risk."
    },
    {
      icon: UserSearch,
      title: "Strategic Talent Acquisition & Workforce Planning",
      description: "Attracting and aligning talent to business strategy and long-term growth."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We partner with organizations to solve critical people and performance challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
