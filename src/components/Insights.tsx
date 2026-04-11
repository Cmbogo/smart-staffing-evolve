
import { Lightbulb } from 'lucide-react';

const Insights = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Insights & Conversations</h2>
          <p className="text-lg text-muted-foreground">
            We share practical insights and perspectives on organizational performance, culture, leadership, 
            and people strategy—designed to spark meaningful conversations and drive real change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insights;
