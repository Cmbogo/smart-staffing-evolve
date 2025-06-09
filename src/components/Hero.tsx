
import { ArrowRight, Users, Target, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Organizations Through
              <span className="text-primary block">Strategic Human Capital</span>
              Management
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform your business potential with innovative HR solutions. We align human capital strategies 
              with organizational goals, fostering growth and long-term success through tailored, practical solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">Professional HR consultants with deep industry expertise</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow mt-8">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Strategic Focus</h3>
              <p className="text-sm text-muted-foreground">Aligning HR strategies with business objectives</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow -mt-4">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Delivering sustainable impact and growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
