
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Productos = () => {
  const categories = [
    {
      id: 'forraje',
      name: 'Forraje',
      description: 'Nuestra línea de forrajes está diseñada para proporcionar a su ganado una alimentación completa y balanceada, optimizando la producción y el bienestar animal.',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      products: [
        {
          name: 'Forraje Premium para Vacuno',
          description: 'Mezcla nutritiva especialmente formulada para ganado vacuno.',
          image: 'https://images.unsplash.com/photo-1596998792336-1ea7923eacdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Heno de Alfalfa Alta Calidad',
          description: 'Heno de alfalfa con alto contenido proteico y fibra digestible.',
          image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Forraje Mixto para Equinos',
          description: 'Combinación equilibrada para una alimentación completa de caballos.',
          image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
    {
      id: 'encilaje',
      name: 'Encilaje',
      description: 'Ofrecemos soluciones completas para el proceso de ensilaje, garantizando la conservación óptima de los nutrientes y una fermentación adecuada.',
      image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      products: [
        {
          name: 'Aditivos para Ensilaje',
          description: 'Inoculantes que mejoran la fermentación y conservación del ensilado.',
          image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Film para Ensilaje',
          description: 'Film de alta resistencia para la conservación óptima del ensilado.',
          image: 'https://images.unsplash.com/photo-1560693225-b8507d6f3aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Equipos de Compactación',
          description: 'Maquinaria especializada para una compactación eficiente del ensilado.',
          image: 'https://images.unsplash.com/photo-1583472245632-711b641d4c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
    {
      id: 'transporte',
      name: 'Transporte',
      description: 'Equipos y soluciones para el transporte eficiente y seguro de sus productos agrícolas y ganaderos, adaptados a sus necesidades específicas.',
      image: 'https://images.unsplash.com/photo-1599171042187-7dbbdba66bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      products: [
        {
          name: 'Remolques Agrícolas',
          description: 'Remolques resistentes para el transporte de todo tipo de materiales.',
          image: 'https://images.unsplash.com/photo-1669248658154-b763d5b5776c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Sistemas de Carga Automáticos',
          description: 'Equipos que optimizan el proceso de carga y descarga de materiales.',
          image: 'https://images.unsplash.com/photo-1627729935037-ce63d60e93a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Transporte Especializado para Ganado',
          description: 'Vehículos adaptados para el transporte seguro y confortable de animales.',
          image: 'https://images.unsplash.com/photo-1598458255717-050b4e00d25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
    {
      id: 'almacenamiento',
      name: 'Almacenamiento',
      description: 'Soluciones innovadoras para el almacenamiento de sus productos, diseñadas para mantener la calidad y minimizar las pérdidas.',
      image: 'https://images.unsplash.com/photo-1592863576424-faa3419a17bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      products: [
        {
          name: 'Silos Metálicos',
          description: 'Estructuras robustas para el almacenamiento a largo plazo de granos y forrajes.',
          image: 'https://images.unsplash.com/photo-1534507355056-a94e557f8758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Sistemas de Control de Humedad',
          description: 'Equipos que mantienen las condiciones óptimas para la conservación de productos.',
          image: 'https://images.unsplash.com/photo-1566330542764-391c1f1430ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          name: 'Almacenes Modulares',
          description: 'Soluciones adaptables a cualquier necesidad de almacenamiento en su explotación.',
          image: 'https://images.unsplash.com/photo-1571055582845-66e9dec7e480?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="h-64 overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
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
