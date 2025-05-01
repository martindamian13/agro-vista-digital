import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const logos = Array.from({ length: 19 }, (_, index) => ({
  id: index + 1,
  src: `/images/logos/logo${index + 1}.png`,
}));

const Marcas = () => {
  return (
    <section
      id="marcasSect"
      className="relative py-16"
      style={{
        backgroundImage: "url('/images/background3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay oscuro con blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-black/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        

        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay]}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="bg-white/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-44 h-28 mx-auto flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                <img
                  src={logo.src}
                  alt={`Logo ${logo.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Marcas;

