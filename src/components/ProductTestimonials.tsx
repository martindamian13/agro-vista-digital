
import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  image: string;
}

interface ProductTestimonialsProps {
  testimonials: Testimonial[];
}

const ProductTestimonials: React.FC<ProductTestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 mt-2">
            Opiniones de agricultores y ganaderos que ya utilizan este producto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 relative">
                <div className="absolute -top-4 left-6 text-cmp-green">
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

export default ProductTestimonials;
