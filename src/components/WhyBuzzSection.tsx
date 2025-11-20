import { Target, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "To actually meet in real life",
    description: "Not just message — to meet when you're both out, nearby, and up for it."
  },
  {
    icon: Target,
    title: "Clear intentions from casual to marriage",
    description: "You say what you're open to. Buzz quietly filters for people who are in the same zone."
  },
  {
    icon: Shield,
    title: "Safe, untracked, and in control",
    description: "Your visibility is your choice. No map of people, no "people you walked past", no scoreboard of almost-matches."
  }
];

const WhyBuzzSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Buzz exists
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Buzz is for adults who want to date with intention, safety, and self-respect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <p className="text-lg text-card-foreground">
            Instead of feeds and maps, Buzz just gives you a gentle vibration when someone nearby is a strong mutual fit — and only if you both say yes.
          </p>
          <p className="text-muted-foreground mt-4">
            Buzz isn't a map of people.<br />
            It's a quiet "yes / no, now?" layer on top of your normal life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzSection;
