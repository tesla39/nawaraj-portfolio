
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GlobeContainer } from '@/components/GlobeContainer';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#64ffda]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#64ffda]/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight animate-fade-in">
            Turning Ideas <span className="text-[#64ffda]">Into Tools </span> for a Better World
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
            I develop digital tools that are easy to use and solves real problems.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <Button asChild size="lg" className="bg-transparent hover:bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda] hover:border-[#64ffda] btn-hover">
                <Link to="/projects">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 hover:text-[#64ffda] btn-hover">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative w-full h-[400px] md:h-[500px] animate-fade-in-right">
            <GlobeContainer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
