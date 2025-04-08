
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    'Más de 20 años de experiencia en el sector',
    'Productos de la más alta calidad',
    'Asesoramiento técnico especializado',
    'Entregas rápidas y puntuales',
    'Compromiso con la sostenibilidad',
    'Servicio post-venta garantizado',
  ];

  return (
    <section className="container-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="rounded-lg overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3" 
              alt="Equipo de AgroVista Digital"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-agro-green-dark/80 to-transparent p-6">
              <span className="text-white font-medium text-lg">Compromiso con el campo</span>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="text-gray-600 mb-6">
            En <span className="font-semibold text-agro-green-dark">AgroVista Digital</span>, somos 
            una empresa familiar con más de 20 años de experiencia en la distribución 
            de productos para el sector agropecuario y ganadero.
          </p>
          <p className="text-gray-600 mb-6">
            Nuestro compromiso es ofrecer soluciones de calidad que ayuden a mejorar 
            la productividad y rentabilidad de nuestros clientes, siempre respetando 
            el medio ambiente y promoviendo prácticas sostenibles.
          </p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-agro-green-light/20 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-agro-green" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link to="/nosotros" className="btn-primary">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
