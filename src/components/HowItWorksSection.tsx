import { Heart, Bluetooth, MessageCircle, Coffee } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Heart,
    title: "Set intentions & boundaries",
    description: "Choose your intent (casual, serious, long-term, figuring it out) and set non-negotiables. If something is non-negotiable, Buzz will never propose someone who doesn't meet it.",
    note: "If you don't want to share a detail (like height), Buzz just won't match you with people who insist on it."
  },
  {
    number: "02",
    icon: Bluetooth,
    title: "Turn Roam ON",
    description: "When you're out—at a café, bar, event—turn Roam ON. You're only visible to potential matches in the moment, not to everyone all the time.",
    note: null
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Get a discreet buzz",
    description: "If someone nearby is a strong mutual fit (same intentions, all boundaries met), both your phones buzz. Anonymous until you both tap yes.",
    note: null
  },
  {
    number: "04",
    icon: Coffee,
    title: "Say yes—or don't",
    description: "Both have a short window to tap yes. Only then do you see a match card and tiny chat to find each other. If either ignores it, nothing is revealed.",
    note: null
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, private, and only active when you want it to be.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex flex-col items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary mb-1" />
                    <span className="text-xs font-semibold text-primary">{step.number}</span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.note && (
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-4">
                      <p className="text-sm text-accent-foreground">
                        <span className="font-semibold">Note:</span> {step.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
