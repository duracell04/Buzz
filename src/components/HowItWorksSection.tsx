import { Heart, Bluetooth, MessageCircle, Coffee } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Heart,
    title: "Set intentions & boundaries",
    description: "You answer a few questions once: What you're looking for right now (something casual, dating, serious, long-term / marriage, still figuring it out). Your non-negotiables (for example: non-smoker, wants kids / doesn't want kids, must be okay with my religion, height limits if that matters to you). Anything you mark as non-negotiable becomes a hard rule. Buzz will simply never propose someone who doesn't meet it.",
    note: "Don't want to share a detail (like height)? Then Buzz just won't match you with people who insist on it. Your choice."
  },
  {
    number: "02",
    icon: Bluetooth,
    title: "Turn Roam ON",
    description: "When you go out — a café, bar, gig, friend's party, conference — you flip Roam ON. That tells Buzz: "I'm open to meeting someone like my profile describes." "Only within the places and times I've allowed." You're not a permanent profile in a public aquarium. You're only "discoverable" in the moment, under your own rules.",
    note: null
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Get a discreet buzz",
    description: "If someone nearby is a strong mutual fit — they match your intentions and non-negotiables, and you match theirs — both your phones give a small, discreet buzz. You each see the same anonymous message: "Someone who fits what you're looking for is nearby. Tap if you'd like to see if you both say yes." No faces, no names, no little arrow pointing across the room. If you're not in the mood, you ignore it. That's it.",
    note: null
  },
  {
    number: "04",
    icon: Coffee,
    title: "Say yes… or let it pass",
    description: "You both get a short window to tap yes. If you both say yes, Buzz reveals a small match card: first name, age, one verified photo, what they're looking for, plus a few bullets like: "You both want a serious relationship." "Non-smokers; drink socially." "You both like late nights and live music." And a gentle suggestion like: "Hey, I think we just buzzed – are you near the bar?" If one of you says no, or doesn't answer at all, nothing is revealed. There is no "rejected you" list, no awkward trace. It's just a moment that almost was — and that's okay.",
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
            Simple, private, and only awake when you want it to be.
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
