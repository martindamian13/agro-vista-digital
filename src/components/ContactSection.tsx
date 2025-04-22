import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-agro-green-dark">Ubicaciones</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conectamos el campo con la tecnología. Visítenos en cualquiera de nuestras sucursales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location Card Template */}
          {[
            {
              city: "Asunción",
              address: "Avda. Artigas 4145 c/ Gral. Delgado",
              phones: ["(0981) 176 060", "(0983) 352 029", "(0982) 163 262"],
              email: "asuncion@agrovista.com.py"
            },
            {
              city: "Minga Guazú",
              address: "Ruta 2 Km. 14",
              phones: ["(0981) 253 081", "(0983) 846 825"],
              email: "minga@agrovista.com.py"
            },
            {
              city: "Loma Plata",
              address: "Oficina 4 - Predio Plasti Chaco",
              phones: ["(0986) 289 494"],
              email: "lomaplata@agrovista.com.py"
            }
          ].map((location, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-agro-green-light/10 p-6 border-b border-gray-100">
                <h3 className="text-2xl font-semibold text-agro-green-dark">{location.city}</h3>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-agro-green-light/20 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-agro-green-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Dirección</p>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-agro-green-light/20 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-agro-green-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Teléfonos</p>
                    {location.phones.map((phone, i) => (
                      <a 
                        key={i} 
                        href={`tel:${phone.replace(/\D/g, '')}`}
                        className="block text-gray-600 hover:text-agro-green-dark transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-agro-green-light/20 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-agro-green-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href={`mailto:${location.email}`}
                      className="text-gray-600 hover:text-agro-green-dark transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="mt-16 bg-agro-green-light/5 border border-agro-green-light/20 rounded-xl p-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="p-3 bg-agro-green-dark rounded-full">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Horario de atención</h4>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-600">
                <p>Lunes a Viernes: <span className="font-medium">9:00 - 18:00</span></p>
                <p>Sábados: <span className="font-medium">9:00 - 14:00</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;