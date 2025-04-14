import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6500); // 6 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gray-900 overflow-hidden h-screen max-h-[800px]">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        {showContent && (
          <div className="text-center w-full">
            {/* Main Title with Animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              CMP AGRO
            </h1>
            
            {/* Slogan with Beautiful Typography */}
            <div className="mb-8">
              <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white italic mb-2 animate-fade-in [animation-delay:200ms]">
                "Cultivando el futuro"
              </p>
              <div className="w-24 h-1 bg-cmp-red mx-auto my-4 animate-grow [animation-delay:400ms]"></div>
            </div>
            
            {/* Description with Better Readability */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:600ms]">
              Distribución de productos y servicios especializados para 
              agricultores y ganaderos, con compromiso de calidad y medio ambiente.
            </p>
            
            {/* CTA Buttons - Centered and Responsive */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:800ms]">
              <Link 
                to="/productos" 
                className="bg-cmp-red hover:bg-cmp-red/90 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
              >
                Nuestros Productos
              </Link>
              <Link 
                to="/contacto" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;