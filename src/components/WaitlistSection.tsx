import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock submission
    console.log("Waitlist signup:", email);
    
    toast({
      title: "You're in! 🎉",
      description: "We'll let you know as soon as Buzz is ready to roll.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to buzz when it matters?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the waitlist and be first to experience dating that actually happens.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-primary-foreground text-primary h-12 text-base"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 h-12"
              >
                Join waitlist
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>

          <p className="text-sm text-primary-foreground/60 mt-4">
            No spam, just updates when we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
