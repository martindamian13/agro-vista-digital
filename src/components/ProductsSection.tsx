import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

interface Category {
  name: string;
  description: string;
  image: string; // Cambiado a string para la URL de la imagen
  link: string;
}

const ProductsSection = () => {
  const categories: Category[] = [
    {
      name: 'Forraje: Ensilaje y Transporte',
      description: 'Alimentación de alta calidad para todo tipo de ganado, proporcionando los nutrientes esenciales.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/Almacenamiento-Ensilaje-etc/mallas-fardos/Artboard-13-2.jpg',
      link: '/productos#forraje',
    },
    {
      name: 'Envases y Contenedores',
      description: 'Soluciones para la conservación de forrajes mediante fermentación anaeróbica de alta calidad.',
      image: 'https://images.unsplash.com/photo-1675583097478-fc4d6c436890?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/productos#encilaje',
    },
    {
      name: 'Horticultura',
      description: 'Equipamiento especializado para el transporte eficiente de productos agrícolas y ganaderos.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/horticultura/invernaderos/PELICULA-INVERNADERO-AGRINPLEX-CMPAGRO-1.jpg',
      link: '/productos#transporte',
    },
    {
      name: 'Otros Productos',
      description: 'Sistemas de almacenamiento diseñados para preservar la calidad de sus productos por más tiempo.',
      image: 'https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/otros/precintos/precinto-indicativo.jpg',
      link: '/productos#almacenamiento',
    },
  ];

  return (
    <section className="container-section">
      <div className="text-center mb-12">
        <h2 className="section-title">Nuestros Productos</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de productos para satisfacer todas las necesidades 
          del sector agropecuario y ganadero.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="bg-white rounded-lg overflow-hidden shadow-md card-hover flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{category.name}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
              <Link 
                to={category.link} 
                className="text-agro-green hover:text-agro-green-dark font-medium inline-flex items-center"
              >
                Ver productos
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/productos" className="btn-secondary inline-flex items-center">
          <ShoppingBag className="mr-2 h-5 w-5" />
          Ver todos los productos
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;