
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import ProjectsShowcase from '@/components/home/ProjectsShowcase';
import BlogSection from '@/components/home/BlogSection';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <ProjectsShowcase />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
