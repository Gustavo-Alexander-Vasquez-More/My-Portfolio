import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import proyectos from '../../data/proyectos';
import { EffectCoverflow, Navigation } from 'swiper/modules';

const CardProyecto = ({ proyecto, color }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className={`min-w-[260px] max-w-xs mx-auto ${color} border border-[#444] rounded-xl shadow-inner p-6 flex flex-col gap-2 items-center transition-colors duration-300`}>
      <div className="flex items-center gap-3 mb-2">
        <Image src={proyecto.icon} alt={proyecto.titulo} width={32} height={32} className="w-8 h-8" />
        <span className="font-semibold text-lg text-white">{proyecto.titulo}</span>
      </div>
      <span className="text-primary font-semibold">{proyecto.entidad}</span>
      {/* Imagen con lazy load y skeleton */}
      <div className="w-32 h-20 flex items-center justify-center my-2">
        {!imgLoaded && (
          <div className="w-28 h-16 bg-gray-300/30 rounded animate-pulse" />
        )}
        <Image
          src={proyecto.imagen}
          alt={proyecto.titulo + " imagen"}
          width={112}
          height={64}
          loading="lazy"
          className={`w-28 h-16 object-contain rounded shadow ${imgLoaded ? "block" : "hidden"}`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <span className="text-gray-100 text-sm text-center">{proyecto.desc}</span>
      {/* Mostrar URL si existe */}
      {proyecto.url && (
        <a
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-3 py-1 bg-white/20 text-primary font-semibold rounded hover:bg-white/40 transition-colors text-xs"
        >
          Ver proyecto
        </a>
      )}
    </div>
  );
};

const Proyectos = () => {
  return (
    <section id="proyectos" className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-0 bg-[#141C2C]">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary text-center">Proyectos Destacados</h2>
      <div className="w-full flex flex-col items-center justify-center gap-4 relative" style={{minHeight: 260}}>
        <div className="flex justify-center w-full">
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor={false}
            allowTouchMove={false}
            navigation
            centeredSlides={false}
            initialSlide={0}
            slidesPerView={proyectos.length < 3 ? 1 : 3}
            loop={proyectos.length > 2}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              900: { slidesPerView: proyectos.length < 3 ? 1 : 3 },
            }}
            className="!flex !justify-center !items-center"
            style={{ maxWidth: 900, minHeight: 220, margin: '0 auto' }}
          >
            {proyectos.map((proyecto, idx) => {
              const colores = [
                'bg-gradient-to-br from-[#1e3c72] to-[#2a5298]',
                'bg-gradient-to-br from-[#42275a] to-[#734b6d]',
                'bg-gradient-to-br from-[#134e5e] to-[#71b280]',
                'bg-gradient-to-br from-[#ff9966] to-[#ff5e62]',
                'bg-gradient-to-br from-[#56ab2f] to-[#a8e063]',
                'bg-gradient-to-br from-[#614385] to-[#516395]',
              ];
              const color = colores[idx % colores.length];
              return (
                <SwiperSlide key={proyecto.titulo + idx}>
                  <CardProyecto proyecto={proyecto} color={color} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* Flechas de navegación Swiper (ya aparecen por navigation) */}
      </div>
    </section>
  );
};

export default Proyectos;
