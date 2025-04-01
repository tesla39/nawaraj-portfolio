
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight animate-fade-in">
              Creating <span className="text-primary">Beautiful</span> Digital Experiences
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
              I design and develop stunning websites and applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/projects">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-50"></div>
              <div className="relative p-6 flex items-center justify-center h-full">
                <div className="p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg animate-float">
                  <h3 className="font-serif text-2xl font-bold text-portfolio-navy mb-4">Creative Developer</h3>
                  <p className="text-muted-foreground">Turning ideas into digital reality through code and design.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-lg animate-float animation-delay-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
