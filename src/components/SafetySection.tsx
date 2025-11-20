import { EyeOff, Lock, CheckCircle } from "lucide-react";

const safetyPromises = [
  {
    icon: EyeOff,
    title: "You're invisible until you choose otherwise",
    description: "Your profile isn't browsable. Only active when you turn Roam ON."
  },
  {
    icon: Lock,
    title: "Nothing is shown unless it's mutual",
    description: "No 'almost matches', no 'who viewed you'. Either both say yes or nothing happens."
  },
  {
    icon: CheckCircle,
    title: "Your boundaries are enforced, every single time",
    description: "If you set a non-negotiable, Buzz will never match you with someone who doesn't meet it."
  }
];

const SafetySection = () => {
  return (
    <section id="safety" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safe-green/10 text-safe-green text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Safety & Privacy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built around women's comfort
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Control, privacy, and safety aren't add-ons—they're the foundation.
          </p>
        </div>

        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our safety promises
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {safetyPromises.map((promise, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <promise.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold">
                  {promise.title}
                </h4>
                <p className="text-primary-foreground/80 text-sm">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              No screenshots or pressure
            </h3>
            <p className="text-muted-foreground">
              Conversations disappear after 24 hours if you don't meet. No lingering chats, no pressure to keep talking if it's not working.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Report & block instantly
            </h3>
            <p className="text-muted-foreground">
              Zero tolerance for harassment. One-tap block and report removes them permanently, with immediate review by our safety team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export default SafetySection;
