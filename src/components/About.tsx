import { Eye, Target, Heart, Shield, Users, Leaf, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Smart Staffing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialize in unlocking business potential through innovative HR solutions, focusing on 
            sustainable impact and organizational excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Vision</h3>
            <p className="text-muted-foreground">
              Transform challenges into opportunities with impactful HR solutions.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Mission</h3>
            <p className="text-muted-foreground">
              To be the HR consultancy of choice, empowering organizations and workforces.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <Leaf className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Social Responsibility</h3>
            <p className="text-muted-foreground">
              Supporting communities and minimizing environmental impact.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Our Values</h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-card-foreground">Integrity</h4>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-card-foreground">Partnership</h4>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-card-foreground">Excellence</h4>
            </div>
            <div className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-card-foreground">Confidentiality</h4>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-card-foreground">Responsibility</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
