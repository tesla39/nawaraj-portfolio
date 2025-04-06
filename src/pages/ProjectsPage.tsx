import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string[];
  link: string;
  featured?: boolean;
};
const projects: Project[] = [{
  id: 1,
  title: "Digital Menu",
  description: "A QR- based digital menu system to create beautiful & contactless menus with QR codes that enhance customer experience and simplify ordering at your restaurant.",
  imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  category: ["Web Design", "Frontend"],
  link: "https://astramind.netlify.app/",
  featured: true
}, {
  id: 2,
  title: "E-commerce Platform",
  description: "A complete e-commerce solution with product management, shopping cart, and checkout process. Developed with React, TypeScript, and Node.js.",
  imageUrl: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  category: ["Web App", "E-commerce"],
  link: "/projects/2",
  featured: true
 }, 
 //{
//   id: 3,
//   title: "Mobile Banking App",
//   description: "A user-friendly mobile banking application with advanced security features and intuitive UX. Designed in Figma and developed for iOS and Android.",
//   imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   category: ["UI/UX", "Mobile"],
//   link: "/projects/3",
//   featured: true
// }, {
//   id: 4,
//   title: "Health & Fitness Dashboard",
//   description: "A comprehensive dashboard for tracking fitness goals, nutrition, and overall health metrics with data visualization.",
//   imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   category: ["Web App", "Dashboard"],
//   link: "/projects/4"
// }, {
//   id: 5,
//   title: "Creative Agency Portfolio",
//   description: "A vibrant and interactive portfolio website for a creative agency, featuring case studies and team profiles.",
//   imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   category: ["Web Design", "Portfolio"],
//   link: "/projects/5"
// }, {
//   id: 6,
//   title: "Real Estate Listing Platform",
//   description: "A property listing website with advanced search features, virtual tours, and agent profiles for a premium real estate company.",
//   imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   category: ["Web App", "Real Estate"],
//   link: "/projects/6"
// }
];
const ProjectsPage = () => {
  const categories = ["All", "Web Design", "Frontend", "Web App", "E-commerce", "UI/UX", "Mobile", "Dashboard", "Portfolio", "Real Estate"];
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(project => project.category.includes(activeCategory));
  return <div className="flex flex-col min-h-screen bg-deep-blue">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-background/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">My Projects</h1>
              <p className="text-xl text-muted-foreground">
                Explore a collection of my work across various industries and technologies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className="text-slate-950 bg-slate-400 hover:bg-slate-300">
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
                    {project.featured && <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-white">Featured</Badge>
                      </div>}
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.category.map((cat, index) => <Badge key={index} variant="secondary">{cat}</Badge>)}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-portfolio-navy group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Link>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default ProjectsPage;