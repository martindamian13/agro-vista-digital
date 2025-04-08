
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-24">
          <h1 className="text-6xl font-bold text-cmp-blue mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Página no encontrada</p>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Lo sentimos, la página que está buscando no existe o ha sido movida.
          </p>
          <Link to="/" className="bg-cmp-red hover:bg-cmp-red/90 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300">
            Volver a la página principal
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
