import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string[];
  link: string;
};
const projects: Project[] = [{
  id: 1,
  title: "Digital Agency Website",
  description: "A modern website for a digital marketing agency with interactive elements.",
  imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  category: ["Web Design", "Frontend"],
  link: "/projects/1"
}, {
  id: 2,
  title: "E-commerce Platform",
  description: "A complete e-commerce solution with product management and checkout.",
  imageUrl: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  category: ["Web App", "E-commerce"],
  link: "/projects/2"
}, {
  id: 3,
  title: "Mobile Banking App",
  description: "A user-friendly mobile banking application with advanced security features.",
  imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  category: ["UI/UX", "Mobile"],
  link: "/projects/3"
}];
const ProjectsShowcase = () => {
  const categories = ["All", "Web Design", "Frontend", "Web App", "E-commerce", "UI/UX", "Mobile"];
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(project => project.category.includes(activeCategory));
  return <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Explore some of my recent work and discover how I bring ideas to life.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0 bg-primary hover:bg-primary/90">
            <Link to="/projects">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className="bg-gray-900 hover:bg-gray-800">
              {category}
            </button>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <Link to={project.link} key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
              <div className="relative aspect-video overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.category.map((cat, index) => <Badge key={index} variant="secondary">{cat}</Badge>)}
                </div>
                <h3 className="text-xl font-bold mb-2 text-portfolio-navy">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};
export default ProjectsShowcase;