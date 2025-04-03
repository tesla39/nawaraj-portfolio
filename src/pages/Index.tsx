
import React from 'react';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import ProjectsShowcase from '@/components/home/ProjectsShowcase';
import BlogSection from '@/components/home/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-deep-blue overflow-y-auto scroll-smooth">
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
