import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewsSection = () => {
  const isMobile = useIsMobile();
  
  const newsItems = [
    {
      id: 1,
      title: 'Nuevas técnicas de irrigación para cultivos sostenibles',
      excerpt: 'Descubra las últimas innovaciones en sistemas de riego que permiten un uso más eficiente del agua en sus cultivos.',
      date: '10 abril, 2025',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3',
      link: '/noticias/1',
    },
    {
      id: 2,
      title: 'Avances en la nutrición del ganado bovino',
      excerpt: 'Nuevos estudios revelan mejoras significativas en la productividad ganadera gracias a dietas especializadas.',
      date: '05 abril, 2025',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3',
      link: '/noticias/2',
    },
    {
      id: 3,
      title: 'Feria Internacional Agropecuaria 2025',
      excerpt: 'AgroVista Digital estará presente en la principal feria del sector. Venga a visitarnos y conozca nuestras novedades.',
      date: '28 marzo, 2025',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3',
      link: '/noticias/3',
    },
  ];

  return (
    <section className="bg-agro-gray-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Últimas Noticias</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manténgase informado sobre las novedades del sector y nuestra empresa
          </p>
        </div>
        
        {isMobile ? (
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {newsItems.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        <Link to={item.link} className="hover:text-agro-green transition-colors duration-300">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <Link 
                        to={item.link} 
                        className="text-agro-green hover:text-agro-green-dark font-medium inline-flex items-center"
                      >
                        Leer más
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    <Link to={item.link} className="hover:text-agro-green transition-colors duration-300">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link 
                    to={item.link} 
                    className="text-agro-green hover:text-agro-green-dark font-medium inline-flex items-center"
                  >
                    Leer más
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link to="/noticias" className="btn-outline">
            Ver todas las noticias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
