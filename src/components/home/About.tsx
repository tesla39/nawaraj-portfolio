
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    "Web Design", "Frontend Development", "UI/UX Design", 
    "React.js", "Tailwind CSS", "TypeScript"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-navy/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <p className="text-lg font-medium">
                <span className="text-accent">5+ years</span> of experience in creating digital solutions
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm a passionate designer and developer dedicated to creating beautiful, 
              functional digital experiences. With a strong background in both design 
              and development, I bring a unique perspective to every project.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines aesthetic sensibility with technical expertise 
              to build solutions that not only look great but also deliver exceptional 
              user experiences.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-muted px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
              <Link to="/about">
                More About Me <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
