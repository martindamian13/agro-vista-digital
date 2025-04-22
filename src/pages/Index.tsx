
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import NewsSection from '../components/NewsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import TestimonialSection from '../components/TestimonialSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="bg-white">
          <ProductsSection />
        </div>
        <div className="bg-agro-gray-light">
          <AboutSection />
        </div>
        <div className="bg-white">
          <NewsSection />
        </div>
        <div className="bg-agro-gray-light">
          <TestimonialSection />
        </div>
        <div className="bg-white">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
