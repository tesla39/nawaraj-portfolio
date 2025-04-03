
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // The Navbar is now set to "hidden" visibility to remove it from the display
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden', // Added 'hidden' class
      scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-serif text-2xl font-bold text-[#64ffda]">
            Nawaraj
          </Link>
          
          {/* Desktop Navigation - Removed numbering from links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="text-foreground hover:text-[#64ffda] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-transparent hover:bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda] hover:border-[#64ffda] btn-hover">
              Get In Touch
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Removed numbering from links */}
      {isOpen && (
        <div className="md:hidden bg-[#112240] shadow-lg absolute top-16 left-0 w-full animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className="text-foreground hover:text-[#64ffda] font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-transparent hover:bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda] hover:border-[#64ffda] btn-hover w-full">
              Get In Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
