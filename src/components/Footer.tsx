import buzzIcon from "@/assets/buzz-icon.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={buzzIcon} 
                alt="Buzz" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-semibold">buzz</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Dating that actually happens. No fuzz.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#how-it-works" className="hover:text-primary-foreground transition-colors">How it works</a></li>
              <li><a href="#safety" className="hover:text-primary-foreground transition-colors">Safety</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="/careers" className="hover:text-primary-foreground transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-primary-foreground transition-colors">Terms</a></li>
              <li><a href="/guidelines" className="hover:text-primary-foreground transition-colors">Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Buzz. All rights reserved. Buzz, no fuzz.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
