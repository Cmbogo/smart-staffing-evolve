
import { ArrowRight, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary/5 to-secondary/10">
      {/* Hero Banner - Full Width */}
      <div className="py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Organizations Through
              <span className="text-primary block mt-2">Strategic Human Capital Management</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transform your business potential with innovative HR solutions. We align human capital strategies 
              with organizational goals, fostering growth and long-term success through tailored, practical solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Link 
                to="/contact"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-primary text-primary px-10 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center text-lg font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Below Banner */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <Users className="h-16 w-16 text-primary mb-6 mx-auto" />
              <h3 className="font-bold text-xl text-card-foreground mb-4">Expert Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional HR consultants with deep industry expertise and proven track records
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <Target className="h-16 w-16 text-primary mb-6 mx-auto" />
              <h3 className="font-bold text-xl text-card-foreground mb-4">Strategic Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aligning HR strategies with business objectives for maximum organizational impact
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <Award className="h-16 w-16 text-primary mb-6 mx-auto" />
              <h3 className="font-bold text-xl text-card-foreground mb-4">Proven Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Delivering sustainable impact and measurable growth for our client organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
