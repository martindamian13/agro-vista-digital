
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

  return (
    <section className="container-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 relative">
                <div className="absolute -top-4 left-6 text-agro-green">
                  <Quote className="h-10 w-10" />
                </div>
                
                <div className="pt-6">
                  <p className="text-base text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
