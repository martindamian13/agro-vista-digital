import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import NewsSection from '../components/NewsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import TestimonialSection from '../components/TestimonialSection';
import Marcas from '@/components/ui/Marcas';
import NoticeSlider from '@/components/NoticeSlider';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <NewsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;