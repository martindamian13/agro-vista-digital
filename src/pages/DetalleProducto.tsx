
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductSlider from '../components/ProductSlider';
import ProductDetail from '../components/ProductDetail';
import ProductTestimonials from '../components/ProductTestimonials';
import { ScrollArea } from '@/components/ui/scroll-area';

// Datos de muestra para el producto
const productData = {
  id: "prod-01",
  name: "Sistema de Almacenamiento para Ensilaje",
  category: "Ensilaje",
  description: "Sistema de almacenamiento premium diseñado para maximizar la conservación del ensilaje y mantener sus propiedades nutritivas por más tiempo. Fabricado con materiales de alta resistencia que proporcionan una barrera efectiva contra los elementos externos.",
  longDescription: "Nuestro sistema de almacenamiento para ensilaje está diseñado con la más alta tecnología para garantizar la conservación óptima de los nutrientes. La estructura multicapa proporciona una barrera efectiva contra el oxígeno, la humedad y los rayos UV, principales causantes de la degradación del ensilaje. \n\nEl sistema es fácil de instalar y mantener, adaptándose a diferentes tamaños de explotaciones agrícolas. Su diseño innovador permite una fácil apertura y cierre, minimizando la exposición al aire durante la extracción del ensilaje, lo que prolonga la vida útil del producto almacenado.",
  features: [
    "Material multicapa de alta resistencia",
    "Protección UV avanzada",
    "Sistema de cierre hermético",
    "Resistente a condiciones climáticas extremas",
    "Fácil instalación y mantenimiento",
    "Compatible con sistemas de extracción automatizados"
  ],
  specs: [
    { name: "Material", value: "Polietileno multicapa reforzado" },
    { name: "Espesor", value: "200 micras" },
    { name: "Resistencia a tensión", value: "25 MPa" },
    { name: "Temperatura de uso", value: "-30°C a 70°C" },
    { name: "Vida útil", value: "5 años (uso normal)" },
    { name: "Certificaciones", value: "ISO 9001, ISO 14001" }
  ],
  images: [
    "https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/Almacenamiento-Ensilaje-etc/mallas-fardos/Artboard-13-2.jpg",
    "https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/horticultura/invernaderos/PELICULA-INVERNADERO-AGRINPLEX-CMPAGRO-1.jpg",
    "https://raw.githubusercontent.com/Andrestorales7/image-assets/refs/heads/main/images/otros/precintos/precinto-indicativo.jpg",
    "https://images.unsplash.com/photo-1675583097478-fc4d6c436890?q=80&w=2070&auto=format&fit=crop"
  ],
  technicalDoc: {
    name: "Ficha Técnica - Sistema de Almacenamiento para Ensilaje",
    url: "#"
  },
  testimonials: [
    {
      id: 1,
      text: "Desde que implementamos este sistema en nuestra explotación, hemos notado una mejora significativa en la calidad de nuestro ensilaje. La conservación es excelente y el ganado lo acepta mejor.",
      author: "Carlos Martínez",
      position: "Ganadero, Hacienda Los Altos",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: 2,
      text: "Un producto excepcional que ha superado nuestras expectativas. La facilidad de uso y su durabilidad lo hacen una inversión muy rentable para nuestra cooperativa.",
      author: "Ana Gómez",
      position: "Directora, Cooperativa Agrícola del Sur",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      text: "La diferencia es notable. Anteriormente teníamos problemas con la degradación del ensilaje, pero con este sistema hemos reducido las pérdidas en más de un 40%.",
      author: "Miguel Sánchez",
      position: "Ingeniero Agrónomo, Finca El Paraíso",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    }
  ]
};

const DetalleProducto = () => {
  const { id } = useParams();
  // En una implementación real, buscaríamos el producto por ID
  // const product = fetchProductById(id);
  const product = productData;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollArea className="flex-grow">
        <main className="flex-grow">
          {/* Contenedor principal */}
          <div className="container mx-auto px-4 py-12">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-500 mb-6">
              <a href="/" className="hover:text-cmp-green">Inicio</a> {' > '} 
              <a href="/productos" className="hover:text-cmp-green">Productos</a> {' > '} 
              <span className="text-cmp-green">{product.name}</span>
            </div>
            
            {/* Contenido principal del producto */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Slider de imágenes */}
              <ProductSlider images={product.images} />
              
              {/* Detalles del producto */}
              <ProductDetail product={product} />
            </div>
            
            {/* Testimonios específicos */}
            <ProductTestimonials testimonials={product.testimonials} />
          </div>
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default DetalleProducto;
