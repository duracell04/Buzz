import { MapPin, MessageSquare, Eye, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: MapPin,
    title: "Map & feed overload",
    description: "You're browsing faces like a catalogue, always half-wondering who else is out there if you just keep scrolling."
  },
  {
    icon: MessageSquare,
    title: "Chat purgatory",
    description: "You match, you talk, you drift. You never meet — but you do spend another evening in the app."
  },
  {
    icon: Eye,
    title: "Always being watched",
    description: "Your profile sits there like a shop window. Anyone can look in, any time, whether you feel like being looked at or not."
  },
  {
    icon: AlertCircle,
    title: "Unclear intentions",
    description: "One person wants a long-term partner, the other just wants someone for tonight. Nobody says it clearly at the start."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why dating apps feel broken
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most dating apps are optimised for time spent, not for people met.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
