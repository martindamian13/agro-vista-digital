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
        <section id="hero" className="relative">
          <HeroSection />
        </section>
        <NoticeSlider
            speed={30}
            notices={[
    { id: 1, text: '🌱 New Organic Fertilizer Line Now Available!' },
    { id: 2, text: '🚜 Harvest Festival: October 15-20, 2024' },
    { id: 3, text: '📢 20% Discount on Seasonal Seeds - Limited Time!' },
  ]}
        />

        <section id="products" className="relative">
          <ProductsSection />
        </section>

        <section id="about" className="relative">
          <AboutSection />
        </section>

        <section id="news" className="relative">
          <NewsSection />
        </section>

        <section id="testimonials" className="relative">
          <TestimonialSection />
        </section>

        <section id="brands" className="relative">
          <Marcas />
        </section>

        <section id="contact" className="relative">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;