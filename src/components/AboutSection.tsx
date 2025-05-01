import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    <section
      id="nosotrosSect"
      className="relative py-20 px-6 text-white"
      style={{
        backgroundImage: `url('/images/background2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Capa oscura + blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-black/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagen con superposición */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden w-11/12 shadow-lg border border-green-600/20">
            <AspectRatio ratio={4 / 3} className="relative">
              <img
                src="https://www.cmpproductos.com.py//wp-content//uploads//2024//06//WhatsApp-Image-2024-06-06-at-14.32.04-1.jpeg"
                alt="Equipo de CMP AGRO"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-6">
                <span className="text-white font-medium text-lg">Compromiso con el campo</span>
              </div>
            </AspectRatio>
          </div>
        </div>

        {/* Texto y características */}
        <div className="backdrop-blur-md bg-white/5 border border-green-500/20 rounded-2xl p-8 shadow-lg">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg">
            Sobre Nosotros
          </h2>
          <p className="text-green-100 mb-4">
            Somos una empresa líder que tiene como objetivo dar soluciones innovadoras y 
            tecnológicas al Agronegocio del Paraguay. 🇵🇾
          </p>
          <p className="text-green-100 mb-4">
            Seleccionamos cuidadosamente las marcas internacionales que representamos. 
            Esto con el objetivo de ofrecer un amplio portafolio de productos de primer nivel.
          </p>
          <p className="text-green-100 mb-6">
            Nuestros técnicos están siempre disponibles para brindar asesoramiento 
            personalizado y garantizar a los clientes, productos y soluciones de 
            acuerdo a sus necesidades.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-lime-400/20 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-lime-400" />
                </div>
                <span className="text-green-100">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/nosotros"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-lime-300 to-green-400 text-green-900 font-bold text-sm rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
