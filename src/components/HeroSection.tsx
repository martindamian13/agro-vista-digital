
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3')",
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Soluciones de calidad para el sector agropecuario
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Distribución de productos y servicios especializados para 
            agricultores y ganaderos, con un compromiso con la calidad y el medio ambiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/productos" className="btn-primary text-center">
              Ver productos
            </Link>
            <Link to="/contacto" className="bg-white text-agro-green hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center">
              Contactar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
