
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contacto = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-agro-green-dark py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Estamos aquí para responder a sus preguntas y ayudarle a encontrar las mejores soluciones para sus necesidades.
            </p>
          </div>
        </div>
        
        {/* Google Maps Embed (Placeholder) */}
        <div className="w-full h-96 bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12309.882315844998!2d-3.703512087158203!3d40.416944100000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d376c614b%3A0x7d5173a586839cab!2zUGxhemEgTWF5b3IsIE1hZHJpZCwgRXNwYcOxYQ!5e0!3m2!1ses!2ses!4v1681134934268!5m2!1ses!2ses" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de AgroVista Digital"
          ></iframe>
        </div>
        
        {/* Contact Form Section (Reused from Home) */}
        <ContactSection />
        
        {/* FAQs Section */}
        <section className="py-16 bg-agro-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-agro-green-dark">
                Preguntas Frecuentes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    ¿Realizan envíos a toda España?
                  </h3>
                  <p className="text-gray-600">
                    Sí, realizamos envíos a toda la península ibérica. Para pedidos a las Islas Canarias, Baleares, Ceuta y Melilla, por favor contáctenos para consultar las condiciones específicas.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    ¿Ofrecen asesoramiento técnico para sus productos?
                  </h3>
                  <p className="text-gray-600">
                    Absolutamente. Nuestro equipo de técnicos especializados está disponible para asesorarle sobre la mejor solución para sus necesidades específicas. Puede contactarnos por teléfono o email para concertar una consulta.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    ¿Cuál es el tiempo de entrega habitual?
                  </h3>
                  <p className="text-gray-600">
                    Para productos en stock, el tiempo de entrega suele ser de 2-3 días laborables. Para productos especiales o grandes volúmenes, el plazo puede variar. Siempre le informaremos del tiempo estimado al realizar su pedido.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    ¿Tienen tienda física donde pueda ver los productos?
                  </h3>
                  <p className="text-gray-600">
                    Sí, contamos con una tienda física en Madrid donde puede ver y consultar nuestros productos. Le recomendamos contactar previamente para asegurarse de que los productos que le interesan están disponibles para su demostración.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    ¿Ofrecen descuentos para compras al por mayor?
                  </h3>
                  <p className="text-gray-600">
                    Sí, ofrecemos condiciones especiales para compras de gran volumen y para cooperativas agrícolas. Contacte con nuestro departamento comercial para obtener un presupuesto personalizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
