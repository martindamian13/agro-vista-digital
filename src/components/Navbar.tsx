import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/90 text-gray-800 backdrop-blur-md shadow-md"
                    : "bg-transparent text-white"
            }`}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block" href="/">
                            <span className="sr-only">Home</span>
                            <div className="flex items-center space-x-2">
                                <img 
                                    src="/lovable-uploads/logo1.png" 
                                    alt="Company Logo" 
                                    className="h-10 w-auto object-contain" 
                                />
                            </div>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-8 text-sm">
                                <li>
                                    <a className="hover:text-green-700 transition-colors font-medium" href="/">
                                        Inicio
                                    </a>
                                </li>

                                <li>
                                    <a className="hover:text-green-700 transition-colors font-medium" href="#productSect">
                                        Soluciones
                                    </a>
                                </li>

                                <li>
                                    <a className="hover:text-green-700 transition-colors font-medium" href="/noticias">
                                        Noticias
                                    </a>
                                </li>

                                <li>
                                    <a className="hover:text-green-700 transition-colors font-medium" href="#nosotros">
                                        Nosotros
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-green-700 transition-colors"
                                    href="/contacto"
                                >
                                    Contacto
                                </a>
                            </div>

                            <div className="block md:hidden">
                                <button 
                                    onClick={toggleMobileMenu}
                                    className="rounded bg-gray-100 p-2 text-gray-700 hover:text-green-600 transition-colors"
                                    aria-label="Toggle menu"
                                >
                                    {isMobileMenuOpen ? (
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="pt-4 pb-6 space-y-4 px-4">
                            <a href="/" className="block text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md px-4 py-3">
                                Inicio
                            </a>
                            <a href="/productos" className="block text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md px-4 py-3">
                                Productos
                            </a>
                            <a href="/nosotros" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md">
                                Nosotros
                            </a>
                            <a href="/noticias" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md">
                                Blog
                            </a>
                            <a href="/contacto" className="block text-center px-4 py-3 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
                                Contacto
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
