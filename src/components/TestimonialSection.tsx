
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Los productos de AgroVista Digital han mejorado significativamente la productividad de nuestros cultivos. Su asesoramiento técnico es excepcional.",
      author: "María Rodríguez",
      position: "Agricultora, Cooperativa La Esperanza",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 2,
      text: "Trabajar con AgroVista Digital ha sido un acierto para nuestra ganadería. Sus productos para el cuidado animal son de primera calidad y su servicio es impecable.",
      author: "Juan García",
      position: "Ganadero, Granjas Santa Clara",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      text: "Desde que cambiamos a los fertilizantes de AgroVista, nuestros cultivos de olivos han mejorado notablemente en rendimiento y calidad.",
      author: "Carmen Martínez",
      position: "Propietaria, Olivos del Sur",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="container-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 md:p-10 relative">
          <div className="absolute -top-5 left-10 text-agro-green">
            <Quote className="h-12 w-12" />
          </div>
          
          <div className="pt-6">
            <p className="text-lg text-gray-700 mb-8 italic">
              "{current.text}"
            </p>
            
            <div className="flex items-center">
              <img
                src={current.image}
                alt={current.author}
                className="h-14 w-14 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">{current.author}</p>
                <p className="text-gray-600 text-sm">{current.position}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gray-300 hover:border-agro-green hover:text-agro-green transition-colors duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? 'bg-agro-green' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-2 rounded-full border border-gray-300 hover:border-agro-green hover:text-agro-green transition-colors duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
