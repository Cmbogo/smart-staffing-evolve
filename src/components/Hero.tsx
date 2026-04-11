
import { ArrowRight, MessageSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Turning People, Culture, and Strategy into Business Performance
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We help organizations align leadership, people, and systems to improve productivity, 
              strengthen culture, and deliver sustainable results.
            </p>

            <p className="text-base text-muted-foreground/80 italic max-w-2xl mx-auto">
              Because when people, culture, and strategy are not aligned, performance suffers—no matter 
              how strong the business plan is.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link 
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Start a Conversation</span>
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <FileText className="h-5 w-5" />
                <span>Request a Proposal</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
