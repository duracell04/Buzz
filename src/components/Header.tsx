import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import buzzIcon from "@/assets/buzz-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={buzzIcon} 
              alt="Buzz" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-semibold tracking-tight text-foreground">
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
            <Link to="/demo">
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
