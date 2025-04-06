import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

const AboutPage = () => {
  const skills = [
    { category: "Development", items: ["Python", "JavaScript", "TypeScript", "Node.js", "React", "Next.js"] },
    { category: "Backend & Databases", items: ["PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "gRPC", "Redis"] },
    { category: "Tools & DevOps", items: ["Docker", "Git", "VS Code", "GitHub", "Linux", "CI/CD"] },
    { category: "Architecture", items: ["OOP", "Design Patterns", "Microservices", "System Design"] },
    { category: "Extras", items: ["AI Toolkits", "Testing", "WebSockets", "Performance Optimization"] }
    
  ];

  return (
    <div className="flex flex-col min-h-screen bg-deep-blue scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-background/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground">
                A passionate designer and developer creating beautiful digital experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">My Story</h2>
                <div className="space-y-4 text-lg">
                  <p>
                  I'm a tech enthusiast driven by a belief that technology should empower people, not control them. 
                  My journey began with a curiosity about how systems work, which soon expanded into a deep interest in logic,
                   mathematics, and the innovation behind every piece of software.
                  </p>
                  <p>
                  What sets me apart is my focus on purpose-driven development—creating tools and systems that preserve creativity, spark ideas,
                   and respect human thought in an age of automation.
                   I believe great technology isn't just functional or efficient; it's ethical, thoughtful, and built to serve people first.
                  </p>
                  <p>
                    When I'm not designing or coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or sharing my knowledge through writing 
                    and speaking engagements.
                  </p>
                </div>
                <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Let's Work Together <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Working on designs"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-lg shadow-xl max-w-xs">
                  <blockquote className="text-lg italic">
                    "Code isn’t just what you write. It’s how the whole system works together."
                  </blockquote>
                  <p className="mt-2 font-medium text-right">— Steve Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title mb-12 text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-portfolio-navy">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
