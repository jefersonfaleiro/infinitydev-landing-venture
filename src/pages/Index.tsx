
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Career from '../components/Career';
import AI from '../components/AI';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "InfinityDev Mentorias - Tecnologia e Educação";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Career />
        <AI />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
