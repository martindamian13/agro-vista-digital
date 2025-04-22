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

    const productSubcategories = [
        "Horticultura",
        "Ensilaje",
        "Agropecuaria",
        "Envases",
        "Maquinas Cerradoras",
        "Geomembranas",
        "Tesa"
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/90 text-gray-700 backdrop-blur-md shadow-md"
                    : "bg-transparent text-white"
            }`}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block" href="#">
                            <span className="sr-only">Home</span>
                            <div className="flex items-center space-x-2">
                                <img 
                                    src="/lovable-uploads/logo1.png" 
                                    alt="Company Logo" 
                                    className="h-14 w-auto object-contain" 
                                />
                            </div>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-8 text-sm">
                                <li>
                                    <a className="hover:text-teal-600 transition-colors font-medium" href="#">
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-teal-600 transition-colors font-medium" href="#">
                                        Soluciones
                                    </a>
                                </li>

                                <li className="relative group">
                                    <button className="flex items-center hover:text-teal-600 font-medium transition-colors">
                                        Productos
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 min-w-[220px] z-10 border border-gray-100 text-gray-700">
                                        {productSubcategories.map((subcategory) => (
                                            <a
                                                key={subcategory}
                                                href="#"
                                                className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-teal-600"
                                            >
                                                {subcategory}
                                            </a>
                                        ))}
                                    </div>
                                </li>

                                <li>
                                    <a className="hover:text-teal-600 transition-colors font-medium" href="#">
                                        Nosotros
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-teal-600 transition-colors font-medium" href="#">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 transition-colors"
                                    href="#"
                                >
                                    Contacto
                                </a>
                            </div>

                            <div className="block md:hidden">
                                <button 
                                    onClick={toggleMobileMenu}
                                    className="rounded bg-gray-100 p-2 text-gray-700 hover:text-teal-600 transition-colors"
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
                            <a href="#" className="block text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md px-4 py-3">
                                Inicio
                            </a>
                            <div className="px-4 py-3">
                                <button className="w-full text-left text-base font-medium text-gray-700 hover:text-teal-600 flex justify-between items-center">
                                    Productos
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="mt-3 pl-5 space-y-3">
                                    {productSubcategories.map((subcategory) => (
                                        <a
                                            key={subcategory}
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md"
                                        >
                                            {subcategory}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <a href="#" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                                Nosotros
                            </a>
                            <a href="#" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">
                                Blog
                            </a>
                            <a href="#" className="block text-center px-4 py-3 text-base font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700">
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
