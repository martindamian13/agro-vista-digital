import { MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-agro-green-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctenos</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Estamos aquí para ayudarle. Visítenos en cualquiera de nuestras sucursales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Asunción Location */}
          <div className="bg-agro-green p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Asunción</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dirección:</p>
                  <p className="text-gray-200">Avda. Artigas 4145 c/ Gral. Delgado</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Teléfonos:</p>
                  <p className="text-gray-200">(0981) 176 060</p>
                  <p className="text-gray-200">(0983) 352 029</p>
                  <p className="text-gray-200">(0982) 163 262</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Minga Guazú Location */}
          <div className="bg-agro-green p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Minga Guazú</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dirección:</p>
                  <p className="text-gray-200">Ruta 2 Km. 14</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Teléfonos:</p>
                  <p className="text-gray-200">(0981) 253 081</p>
                  <p className="text-gray-200">(0983) 846 825</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Loma Plata Location */}
          <div className="bg-agro-green p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Loma Plata</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Dirección:</p>
                  <p className="text-gray-200">Oficina 4 - Predio Plasti Chaco</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Teléfonos:</p>
                  <p className="text-gray-200">(0986) 289 494</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-medium mb-3">Horario de atención:</h4>
          <p className="text-gray-200">Lunes a Viernes: 9:00 - 18:00</p>
          <p className="text-gray-200">Sábados: 9:00 - 14:00</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;