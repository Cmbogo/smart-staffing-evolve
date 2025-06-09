
import { CheckCircle, TrendingUp, Users, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    "Enhance workforce performance",
    "Strengthen market positioning", 
    "Drive sustainable growth",
    "Ensure efficiency and compliance",
    "Build a motivated workforce",
    "Support business goals"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our approach integrates innovative strategies, advanced technology, and expert insights 
              to deliver transformational results for your organization.
            </p>
            
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Growth Focused</h3>
              <p className="text-sm text-muted-foreground">Strategic solutions that drive measurable business growth</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm mt-8">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">People-Centered</h3>
              <p className="text-sm text-muted-foreground">Putting people at the heart of organizational transformation</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm -mt-4">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Results Driven</h3>
              <p className="text-sm text-muted-foreground">Delivering tangible outcomes aligned with your objectives</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm mt-4">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Proven Methods</h3>
              <p className="text-sm text-muted-foreground">Time-tested approaches backed by industry expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
