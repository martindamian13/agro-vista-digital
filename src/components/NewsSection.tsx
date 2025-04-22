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
      title: 'Feria innovar 2025',
      excerpt: 'Epicentro del agro, la tecnología y la sostenibilidad, culmina con más de 25.000 visitantes.',
      content: 'La gestión eficiente del agua es uno de los mayores desafíos para la agricultura moderna. Los nuevos sistemas de riego por goteo inteligentes permiten reducir el consumo de agua hasta en un 30% mientras mantienen o mejoran el rendimiento de los cultivos. Estos sistemas utilizan sensores de humedad del suelo y datos meteorológicos para ajustar automáticamente la cantidad de agua aplicada, evitando tanto el exceso como la escasez de riego. Además, facilitan la fertirrigación precisa, aplicando los nutrientes exactamente donde y cuando las plantas los necesitan.',
      date: '25 Marzo, 2025',
      category: 'Innovación',
      image: '/images/news1.jpg',
      link: '/noticias/1',
    },
    {
      id: 2,
      title: 'Malla CTA',
      excerpt: 'La Solucion #1 para reducir la temperatura en corrales y establos con la innovadora tecnologia Israeli.',
      content: 'Investigadores han desarrollado nuevas fórmulas alimenticias que pueden aumentar la producción de leche en un 15% y mejorar la conversión alimenticia en ganado de carne. Estas dietas incorporan probióticos específicos para rumiantes que optimizan la flora ruminal, mejorando la digestión y reduciendo la producción de metano. También incluyen combinaciones precisas de minerales orgánicos que mejoran la inmunidad y reducen los problemas reproductivos. Los ganaderos que han implementado estos avances reportan no solo mejor productividad, sino también una reducción en los costos veterinarios.',
      date: '05 abril, 2025',
      category: 'Ganadería',
      image: '/images/news2.png',
      link: '/noticias/2',
    },
    {
      id: 3,
      title: 'Silobolsas',
      excerpt: 'Descubra cómo las Silobolsas de CMP AGRO pueden transformar su producción, ofreciendo almacenamiento eficiente, seguro y de bajo costo.',
      content: 'Del 15 al 18 de mayo, la ciudad de Madrid acogerá la Feria Internacional Agropecuaria 2025, el evento más importante del sector en Europa. AgroVista Digital participará con un stand en el pabellón 7, donde presentaremos nuestras últimas novedades en fertilizantes ecológicos y sistemas de monitoreo de cultivos. Los visitantes podrán participar en demostraciones prácticas y consultar con nuestros especialistas sobre soluciones personalizadas. Además, ofreceremos condiciones especiales para pedidos realizados durante la feria. ¡Le esperamos!',
      date: '28 marzo, 2025',
      category: 'Eventos',
      image: '/images/news3.png',
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
