
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Leaf, Droplet, Tractor, Users } from 'lucide-react';

const Productos = () => {
  const categories = [
    {
      id: 'fertilizantes',
      name: 'Fertilizantes',
      description: 'Nuestra gama de fertilizantes está diseñada para proporcionar a sus cultivos todos los nutrientes necesarios para un crecimiento óptimo.',
      icon: <Leaf className="h-10 w-10 text-agro-green" />,
      products: [
        {
          name: 'Fertilizante Orgánico Premium',
          description: 'Fertilizante 100% orgánico para todo tipo de cultivos.',
          image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3',
        },
        {
          name: 'NPK Equilibrado',
          description: 'Fórmula equilibrada de nitrógeno, fósforo y potasio.',
          image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3',
        },
        {
          name: 'Fertilizante Foliar',
          description: 'Aplicación directa sobre las hojas para una rápida absorción.',
          image: 'https://images.unsplash.com/photo-1529613980608-54300618b4e0?ixlib=rb-4.0.3',
        },
      ]
    },
    {
      id: 'semillas',
      name: 'Semillas',
      description: 'Ofrecemos semillas de alta calidad, seleccionadas para garantizar cultivos productivos y resistentes a enfermedades.',
      icon: <Droplet className="h-10 w-10 text-agro-green" />,
      products: [
        {
          name: 'Semillas de Trigo Certificadas',
          description: 'Variedades de alto rendimiento y resistencia.',
          image: 'https://images.unsplash.com/photo-1574323347407-f5e1bdca0998?ixlib=rb-4.0.3',
        },
        {
          name: 'Semillas de Maíz Híbrido',
          description: 'Mayor producción y resistencia a plagas.',
          image: 'https://images.unsplash.com/photo-1551042863-dbb4938b111f?ixlib=rb-4.0.3',
        },
        {
          name: 'Semillas de Hortalizas Ecológicas',
          description: 'Cultivo ecológico certificado para huertos.',
          image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3',
        },
      ]
    },
    {
      id: 'equipamiento',
      name: 'Equipamiento',
      description: 'Maquinaria y herramientas especializadas para todas las necesidades de su explotación agrícola o ganadera.',
      icon: <Tractor className="h-10 w-10 text-agro-green" />,
      products: [
        {
          name: 'Sistema de Riego por Goteo',
          description: 'Eficiencia en el uso del agua para todo tipo de cultivos.',
          image: 'https://images.unsplash.com/photo-1566330542764-391c1f1430ad?ixlib=rb-4.0.3',
        },
        {
          name: 'Herramientas de Labranza',
          description: 'Set completo para preparación del terreno.',
          image: 'https://images.unsplash.com/photo-1598458255717-050b4e00d25d?ixlib=rb-4.0.3',
        },
        {
          name: 'Equipos de Protección',
          description: 'Seguridad para la aplicación de productos fitosanitarios.',
          image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3',
        },
      ]
    },
    {
      id: 'ganaderia',
      name: 'Ganadería',
      description: 'Productos especializados para el cuidado y la alimentación de todo tipo de ganado.',
      icon: <Users className="h-10 w-10 text-agro-green" />,
      products: [
        {
          name: 'Alimentación Balanceada',
          description: 'Piensos formulados para cada especie y etapa de crecimiento.',
          image: 'https://images.unsplash.com/photo-1566251037378-5e04e2778cc7?ixlib=rb-4.0.3',
        },
        {
          name: 'Suplementos Vitamínicos',
          description: 'Complementos para reforzar la salud animal.',
          image: 'https://images.unsplash.com/photo-1631633176432-274bc7d25fac?ixlib=rb-4.0.3',
        },
        {
          name: 'Productos Sanitarios',
          description: 'Medicamentos y productos para la prevención de enfermedades.',
          image: 'https://images.unsplash.com/photo-1604159088044-2d48656b1b6c?ixlib=rb-4.0.3',
        },
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-agro-green-dark py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Descubra nuestra amplia gama de productos de calidad para el sector agropecuario y ganadero.
            </p>
          </div>
        </div>
        
        {/* Products Sections */}
        {categories.map((category) => (
          <section 
            key={category.id} 
            id={category.id} 
            className="py-16 border-b border-gray-200 last:border-b-0"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  {category.icon}
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-3xl font-bold text-agro-green-dark mb-4">
                    {category.name}
                  </h2>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <button className="text-agro-green hover:text-agro-green-dark font-medium inline-flex items-center">
                        Más información
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
        
        {/* Call to Action */}
        <div className="bg-agro-green-light/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-agro-green-dark mb-6">
              ¿Necesita asesoramiento sobre nuestros productos?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Nuestro equipo técnico está a su disposición para ayudarle a encontrar la mejor solución 
              para sus necesidades específicas.
            </p>
            <a 
              href="/contacto" 
              className="btn-primary"
            >
              Contactar con un especialista
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Productos;
