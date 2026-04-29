import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<section id="inicio"
			className="w-full flex flex-col md:flex-row items-center justify-center gap-8 pt-32 pb-16 px-4 md:px-0 min-h-[60vh] relative overflow-hidden"
			style={{
				backgroundImage: 'url(/lluvia.avif)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Capa oscura para legibilidad */}
			<div className="absolute inset-0 bg-black/60 z-0" />
			{/* Foto de perfil */}
			<div className="flex-shrink-0 rounded-full overflow-hidden border-4 border-primary shadow-lg w-40 h-40 md:w-56 md:h-56 bg-white/10 z-10">
				<Image
					src="/perfil.jpg"
					alt="Foto de perfil"
					width={224}
					height={224}
					className="object-cover w-full h-full"
					priority
				/>
			</div>
			{/* Texto de presentación */}
			<div className="text-center md:text-left max-w-xl z-10">
				<h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
					¡Hola! Soy <span className="text-primary">Gustavo Vásquez</span>
				</h1>
				<p className="text-lg md:text-2xl text-gray-200 mb-6">
					Bienvenido a mi portafolio. Soy desarrollador web y estudiante de informática, enfocado en crear experiencias digitales modernas, seguras y funcionales.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
					<a
						href="#proyectos"
						className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md transition-all duration-300 ring-2 ring-primary hover:bg-white hover:text-primary hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] hover:ring-2 hover:ring-primary hover:bg-white/10"
					>
						Ver proyectos
					</a>
					<a
						href="/cv.pdf"
						download
						className="inline-block px-6 py-3 rounded-lg bg-white/20 text-white font-semibold shadow-md transition-all duration-300 ring-2 ring-white hover:bg-primary hover:text-white hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] hover:ring-2 hover:ring-primary"
					>
						Descargar CV
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
