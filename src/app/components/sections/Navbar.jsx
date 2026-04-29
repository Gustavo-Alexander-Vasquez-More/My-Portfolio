
"use client";

import React, { useState } from "react";


const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinks = (
		<>
			<a
				href="#inicio"
				className="relative block md:inline px-3 py-1 rounded-lg transition-all duration-300 hover:text-primary hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] hover:ring-2 hover:ring-primary hover:bg-white/10"
			>
				Inicio
			</a>
			<a
				href="#sobremi"
				className="relative block md:inline px-3 py-1 rounded-lg transition-all duration-300 hover:text-primary hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] hover:ring-2 hover:ring-primary hover:bg-white/10"
			>
				SobreMi
			</a>
			<a
				href="#Educación"
				className="relative block md:inline px-3 py-1 rounded-lg transition-all duration-300 hover:text-primary hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] hover:ring-2 hover:ring-primary hover:bg-white/10"
			>
				Educación
			</a>
			<a
				href="#proyectos"
				className="relative block md:inline px-3 py-1 rounded-lg transition-all duration-300 hover:text-primary hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] hover:ring-2 hover:ring-primary hover:bg-white/10"
			>
				Proyectos
			</a>
			<a
				href="#contacto"
				className="relative block md:inline px-3 py-1 rounded-lg transition-all duration-300 hover:text-primary hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] hover:ring-2 hover:ring-primary hover:bg-white/10"
			>
				Contacto
			</a>
		</>
	);

	return (
		<nav
			className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-sm flex items-center justify-between px-8 py-4"
			style={{ background: "rgba(255,255,255,0.05)" }}
		>
			{/* Logo */}
			<div className="text-xl font-bold text-white flex items-center gap-2">
				<span className="text-primary text-2xl">{'</>'}</span>
				Portafolio
			</div>
			{/* Navegación desktop */}
			<div className="hidden md:flex gap-8 text-white font-medium">
				{navLinks}
			</div>
			{/* Botón menú hamburguesa en móvil */}
			<button
				className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Abrir menú"
			>
				<span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
				<span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
				<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
			</button>
			{/* Menú móvil */}
			{menuOpen && (
				<div className="fixed top-0 right-0 w-2/3 max-w-xs h-full bg-black bg-opacity-80 backdrop-blur-md flex flex-col gap-8 text-white font-medium p-10 pt-24 shadow-lg md:hidden animate-fade-in z-40">
					{navLinks}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
