import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ChevronRight, Download } from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

// Define types for our data structure
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  detailLink?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

const Productos = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    location.hash ? location.hash.substring(1) : null
  );

  // Categories data with their products
  const categories: Category[] = [
    {
      id: 'forraje',
      name: 'Forraje: Ensilaje y Transporte',
      description: 'Nuestra línea de forrajes está diseñada para proporcionar a su ganado una alimentación completa y balanceada, optimizando la producción y el bienestar animal.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/Almacenamiento-Ensilaje-etc/mallas-fardos/Artboard-13-2.jpg',
      products: [
        {
          id: 'prod-01',
          name: 'Forraje Premium para Vacuno',
          description: 'Mezcla nutritiva especialmente formulada para ganado vacuno.',
          image: 'https://images.unsplash.com/photo-1596998792336-1ea7923eacdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-02',
          name: 'Heno de Alfalfa Alta Calidad',
          description: 'Heno de alfalfa con alto contenido proteico y fibra digestible.',
          image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-03',
          name: 'Forraje Mixto para Equinos',
          description: 'Combinación equilibrada para una alimentación completa de caballos.',
          image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
    {
      id: 'encilaje',
      name: 'Envases y Contenedores',
      description: 'Ofrecemos soluciones completas para el proceso de ensilaje, garantizando la conservación óptima de los nutrientes y una fermentación adecuada.',
      image: 'https://images.unsplash.com/photo-1675583097478-fc4d6c436890?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      products: [
        {
          id: 'prod-04',
          name: 'Aditivos para Ensilaje',
          description: 'Inoculantes que mejoran la fermentación y conservación del ensilado.',
          image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-05',
          name: 'Film para Ensilaje',
          description: 'Film de alta resistencia para la conservación óptima del ensilado.',
          image: 'https://images.unsplash.com/photo-1560693225-b8507d6f3aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-06',
          name: 'Equipos de Compactación',
          description: 'Maquinaria especializada para una compactación eficiente del ensilado.',
          image: 'https://images.unsplash.com/photo-1583472245632-711b641d4c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
    {
      id: 'horticultura',
      name: 'Horticultura',
      description: 'Equipamiento especializado para el transporte eficiente de productos agrícolas y ganaderos, adaptados a sus necesidades específicas.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/horticultura/invernaderos/PELICULA-INVERNADERO-AGRINPLEX-CMPAGRO-1.jpg',
      products: [
        {
          id: 'prod-07',
          name: 'Remolques Agrícolas',
          description: 'Remolques resistentes para el transporte de todo tipo de materiales.',
          image: 'https://images.unsplash.com/photo-1669248658154-b763d5b5776c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-08',
          name: 'Sistemas de Carga Automáticos',
          description: 'Equipos que optimizan el proceso de carga y descarga de materiales.',
          image: 'https://images.unsplash.com/photo-1627729935037-ce63d60e93a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-09',
          name: 'Transporte Especializado para Ganado',
          description: 'Vehículos adaptados para el transporte seguro y confortable de animales.',
          image: 'https://images.unsplash.com/photo-1598458255717-050b4e00d25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
    {
      id: 'otros',
      name: 'Otros Productos',
      description: 'Soluciones innovadoras para el almacenamiento de sus productos, diseñadas para mantener la calidad y minimizar las pérdidas.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/otros/precintos/precinto-indicativo.jpg',
      products: [
        {
          id: 'prod-10',
          name: 'Silos Metálicos',
          description: 'Estructuras robustas para el almacenamiento a largo plazo de granos y forrajes.',
          image: 'https://images.unsplash.com/photo-1534507355056-a94e557f8758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-11',
          name: 'Sistemas de Control de Humedad',
          description: 'Equipos que mantienen las condiciones óptimas para la conservación de productos.',
          image: 'https://images.unsplash.com/photo-1566330542764-391c1f1430ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 'prod-12',
          name: 'Almacenes Modulares',
          description: 'Soluciones adaptables a cualquier necesidad de almacenamiento en su explotación.',
          image: 'https://images.unsplash.com/photo-1571055582845-66e9dec7e480?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    navigate(`/productos#${categoryId}`);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    navigate('/productos');
  };

  const selectedCategoryData = selectedCategory
    ? categories.find(category => category.id === selectedCategory)
    : null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat py-32 text-white" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1744230673231-865d54a0aba4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Cambia esta URL por la imagen que desees
            backgroundPosition: 'center center', // Asegura que la imagen esté centrada
            backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
            filter: 'brightness(0.7)', // Aplica un filtro oscuro para mejorar el contraste
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div> {/* Filtro adicional */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold">Nuestros Productos</h1>
            <p className="mt-4 text-lg">Encuentra las mejores soluciones para tus necesidades agrícolas</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-gray-700 hover:text-cmp-green inline-flex items-center">
                    Inicio
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <Link to="/productos" className="ml-1 text-gray-700 hover:text-cmp-green md:ml-2">
                      Productos
                    </Link>
                  </div>
                </li>
                {selectedCategoryData && (
                  <li>
                    <div className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-cmp-green md:ml-2">
                        {selectedCategoryData.name}
                      </span>
                    </div>
                  </li>
                )}
              </ol>
            </nav>
          </div>

          {/* Resto del contenido */}
          {selectedCategory === null ? (
            <>
              <h2 className="text-3xl font-bold text-cmp-blue mb-8">Categorías de Productos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <Card 
                    key={category.id} 
                    className="overflow-hidden card-hover cursor-pointer h-full flex flex-col"
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{category.name}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                      <button 
                        className="text-cmp-green hover:text-cmp-green-dark font-medium inline-flex items-center"
                      >
                        Ver productos
                        <ChevronRight className="h-5 w-5 ml-1" />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            selectedCategoryData && (
              <>
                {/* Productos de la categoría seleccionada */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <button 
                      onClick={handleBackToCategories}
                      className="mb-4 md:mb-0 inline-flex items-center text-cmp-blue hover:text-cmp-blue-dark font-medium"
                    >
                      <ArrowLeft className="h-5 w-5 mr-1" />
                      Volver a categorías
                    </button>
                    <h2 className="text-3xl font-bold text-cmp-blue mt-4">{selectedCategoryData.name}</h2>
                    <p className="text-gray-600 mt-2 max-w-3xl">{selectedCategoryData.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {selectedCategoryData.products.map((product) => (
                    <Card 
                      key={product.id} 
                      className="overflow-hidden card-hover h-full flex flex-col"
                    >
                      <div className="h-48 overflow-hidden">
                        <Link to={`/producto/${product.id}`}>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </Link>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">
                          <Link to={`/producto/${product.id}`} className="hover:text-cmp-green transition-colors">
                            {product.name}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                        <div className="flex justify-between items-center mt-2">
                          <a 
                            href="#" 
                            className="text-cmp-blue hover:text-cmp-blue-dark font-medium inline-flex items-center"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Ficha técnica
                          </a>
                          <Link 
                            to={`/producto/${product.id}`}
                            className="text-cmp-green hover:text-cmp-green-dark font-medium"
                          >
                            Ver detalles
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Pagination className="my-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </>
            )
          )}
        </div>
        
        {/* Call to Action */}
        <div className="bg-cmp-green-light/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-cmp-green-dark mb-6">
              ¿Necesita asesoramiento sobre nuestros productos?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Nuestro equipo técnico está a su disposición para ayudarle a encontrar la mejor solución 
              para sus necesidades específicas.
            </p>
            <Link 
              to="/contacto" 
              className="btn-primary"
            >
              Contactar con un especialista
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Productos;
