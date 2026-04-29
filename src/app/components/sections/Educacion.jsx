import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';

import certificaciones from '../../data/certificaciones';
import { useState } from "react";

const CardCert = ({ cert, color }) => {
	return (
		<div className={`min-w-[260px] max-w-xs mx-auto ${color} border border-[#444] rounded-xl shadow-inner p-6 flex flex-col gap-2 items-center transition-colors duration-300`}>
			<div className="flex items-center gap-3 mb-2">
				<span className="font-semibold text-lg text-white">{cert.titulo}</span>
			</div>
			<span className="text-primary font-semibold">{cert.entidad}</span>
			{/* Imagen SIEMPRE visible, sin skeleton */}
			<div className="w-32 h-20 flex items-center justify-center my-2">
				<Image
					src={cert.imagen}
					alt={cert.titulo + " imagen"}
					width={112}
					height={64}
					loading="lazy"
					className="w-28 h-16 object-contain rounded shadow"
				/>
			</div>
			<span className="text-gray-100 text-sm text-center">{cert.desc}</span>
			{/* Mostrar URL solo si es insignia o diploma */}
			{cert.url && cert.tipo === "insignia" && (
				<a
					href={cert.url}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 px-3 py-1 bg-white/20 text-primary font-semibold rounded hover:bg-white/40 transition-colors text-xs"
				>
					Ver insignia
				</a>
			)}
			{cert.url && cert.tipo === "diploma" && (
				<a
					href={cert.url}
					download
					className="mt-2 px-3 py-1 bg-white/20 text-primary font-semibold rounded hover:bg-white/40 transition-colors text-xs"
				>
					Descargar diploma
				</a>
			)}
		</div>
	);
};

const Educacion = () => {
	return (
		<section id="Educación" className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-0 bg-gradient-to-br from-[#10121a] via-[#181c23] to-[#23243a]">
			<h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary text-center">Educación Profesional</h2>
			<div className="w-full max-w-3xl grid gap-8 md:grid-cols-2 mb-16">
				{/* Universidad */}
				<div className="bg-[#23272e] border border-[#444] rounded-xl shadow-inner p-6 flex flex-col gap-2">
					<div className="flex items-center gap-3 mb-2">
						<Image src="/globe.svg" alt="UNLP" width={32} height={32} className="w-8 h-8" />
						<span className="font-semibold text-lg text-white">Licenciatura en Informática</span>
					</div>
					<span className="text-primary font-semibold">Universidad Nacional de La Plata (En curso)</span>
					<span className="text-gray-300 text-sm">Enfoque: Algoritmos y Estructuras de Datos, Organización de Computadoras, Matemática Discreta.</span>
				</div>
				{/* IBM Cybersecurity */}
				<div className="bg-[#23272e] border border-[#444] rounded-xl shadow-inner p-6 flex flex-col gap-2">
					<div className="flex items-center gap-3 mb-2">
						<Image src="/window.svg" alt="IBM" width={32} height={32} className="w-8 h-8" />
						<span className="font-semibold text-lg text-white">Cybersecurity Analyst Professional Certificate</span>
					</div>
					<span className="text-primary font-semibold">IBM (En curso)</span>
					<span className="text-gray-300 text-sm">Enfoque: Respuesta a incidentes, análisis de vulnerabilidades, seguridad en redes y monitoreo SIEM.</span>
				</div>
			</div>
			<h3 className="text-2xl font-bold mb-6 text-primary text-center">Otras Certificaciones y Cursos</h3>
			<div className="w-full flex flex-col items-center justify-center gap-4 relative" style={{minHeight: 260}}>
				<div className="flex justify-center w-full">
					<Swiper
						modules={[EffectCards, Navigation]}
						effect="cards"
						grabCursor={true}
						navigation={true}
						loop={false}
						rewind={true}
						className="!flex !justify-center !items-center"
						style={{ maxWidth: 340, minHeight: 220, margin: '0 auto' }}
					>
						{certificaciones.map((cert, idx) => {
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
								<SwiperSlide key={cert.titulo + idx}>
									<CardCert cert={cert} color={color} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				{/* Animación y texto de deslizar */}
				<div className="w-full flex flex-col items-center mt-6 select-none">
					{/* Animación de mano/mouse deslizándose */}
					<div className="w-12 h-12 flex items-center justify-center mb-1 relative">
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="absolute left-0 right-0 mx-auto">
							{/* Mano */}
							<g className="animate-hand-move">
								<ellipse cx="24" cy="36" rx="10" ry="6" fill="#bbb" opacity="0.25" />
								<rect x="20" y="18" width="8" height="16" rx="4" fill="#fff" stroke="#888" strokeWidth="2" />
								<rect x="22" y="12" width="4" height="10" rx="2" fill="#fff" stroke="#888" strokeWidth="2" />
							</g>
							{/* Flechas izquierda y derecha */}
							<g>
								<polyline points="10,24 4,28 10,32" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow-left" />
								<polyline points="38,24 44,28 38,32" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-arrow-right" />
							</g>
						</svg>
						<style>{`
							.animate-hand-move {
								animation: hand-move 1.6s infinite cubic-bezier(.4,0,.2,1);
							}
							@keyframes hand-move {
								0% { transform: translateX(0px); }
								20% { transform: translateX(-16px); }
								40% { transform: translateX(0px); }
								60% { transform: translateX(16px); }
								80% { transform: translateX(0px); }
								100% { transform: translateX(0px); }
							}
							.animate-arrow-left {
								opacity: 0;
								animation: arrow-left 1.6s infinite cubic-bezier(.4,0,.2,1);
							}
							@keyframes arrow-left {
								0% { opacity: 0; }
								10% { opacity: 1; }
								20% { opacity: 0; }
								100% { opacity: 0; }
							}
							.animate-arrow-right {
								opacity: 0;
								animation: arrow-right 1.6s infinite cubic-bezier(.4,0,.2,1);
							}
							@keyframes arrow-right {
								60% { opacity: 0; }
								70% { opacity: 1; }
								80% { opacity: 0; }
								100% { opacity: 0; }
							}
						`}</style>
					</div>
					<span className="text-gray-300 text-sm font-medium animate-pulse">Deslizá las tarjetas para ver más</span>
				</div>
			</div>
		</section>
	);
};

export default Educacion;
