import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const logos = Array.from({ length: 19 }, (_, index) => ({
  id: index + 1,
  src: `/images/logos/logo${index + 1}.png`,
}));

const Marcas = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex-shrink-0 w-36 h-20 mx-auto transition-transform duration-300 hover:scale-110">
                <img
                  src={logo.src}
                  alt={`Logo ${logo.id}`}
                  className="w-full h-full object-contain cursor-pointer"
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