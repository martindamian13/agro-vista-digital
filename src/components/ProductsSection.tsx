import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ProductsSection = () => {
  const isMobile = useIsMobile();

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
    <section id="productSect" className="container-section">
      <div className="text-center mb-12">
        <h2 className="section-title">Soluciones</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de productos para satisfacer todas las necesidades 
          del sector agropecuario y ganadero.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="bg-white/30 backdrop-blur-md border border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col"
          >
            <div className="h-48 rounded-xl overflow-hidden">
              <Link to={`/productos#${category.id}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              <Link
                to={`/productos#${category.id}`}
                className="hover:text-green-600 transition-colors"
              >
                {category.name}
              </Link>
            </h3>
            <p className="text-sm text-gray-700 mt-2 line-clamp-3 flex-grow">
              {category.description}
            </p>
            <div className="mt-auto">
              <Link
                to={`/productos#${category.id}`}
                className="text-green-600 font-medium hover:underline"
              >
                Ver más
              </Link>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/productos" className="btn-secondary inline-flex items-center">
          <ShoppingBag className="mr-2 h-5 w-5" />
          Ver todas las categorías
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
