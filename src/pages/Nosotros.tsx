
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Users, Award, Globe, Leaf, Heart } from 'lucide-react';

const Nosotros = () => {
  const milestones = [
    {
      year: 2005,
      title: 'Fundación de la empresa',
      description: 'AgroVista Digital comienza como una pequeña empresa familiar dedicada a la distribución de productos agrícolas.',
    },
    {
      year: 2010,
      title: 'Expansión al sector ganadero',
      description: 'Ampliamos nuestra gama de productos para incluir soluciones específicas para el sector ganadero.',
    },
    {
      year: 2015,
      title: 'Certificación de calidad ISO 9001',
      description: 'Obtenemos la certificación ISO 9001, reafirmando nuestro compromiso con la calidad en todos nuestros procesos.',
    },
    {
      year: 2020,
      title: 'Transformación digital',
      description: 'Implementamos nuevas tecnologías para mejorar nuestros servicios y acercarnos más a nuestros clientes.',
    },
    {
      year: 2023,
      title: 'Compromiso con la sostenibilidad',
      description: 'Lanzamos nuestra línea de productos ecológicos y adoptamos prácticas empresariales sostenibles.',
    },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-agro-green" />,
      title: 'Orientación al cliente',
      description: 'Ponemos a nuestros clientes en el centro de todo lo que hacemos, ofreciendo soluciones que respondan a sus necesidades reales.',
    },
    {
      icon: <Award className="h-8 w-8 text-agro-green" />,
      title: 'Excelencia',
      description: 'Buscamos la máxima calidad en nuestros productos y servicios, superando las expectativas de nuestros clientes.',
    },
    {
      icon: <Globe className="h-8 w-8 text-agro-green" />,
      title: 'Sostenibilidad',
      description: 'Nos comprometemos con prácticas respetuosas con el medio ambiente y promovemos la agricultura sostenible.',
    },
    {
      icon: <Leaf className="h-8 w-8 text-agro-green" />,
      title: 'Innovación',
      description: 'Apostamos por las nuevas tecnologías y métodos para mejorar constantemente nuestra oferta.',
    },
    {
      icon: <Heart className="h-8 w-8 text-agro-green" />,
      title: 'Responsabilidad social',
      description: 'Contribuimos al desarrollo de las comunidades rurales y apoyamos iniciativas sociales en el entorno agrícola.',
    },
  ];

  const team = [
    {
      name: 'Antonio Rodríguez',
      position: 'Director General',
      bio: 'Con más de 25 años de experiencia en el sector agropecuario, Antonio lidera la visión estratégica de AgroVista Digital.',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      name: 'Laura Martínez',
      position: 'Directora Técnica',
      bio: 'Ingeniera agrónoma especializada en sistemas de producción sostenible, responsable del desarrollo de nuevos productos.',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: 'Carlos Sánchez',
      position: 'Jefe de Ventas',
      bio: 'Experto en marketing agrícola, coordina nuestra red comercial y desarrolla estrategias de venta adaptadas al sector.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'Elena García',
      position: 'Responsable de Sostenibilidad',
      bio: 'Especialista en medio ambiente, lidera nuestras iniciativas de sostenibilidad y el desarrollo de productos ecológicos.',
      image: 'https://randomuser.me/api/portraits/women/62.jpg',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative">
          <div 
            className="absolute inset-0 z-0 bg-center bg-cover" 
            style={{ 
              backgroundImage: "url('https://vimeo.com/994813569?share=copy')",
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="container mx-auto px-4 py-24 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Conozca nuestra historia, valores y el equipo que hace posible que AgroVista Digital 
              sea su socio de confianza en el sector agropecuario.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Nuestra Historia</h2>
              <p className="text-lg text-gray-600">
                Desde nuestros humildes comienzos como una pequeña empresa familiar, 
                hasta convertirnos en un referente en la distribución de productos agropecuarios, 
                siempre hemos mantenido nuestro compromiso con la calidad y el servicio al cliente.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-agro-green-light/30 z-0"></div>
              
              <div className="relative z-10">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year} 
                    className={`flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="inline-block px-4 py-1 bg-agro-green text-white text-sm font-medium rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 mx-4">
                      <div className="w-10 h-10 rounded-full bg-agro-green flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="bg-agro-gray-light py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Nuestros Valores</h2>
              <p className="text-lg text-gray-600">
                Los valores que nos guían en nuestra misión de ser un socio confiable 
                para el sector agropecuario y ganadero.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title} 
                  className="bg-white p-6 rounded-lg shadow-md card-hover flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-3 rounded-full bg-agro-green-light/20">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">Nuestro Equipo</h2>
              <p className="text-lg text-gray-600">
                Conozca a las personas que hacen posible que AgroVista Digital ofrezca 
                soluciones de calidad para el sector agropecuario.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div 
                  key={member.name} 
                  className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-agro-green font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-agro-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Quiere formar parte de nuestra historia?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Únase a nuestra lista de clientes satisfechos y descubra cómo nuestros productos 
              pueden ayudarle a alcanzar sus objetivos agropecuarios.
            </p>
            <a 
              href="/contacto" 
              className="bg-white text-agro-green hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-colors duration-300"
            >
              Contáctenos hoy
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
