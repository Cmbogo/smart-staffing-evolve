
import { AlertTriangle, Users, HelpCircle, Frown, TrendingDown } from 'lucide-react';

const Reality = () => {
  const challenges = [
    { icon: Users, text: "Misaligned leadership" },
    { icon: HelpCircle, text: "Unclear roles and expectations" },
    { icon: AlertTriangle, text: "Weak or undefined organizational culture" },
    { icon: Frown, text: "Disengaged employees" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/5 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Reality</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most organizations are not struggling with strategy. They are struggling with execution. 
            And execution is rarely a systems problem—it is a <strong className="text-foreground">people and alignment challenge</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {challenges.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm text-center">
              <item.icon className="h-10 w-10 text-destructive mx-auto mb-3" />
              <p className="font-medium text-card-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 rounded-lg shadow-sm max-w-2xl mx-auto text-center">
          <TrendingDown className="h-12 w-12 text-destructive mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            The result? <strong className="text-foreground">Declining productivity, slow decision-making, and underperformance.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reality;
