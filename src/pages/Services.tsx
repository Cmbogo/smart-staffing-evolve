
import { Building, Users, DollarSign, BarChart3, Award, TrendingUp, Shield, UserSearch, FileText, RefreshCw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const services = [
    {
      icon: Building,
      title: "Organizational Structure Review",
      description: "Aligning roles and processes to strategic goals."
    },
    {
      icon: Users,
      title: "Job Analysis & Evaluation",
      description: "Creating role-specific job descriptions for fair compensation."
    },
    {
      icon: DollarSign,
      title: "Salary Benchmarking",
      description: "Developing competitive pay structures to attract top talent."
    },
    {
      icon: BarChart3,
      title: "Workload Analysis",
      description: "Ensuring equitable task distribution for productivity."
    },
    {
      icon: Award,
      title: "Skills & Competency Assessment",
      description: "Supporting succession planning and development."
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Fostering engagement and driving results."
    },
    {
      icon: Shield,
      title: "HR Audits & Compliance",
      description: "Identifying risks and improving processes."
    },
    {
      icon: UserSearch,
      title: "Talent Acquisition",
      description: "Attracting top talent with strategic hiring solutions."
    },
    {
      icon: FileText,
      title: "HR Policies & Contracts",
      description: "Building fair, transparent, and inclusive systems."
    },
    {
      icon: RefreshCw,
      title: "Change Management",
      description: "Guiding teams through transformations with people-centered strategies."
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
              We transform HR management with comprehensive solutions designed to optimize your 
              workforce and drive sustainable growth.
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
