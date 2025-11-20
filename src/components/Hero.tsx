import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="container mx-auto relative max-w-4xl text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-all">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            Now accepting waitlist signups
          </div> */}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Buzz, no fuzz.
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Buzz only when someone nearby is a strong mutual match—same intentions, clear boundaries, no map, no feed, no fuzz.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Built for people who want to meet in real life, with clear intentions and real control over when they're visible.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all gap-2 shadow-lg"
              onClick={() => scrollToSection('waitlist')}
            >
              Join the waitlist
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 hover:bg-accent/10 hover:border-accent/50 hover:scale-105 transition-all"
              onClick={() => scrollToSection('how-it-works')}
            >
              <Play className="w-5 h-5" />
              See how it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
