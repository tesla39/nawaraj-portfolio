
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/30 backdrop-blur-sm text-foreground py-8 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Brand and Social */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <Link to="/" className="font-serif text-xl font-bold text-accent hover:text-accent/80 transition-colors">
              Nawaraj
            </Link>
            <div className="flex space-x-4 items-center">
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </Link>
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="hidden md:flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <Separator className="bg-border/10 my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-muted-foreground/70">
            © {currentYear} <span className="text-accent">Nawaraj</span>. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <Link to="#" className="text-muted-foreground/70 hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="#" className="text-muted-foreground/70 hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
