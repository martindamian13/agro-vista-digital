import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2a3a30] text-gray-200"> {/* Green-gray background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/logo1.png" 
                alt="CMP AGRO Logo" 
                className="h-12"
              />
            </div>
            <p className="text-sm text-gray-300">
              Distribución de productos de calidad para sectores agropecuarios y ganaderos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-[#c1d4b7] uppercase tracking-wider mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {['Inicio', 'Productos', 'Noticias', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-sm hover:text-[#a3c293] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-medium text-[#c1d4b7] uppercase tracking-wider mb-4">Productos</h3>
            <ul className="space-y-2">
              {['Fertilizantes', 'Semillas', 'Equipamiento', 'Sanidad Animal', 'Alimentación'].map((product) => (
                <li key={product}>
                  <Link 
                    to="/productos" 
                    className="text-sm hover:text-[#a3c293] transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-[#c1d4b7] uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#a3c293] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Av. Agricultores 1234, Ciudad Rural, España</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#a3c293] flex-shrink-0" />
                <a href="tel:+34912345678" className="text-sm hover:text-[#a3c293]">+34 912 345 678</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#a3c293] flex-shrink-0" />
                <a href="mailto:info@cmpagro.com" className="text-sm hover:text-[#a3c293]">info@cmpagro.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#3a4a40]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} CMP AGRO. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacidad" className="text-xs text-gray-400 hover:text-[#a3c293]">Privacidad</Link>
              <Link to="/terminos" className="text-xs text-gray-400 hover:text-[#a3c293]">Términos</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;