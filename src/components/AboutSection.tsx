
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    'Soluciones innovadoras y tecnológicas',
    'Marcas internacionales cuidadosamente seleccionadas',
    'Amplio portafolio de productos de primer nivel',
    'Asesoramiento técnico personalizado',
    'Productos adaptados a las necesidades del cliente',
    'Compromiso con el Agronegocio paraguayo',
  ];

  return (
    <section className="container-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="rounded-lg overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3" 
              alt="Equipo de CMP AGRO"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cmp-green/80 to-transparent p-6">
              <span className="text-white font-medium text-lg">Compromiso con el campo</span>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="text-gray-600 mb-6">
            Somos una empresa líder que tiene como objetivo dar soluciones innovadoras y 
            tecnológicas al Agronegocio del Paraguay. 🇵🇾
          </p>
          <p className="text-gray-600 mb-6">
            Seleccionamos cuidadosamente las marcas internacionales que representamos. 
            Esto con el objetivo de ofrecer un amplio portafolio de productos de primer nivel.
          </p>
          <p className="text-gray-600 mb-6">
            Nuestros técnicos están siempre disponibles para brindar asesoramiento 
            personalizado y garantizar a los clientes, productos y soluciones de 
            acuerdo a sus necesidades.
          </p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cmp-green-light/20 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-cmp-green" />
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
