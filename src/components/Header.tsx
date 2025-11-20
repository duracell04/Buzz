import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
            <Logo className="w-12 h-12 md:w-14 md:h-14 drop-shadow-[0_6px_14px_rgba(255,200,87,0.25)]" animated />
            <span className="text-2xl font-semibold tracking-tight text-foreground">
              buzz
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="/#safety" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Safety
            </a>
            <a href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <Link href="/demo">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Demo
              </Button>
            </Link>
          </nav>

          <Button 
            size="sm" 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
