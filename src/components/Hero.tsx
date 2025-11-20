import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              Now accepting waitlist signups
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Buzz, no fuzz.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Buzz only when someone nearby is a strong mutual match—same intentions, clear boundaries, no map, no feed, no fuzz.
            </p>

            <p className="text-base text-muted-foreground max-w-xl">
              Built for people who want to meet in real life, with clear intentions and real control over when they're visible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the waitlist
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-4 h-4" />
                See how it works
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroPhone} 
              alt="Buzz app interface" 
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
