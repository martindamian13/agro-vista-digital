
import { Link } from 'react-router-dom';
import { Leaf, Droplet, Tractor, Users, ShoppingBag } from 'lucide-react';

const ProductsSection = () => {
  const categories = [
    {
      name: 'Fertilizantes',
      description: 'Mejore el rendimiento de sus cultivos con nuestros fertilizantes de alta calidad.',
      icon: <Leaf className="h-10 w-10 text-agro-green" />,
      link: '/productos#fertilizantes',
    },
    {
      name: 'Semillas',
      description: 'Semillas seleccionadas para garantizar cultivos productivos y resistentes.',
      icon: <Droplet className="h-10 w-10 text-agro-green" />,
      link: '/productos#semillas',
    },
    {
      name: 'Equipamiento',
      description: 'Maquinaria y herramientas para todas las necesidades de su explotación.',
      icon: <Tractor className="h-10 w-10 text-agro-green" />,
      link: '/productos#equipamiento',
    },
    {
      name: 'Ganadería',
      description: 'Productos especializados para el cuidado y la alimentación animal.',
      icon: <Users className="h-10 w-10 text-agro-green" />,
      link: '/productos#ganaderia',
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
            className="bg-white rounded-lg p-6 shadow-md card-hover flex flex-col"
          >
            <div className="mb-4">
              {category.icon}
            </div>
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
