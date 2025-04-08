
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Search } from 'lucide-react';
import { useState } from 'react';

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const newsItems = [
    {
      id: 1,
      title: 'Nuevas técnicas de irrigación para cultivos sostenibles',
      excerpt: 'Descubra las últimas innovaciones en sistemas de riego que permiten un uso más eficiente del agua en sus cultivos.',
      content: 'La gestión eficiente del agua es uno de los mayores desafíos para la agricultura moderna. Los nuevos sistemas de riego por goteo inteligentes permiten reducir el consumo de agua hasta en un 30% mientras mantienen o mejoran el rendimiento de los cultivos. Estos sistemas utilizan sensores de humedad del suelo y datos meteorológicos para ajustar automáticamente la cantidad de agua aplicada, evitando tanto el exceso como la escasez de riego. Además, facilitan la fertirrigación precisa, aplicando los nutrientes exactamente donde y cuando las plantas los necesitan.',
      date: '10 abril, 2025',
      category: 'Innovación',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3',
    },
    {
      id: 2,
      title: 'Avances en la nutrición del ganado bovino',
      excerpt: 'Nuevos estudios revelan mejoras significativas en la productividad ganadera gracias a dietas especializadas.',
      content: 'Investigadores han desarrollado nuevas fórmulas alimenticias que pueden aumentar la producción de leche en un 15% y mejorar la conversión alimenticia en ganado de carne. Estas dietas incorporan probióticos específicos para rumiantes que optimizan la flora ruminal, mejorando la digestión y reduciendo la producción de metano. También incluyen combinaciones precisas de minerales orgánicos que mejoran la inmunidad y reducen los problemas reproductivos. Los ganaderos que han implementado estos avances reportan no solo mejor productividad, sino también una reducción en los costos veterinarios.',
      date: '05 abril, 2025',
      category: 'Ganadería',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3',
    },
    {
      id: 3,
      title: 'Feria Internacional Agropecuaria 2025',
      excerpt: 'AgroVista Digital estará presente en la principal feria del sector. Venga a visitarnos y conozca nuestras novedades.',
      content: 'Del 15 al 18 de mayo, la ciudad de Madrid acogerá la Feria Internacional Agropecuaria 2025, el evento más importante del sector en Europa. AgroVista Digital participará con un stand en el pabellón 7, donde presentaremos nuestras últimas novedades en fertilizantes ecológicos y sistemas de monitoreo de cultivos. Los visitantes podrán participar en demostraciones prácticas y consultar con nuestros especialistas sobre soluciones personalizadas. Además, ofreceremos condiciones especiales para pedidos realizados durante la feria. ¡Le esperamos!',
      date: '28 marzo, 2025',
      category: 'Eventos',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3',
    },
    {
      id: 4,
      title: 'Control biológico de plagas: una alternativa eficaz y sostenible',
      excerpt: 'El uso de depredadores naturales y microorganismos beneficiosos está ganando terreno frente a los pesticidas químicos.',
      content: 'El control biológico de plagas está demostrando ser una alternativa cada vez más viable a los pesticidas químicos tradicionales. Estudios recientes han documentado que la introducción estratégica de insectos depredadores puede controlar poblaciones de plagas con una eficacia similar a los métodos químicos, pero sin los efectos negativos sobre el medio ambiente y la biodiversidad. Además, los agricultores que implementan estos métodos reportan beneficios económicos a medio plazo, ya que si bien la inversión inicial puede ser mayor, los costos disminuyen significativamente con el tiempo al establecerse un equilibrio natural en el ecosistema agrícola.',
      date: '22 marzo, 2025',
      category: 'Agricultura Sostenible',
      image: 'https://images.unsplash.com/photo-1626920369764-b5534a21c5a9?ixlib=rb-4.0.3',
    },
    {
      id: 5,
      title: 'Nueva regulación europea sobre productos fitosanitarios',
      excerpt: 'La UE aprueba normativas más estrictas para el uso de productos químicos en la agricultura.',
      content: 'El Parlamento Europeo ha aprobado nuevas regulaciones que reducirán en un 50% el uso de pesticidas químicos para 2030. Esta normativa afectará directamente a agricultores y distribuidores, quienes deberán adaptarse a métodos de control más sostenibles. La legislación incluye programas de apoyo para facilitar la transición, con subsidios para la implementación de técnicas de control biológico y agricultura de precisión. AgroVista Digital ya está trabajando para ofrecer a nuestros clientes alternativas que cumplan con la nueva normativa, manteniendo la eficacia en el control de plagas y enfermedades.',
      date: '15 marzo, 2025',
      category: 'Legislación',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3',
    },
    {
      id: 6,
      title: 'Nuevas variedades de trigo resistentes a la sequía',
      excerpt: 'Investigadores desarrollan variedades que pueden mantener rendimientos con menos agua.',
      content: 'Un equipo internacional de genetistas ha desarrollado nuevas variedades de trigo que pueden mantener hasta el 80% de su rendimiento con un 40% menos de agua. Estas variedades, que estarán disponibles para los agricultores a partir de la próxima temporada, han sido probadas con éxito en diferentes condiciones climáticas. Las plantas modificadas desarrollan sistemas radiculares más profundos y tienen mecanismos mejorados para evitar la pérdida de agua a través de las hojas. Esta innovación podría ser clave para mantener la producción de cereales en regiones donde el cambio climático está reduciendo las precipitaciones o aumentando la variabilidad de las mismas.',
      date: '05 marzo, 2025',
      category: 'Innovación',
      image: 'https://images.unsplash.com/photo-1536781602661-88ef781bc7b0?ixlib=rb-4.0.3',
    },
  ];

  const filteredNews = newsItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(newsItems.map(item => item.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-agro-green-dark py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias y Actualidad</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Manténgase informado sobre las últimas novedades del sector agropecuario y ganadero.
            </p>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-agro-gray-light py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar noticias..."
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-agro-green focus:border-agro-green"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-wrap gap-2">
                <button 
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    searchTerm === '' ? 'bg-agro-green text-white' : 'bg-white text-gray-700 hover:bg-agro-green-light/20'
                  }`}
                  onClick={() => setSearchTerm('')}
                >
                  Todos
                </button>
                
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                      searchTerm === category ? 'bg-agro-green text-white' : 'bg-white text-gray-700 hover:bg-agro-green-light/20'
                    }`}
                    onClick={() => setSearchTerm(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* News List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item) => (
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
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium px-3 py-1 bg-agro-green-light/20 text-agro-green-dark rounded-full">
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <button className="text-agro-green hover:text-agro-green-dark font-medium inline-flex items-center">
                        Leer más
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No se encontraron resultados</h3>
                <p className="text-gray-600 mb-6">No hay noticias que coincidan con su búsqueda.</p>
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="btn-outline"
                >
                  Ver todas las noticias
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-agro-earth/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-agro-earth-dark mb-6">
              Suscríbase a nuestro boletín de noticias
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Reciba las últimas noticias del sector y actualizaciones sobre nuestros productos directamente en su correo electrónico.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Su correo electrónico"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-agro-earth focus:border-agro-earth"
                />
                <button className="btn-secondary sm:whitespace-nowrap">
                  Suscribirse
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Respetamos su privacidad. Puede darse de baja en cualquier momento.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Noticias;
