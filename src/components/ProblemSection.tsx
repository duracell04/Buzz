import { MapPin, MessageSquare, Eye, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: MapPin,
    title: "Map & feed overload",
    description: "Endless browsing of profiles, always wondering who else is out there"
  },
  {
    icon: MessageSquare,
    title: "Chat purgatory",
    description: "Matching with people you'll never actually meet in person"
  },
  {
    icon: Eye,
    title: "Always being watched",
    description: "Your profile visible to everyone, with no control over who sees you"
  },
  {
    icon: AlertCircle,
    title: "Unclear intentions",
    description: "Wasting time with people who want completely different things"
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
            They're designed for endless scrolling and texting, not for actually meeting people.
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
