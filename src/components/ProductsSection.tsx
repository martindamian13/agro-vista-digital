import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ProductsSection = () => {
  const isMobile = useIsMobile();
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: isMobile ? 1 : 3, spacing: 18 },
  });

  const categories: Category[] = [
    {
      id: 'forraje',
      name: 'Forraje: Ensilaje y Transporte',
      description: 'Alimentación de alta calidad para todo tipo de ganado, proporcionando los nutrientes esenciales.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/Almacenamiento-Ensilaje-etc/mallas-fardos/Artboard-13-2.jpg',
    },
    {
      id: 'encilaje',
      name: 'Envases y Contenedores',
      description: 'Soluciones para la conservación de forrajes mediante fermentación anaeróbica de alta calidad.',
      image: 'https://images.unsplash.com/photo-1675583097478-fc4d6c436890?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'horticultura',
      name: 'Horticultura',
      description: 'Equipamiento especializado para el transporte eficiente de productos agrícolas y ganaderos.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/horticultura/invernaderos/PELICULA-INVERNADERO-AGRINPLEX-CMPAGRO-1.jpg',
    },
    {
      id: 'otros',
      name: 'Otros Productos',
      description: 'Sistemas de almacenamiento diseñados para preservar la calidad de sus productos por más tiempo.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/otros/precintos/precinto-indicativo.jpg',
    },
  ];

  return (
    <section
      id="productSect"
      className="relative text-white py-20 lg:py-32 flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/background3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-20 bg-gradient-to-br from-green-900/30 via-green-800/60 to-black/80 backdrop-blur-sm"></div>

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 px-6">
        {/* Texto a la izquierda */}
        <div className="lg:w-1/2 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Soluciones Innovadoras para el Agro-Negocio
          </h2>
          <p className="text-lg text-green-100 max-w-md leading-relaxed">
            Explora nuestras soluciones agrícolas diseñadas para optimizar el rendimiento con las mejores marcas Internacionales.
          </p>
          <div className="mt-6">
            <Link
              to="/productos"
              className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-lime-300 to-green-400 text-green-900 font-bold text-sm rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Ver todas las categorías
            </Link>
          </div>
        </div>

        {/* Carrusel a la derecha */}
        <div className="relative lg:w-1/2 w-full">
          {/* Flecha izquierda */}
          {!isMobile && (
            <button
              onClick={() => slider.current?.prev()}
              className="absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-green-700/50 p-2 rounded-full shadow-lg backdrop-blur-md transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
          )}

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {categories.map((category) => (
              <div key={category.id} className="keen-slider__slide px-1">
                <Card className="group relative bg-white/5 border border-green-600/30 rounded-2xl p-5 shadow-md hover:shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out transform hover:scale-[1.03] flex flex-col h-full">
                  <div className="h-48 rounded-xl overflow-hidden relative">
                    <Link to={`/productos#${category.id}`}>
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-4">
                    <Link
                      to={`/productos#${category.id}`}
                      className="hover:text-lime-400 transition-colors"
                    >
                      {category.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-green-100 mt-2 line-clamp-3">
                    {category.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      to={`/productos#${category.id}`}
                      className="text-lime-400 text-sm font-medium hover:underline"
                    >
                      Ver más
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          {!isMobile && (
            <button
              onClick={() => slider.current?.next()}
              className="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-green-700/30 p-2 rounded-full shadow-lg backdrop-blur-md transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
