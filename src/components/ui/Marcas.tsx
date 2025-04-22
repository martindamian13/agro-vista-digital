import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Marcas = () => {
  const marcas = [
    { 
      id: 1, 
      nombre: 'AgroSeed', 
      imagen: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmUlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      color: '#4a8c2a'
    },
    { 
      id: 2, 
      nombre: 'GreenGrow', 
      imagen: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWdyaWN1bHR1cmUlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      color: '#2e8b57'
    },
    { 
      id: 3, 
      nombre: 'BioHarvest', 
      imagen: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFncmljdWx0dXJlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      color: '#0a5c36'
    },
    { 
      id: 4, 
      nombre: 'FarmTech', 
      imagen: 'https://images.unsplash.com/photo-1583845112203-2932990235b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmljdWx0dXJlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      color: '#8bc34a'
    },
    { 
      id: 5, 
      nombre: 'CropMaster', 
      imagen: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWdyaWN1bHR1cmUlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      color: '#6b8c42'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-rotate with pause on hover
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const carousel = document.querySelector('.marcas-carousel');
    
    const startInterval = () => {
      intervalId = setInterval(() => {
        setDirection(1);
        setCurrentIndex(prev => (prev + 1) % marcas.length);
      }, 3000);
    };
    
    const pauseInterval = () => clearInterval(intervalId);
    
    startInterval();
    carousel?.addEventListener('mouseenter', pauseInterval);
    carousel?.addEventListener('mouseleave', startInterval);
    
    return () => {
      clearInterval(intervalId);
      carousel?.removeEventListener('mouseenter', pauseInterval);
      carousel?.removeEventListener('mouseleave', startInterval);
    };
  }, [marcas.length]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % marcas.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + marcas.length) % marcas.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.5,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0.5,
      scale: 0.95,
      transition: { duration: 0.5 }
    })
  };

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7ed] to-[#e0f0d8] -skew-y-2 origin-top-left"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0a5c36] to-[#4a8c2a]"
          >
            Nuestras Marcas
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 h-1 w-24 bg-gradient-to-r from-[#0a5c36] to-[#8bc34a] mx-auto"
          ></motion.div>
        </div>

        <div className="marcas-carousel relative h-[400px] md:h-[500px]">
          {/* Navigation arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-xl hover:bg-white transition-all backdrop-blur-sm"
            aria-label="Previous brand"
          >
            <svg className="w-6 h-6 text-[#0a5c36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-xl hover:bg-white transition-all backdrop-blur-sm"
            aria-label="Next brand"
          >
            <svg className="w-6 h-6 text-[#0a5c36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel items */}
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full px-8">
                {marcas.map((marca, index) => (
                  <motion.div
                    key={marca.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: `0 25px 50px -12px ${marca.color}40`
                    }}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      index === 2 ? 'z-10' : 'z-0'
                    }`}
                  >
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border border-white/20"></div>
                    <div className="relative h-full flex flex-col">
                      <div className="aspect-square flex items-center justify-center p-6">
                        <motion.img 
                          src={marca.imagen} 
                          alt={marca.nombre}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          whileHover={{ scale: 1.05 }}
                        />
                      </div>
                      <div className="p-4 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-center text-gray-800">{marca.nombre}</h3>
                        <div className="mt-2 h-1 w-12 mx-auto bg-current opacity-20" style={{ color: marca.color }}></div>
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 30px ${marca.color}20`,
                        mixBlendMode: 'overlay'
                      }}
                    ></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {marcas.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#0a5c36] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to brand ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marcas;