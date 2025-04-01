import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Web Design", "Prototyping", "Wireframing", "Brand Identity"] },
    { category: "Development", items: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Tools", items: ["Figma", "Adobe XD", "VS Code", "Git", "Jira"] }
  ];

  const experiences = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Lead frontend development for various client projects, implementing responsive designs and optimizing performance."
    },
    {
      position: "UI/UX Designer",
      company: "Creative Solutions",
      period: "2018 - 2021",
      description: "Designed user interfaces for web and mobile applications, conducted user research and testing."
    },
    {
      position: "Web Developer",
      company: "Digital Agency",
      period: "2016 - 2018",
      description: "Developed and maintained client websites using modern technologies and best practices."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-deep-blue">
      <Navbar />
      <main className="flex-grow pt-20">
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
                    I'm a designer and developer with over 5 years of experience creating digital 
                    solutions for clients across various industries. My journey began with a 
                    passion for visual design, which eventually led me to explore the 
                    technical aspects of bringing those designs to life.
                  </p>
                  <p>
                    What sets me apart is my dual expertise in both design and development, 
                    allowing me to bridge the gap between aesthetics and functionality. I believe 
                    that great digital products are born from a deep understanding of user needs 
                    combined with technical excellence.
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
                    "Design is not just what it looks like and feels like. Design is how it works."
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

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title mb-12 text-center">Work Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-portfolio-navy">{exp.position}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <p>{exp.description}</p>
                  </div>
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
