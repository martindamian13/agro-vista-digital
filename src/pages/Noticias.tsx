import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Search } from 'lucide-react';
import { useState } from 'react';

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const newsItems = [
    {
      id: 1,
      title: 'Feria innovar 2025',
      excerpt: 'Epicentro del agro, la tecnología y la sostenibilidad, culmina con más de 25.000 visitantes.',
      content: 'La gestión eficiente del agua es uno de los mayores desafíos para la agricultura moderna. Los nuevos sistemas de riego por goteo inteligentes permiten reducir el consumo de agua hasta en un 30% mientras mantienen o mejoran el rendimiento de los cultivos. Estos sistemas utilizan sensores de humedad del suelo y datos meteorológicos para ajustar automáticamente la cantidad de agua aplicada, evitando tanto el exceso como la escasez de riego. Además, facilitan la fertirrigación precisa, aplicando los nutrientes exactamente donde y cuando las plantas los necesitan.',
      date: '25 Marzo, 2025',
      category: 'Innovación',
      image: 'https://cdn.app-sorteos.workers.dev/https://instagram.fasu4-1.fna.fbcdn.net/v/t51.2885-15/486220579_18053816954514665_204133777185950089_n.jpg?stp=dst-jpg_e35_tt6&cb=30a688f7-fa102a98&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fasu4-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGDqTKfcw39ReEXz3HniXzHdEKwgITg5mst5rrLTZ1o6kyTPdtVn6GU0wFgrtfhta0&_nc_ohc=Q5BB4Au4v3YQ7kNvwHCTmjE&_nc_gid=IIlhW9svBpfsHe9Ih6b0XA&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzU5NTU5NDk5MTY0NDY5NjEzOA%3D%3D.3-ccb7-5-cb30a688f7-fa102a98&oh=00_AfGFokRY4WNcnErI1dJ2Fb2640kosjynP4YdL-xaMtHDPg&oe=67FF2C4B&_nc_sid=fc8dfb',
    },
    {
      id: 2,
      title: 'Media Sombra',
      excerpt: 'CMP agro revoluciona el mercado con nuevas media sombras.',
      content: 'Investigadores han desarrollado nuevas fórmulas alimenticias que pueden aumentar la producción de leche en un 15% y mejorar la conversión alimenticia en ganado de carne. Estas dietas incorporan probióticos específicos para rumiantes que optimizan la flora ruminal, mejorando la digestión y reduciendo la producción de metano. También incluyen combinaciones precisas de minerales orgánicos que mejoran la inmunidad y reducen los problemas reproductivos. Los ganaderos que han implementado estos avances reportan no solo mejor productividad, sino también una reducción en los costos veterinarios.',
      date: '05 abril, 2025',
      category: 'Ganadería',
      image: 'https://cdn.app-sorteos.workers.dev/https://instagram.fasu4-1.fna.fbcdn.net/v/t51.2885-15/469748818_18042389327514665_5015443759900096491_n.jpg?stp=dst-jpg_e35_tt6&cb=30a688f7-fa102a98&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fasu4-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QERNrfbYWfXT48_oVUaSjdnk8uMEqL88RqWr2k2tuWRISDb0Aq-5LaPQawfmYNtOck&_nc_ohc=mmtf7GY_Sd4Q7kNvwHZyPXb&_nc_gid=SH8O5lZQ0nltBpt30889QQ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzUyMjIzODU3ODUyNDc3NDAyNA%3D%3D.3-ccb7-5-cb30a688f7-fa102a98&oh=00_AfEmE2uUfQsTRJbqc5Ifitxvm_RvcT1EO2JIjwnqJ7UxVA&oe=6803471C&_nc_sid=fc8dfb',
    },
    {
      id: 3,
      title: 'Silobolsas',
      excerpt: 'Descubra cómo las Silobolsas de CMP AGRO pueden transformar su producción, ofreciendo almacenamiento eficiente, seguro y de bajo costo.',
      content: 'Del 15 al 18 de mayo, la ciudad de Madrid acogerá la Feria Internacional Agropecuaria 2025, el evento más importante del sector en Europa. AgroVista Digital participará con un stand en el pabellón 7, donde presentaremos nuestras últimas novedades en fertilizantes ecológicos y sistemas de monitoreo de cultivos. Los visitantes podrán participar en demostraciones prácticas y consultar con nuestros especialistas sobre soluciones personalizadas. Además, ofreceremos condiciones especiales para pedidos realizados durante la feria. ¡Le esperamos!',
      date: '28 marzo, 2025',
      category: 'Eventos',
      image: 'https://cdn.app-sorteos.workers.dev/https://instagram.fasu4-1.fna.fbcdn.net/v/t51.2885-15/476086004_18048430181514665_7394206720860457408_n.jpg?stp=dst-jpg_e35_tt6&cb=30a688f7-fa102a98&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fasu4-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QF9_dXwB_KS1oZtIlu4oSl579F016AsOjXpwwhXrq885wupTCOjAgIjrbI4jfLk4MU&_nc_ohc=_1Lr_lvwhM0Q7kNvwFEuczR&_nc_gid=9i5zDh2ccYVqqYyMniCSIQ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzU2MDU4ODMxNzIxOTM4NzYxNg%3D%3D.3-ccb7-5-cb30a688f7-fa102a98&oh=00_AfEiKf2aMILbu6eKIIkzqQCYhStUJX30nl1JArNgqUEbAQ&oe=68034285&_nc_sid=fc8dfb',
    },
    {
      id: 4,
      title: 'Control biológico de plagas: una alternativa eficaz y sostenible',
      excerpt: 'El uso de depredadores naturales y microorganismos beneficiosos está ganando terreno frente a los pesticidas químicos.',
      content: 'El control biológico de plagas está demostrando ser una alternativa cada vez más viable a los pesticidas químicos tradicionales. Estudios recientes han documentado que la introducción estratégica de insectos depredadores puede controlar poblaciones de plagas con una eficacia similar a los métodos químicos, pero sin los efectos negativos sobre el medio ambiente y la biodiversidad. Además, los agricultores que implementan estos métodos reportan beneficios económicos a medio plazo, ya que si bien la inversión inicial puede ser mayor, los costos disminuyen significativamente con el tiempo al establecerse un equilibrio natural en el ecosistema agrícola.',
      date: '22 marzo, 2025',
      category: 'Agricultura Sostenible',
      image: '',
    },
    {
      id: 5,
      title: 'Nueva regulación europea sobre productos fitosanitarios',
      excerpt: 'La UE aprueba normativas más estrictas para el uso de productos químicos en la agricultura.',
      content: 'El Parlamento Europeo ha aprobado nuevas regulaciones que reducirán en un 50% el uso de pesticidas químicos para 2030. Esta normativa afectará directamente a agricultores y distribuidores, quienes deberán adaptarse a métodos de control más sostenibles. La legislación incluye programas de apoyo para facilitar la transición, con subsidios para la implementación de técnicas de control biológico y agricultura de precisión. AgroVista Digital ya está trabajando para ofrecer a nuestros clientes alternativas que cumplan con la nueva normativa, manteniendo la eficacia en el control de plagas y enfermedades.',
      date: '15 marzo, 2025',
      category: 'Legislación',
      image: '',
    },
    {
      id: 6,
      title: 'Nuevas variedades de trigo resistentes a la sequía',
      excerpt: 'Investigadores desarrollan variedades que pueden mantener rendimientos con menos agua.',
      content: 'Un equipo internacional de genetistas ha desarrollado nuevas variedades de trigo que pueden mantener hasta el 80% de su rendimiento con un 40% menos de agua. Estas variedades, que estarán disponibles para los agricultores a partir de la próxima temporada, han sido probadas con éxito en diferentes condiciones climáticas. Las plantas modificadas desarrollan sistemas radiculares más profundos y tienen mecanismos mejorados para evitar la pérdida de agua a través de las hojas. Esta innovación podría ser clave para mantener la producción de cereales en regiones donde el cambio climático está reduciendo las precipitaciones o aumentando la variabilidad de las mismas.',
      date: '05 marzo, 2025',
      category: 'Innovación',
      image: '',
    },
  ];

  const filteredNews = newsItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(newsItems.map(item => item.category))];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-agro-green-dark py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Noticias y Actualidad
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Manténgase informado sobre las últimas novedades del sector agropecuario y ganadero.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-agro-green-dark to-agro-green opacity-30"></div>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-white py-12 shadow-md">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6">
              {/* Search Bar */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar noticias..."
                    className="w-full pl-12 pr-6 py-3 rounded-full border-gray-300 focus:ring-agro-green focus:border-agro-green text-gray-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-gray-400 h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center justify-start gap-3">
                <button
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    searchTerm === ''
                      ? 'bg-agro-green text-white hover:bg-agro-green-dark'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSearchTerm('')}
                >
                  Todos
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      searchTerm === category
                        ? 'bg-agro-green text-white hover:bg-agro-green-dark'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium px-4 py-2 bg-agro-green-light/20 text-agro-green-dark rounded-full">
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-5 w-5 mr-2" />
                          {item.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-agro-green transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                      <button className="text-agro-green hover:text-agro-green-dark font-medium inline-flex items-center transition-colors duration-200">
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
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-agro-earth focus:border-agro-earth"
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
