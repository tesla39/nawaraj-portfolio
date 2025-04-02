
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-deep-blue">
      <main className="flex-grow">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
