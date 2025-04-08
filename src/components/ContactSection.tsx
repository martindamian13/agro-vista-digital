
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una aplicación real, aquí iría el código para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Le responderemos lo antes posible.');
    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className="bg-agro-green-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctenos</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Estamos aquí para ayudarle. Envíenos un mensaje y nos pondremos en contacto con usted lo antes posible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-agro-green p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Dirección:</p>
                    <p className="text-gray-200">Av. Agricultores 1234, Ciudad Rural, España</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Teléfono:</p>
                    <p className="text-gray-200">+34 912 345 678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-200">info@agrovista.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-medium mb-3">Horario de atención:</h4>
                <p className="text-gray-200">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-200">Sábados: 9:00 - 14:00</p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg text-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-agro-green-dark">Envíenos un mensaje</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green focus:border-agro-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green focus:border-agro-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green focus:border-agro-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green focus:border-agro-green"
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center bg-agro-green hover:bg-agro-green-dark text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
                >
                  Enviar mensaje
                  <Send className="h-5 w-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
