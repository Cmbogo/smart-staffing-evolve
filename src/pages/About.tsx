
import { Eye, Target, Heart, Briefcase, Wrench, Users, ClipboardCheck, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Smart Staffing and Management Consultancy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We help organizations align people, culture, and strategy to drive business performance 
              through practical, results-driven solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To be a trusted partner in transforming organizations by aligning people, culture, and strategy for sustainable performance.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To support organizations in solving critical people and performance challenges through practical, business-focused solutions that deliver measurable results.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Social Responsibility</h3>
              <p className="text-muted-foreground">
                We are committed to promoting fair employment practices and supporting the development of sustainable, high-performing workplaces.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Our Values</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground">Business-Centered Thinking</h4>
              </div>
              <div className="text-center">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground">Practicality Over Theory</h4>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground">Partnership & Collaboration</h4>
              </div>
              <div className="text-center">
                <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground">Accountability for Results</h4>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground">Integrity & Professionalism</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
