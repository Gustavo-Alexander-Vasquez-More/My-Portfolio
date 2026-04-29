
import React from "react";

const SobreMi = () => {
	return (
		<section id="sobremi" className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-20 px-4 md:px-0 rounded-2xl shadow-lg">
			{/* Avatar divertido */}
			<div className="flex flex-col items-center mb-8 md:mb-0">
				<div className="overflow-hidden border-4 border-primary shadow-lg w-56 h-56 md:w-72 md:h-72 bg-white/10 rounded-2xl">
					<img
						src="/dev.jpg"
						alt="Foto divertida de Gustavo"
						className="object-cover w-full h-full"
					/>
				</div>
				<span className="mt-4 px-3 py-1 bg-primary/80 text-white text-xs rounded-full shadow">#CybersecurityDeveloper</span>
			</div>
			{/* Texto de presentación en consola bash */}
			<div className="max-w-2xl w-full">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center md:text-left">Sobre mí</h2>
				<div className="bg-[#23272e] border border-[#444] rounded-xl shadow-inner p-0 overflow-hidden font-mono">
					{/* Barra de ventana estilo macOS */}
					<div className="flex items-center gap-2 px-4 py-2 bg-[#282c34] border-b border-[#444]">
						<span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
						<span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
						<span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
						<span className="ml-4 text-xs text-gray-400">bash — Gustavo@macbook: ~</span>
					</div>
					<div className="p-6 text-gray-100 text-sm md:text-base whitespace-pre-line">
						<span className="text-green-400">$</span> Soy desarrollador web y estudiante de Informática en la UNLP. Me apasiona la computación, la tecnología y la ciberseguridad. Me gusta aprender constantemente, tanto de forma didáctica como académica. Siempre busco profundizar en conocimientos, encontrar soluciones innovadoras y aplicar lo que aprendo en proyectos reales.
						<br /><span className="text-green-400">$</span> Durante mi formación he desarrollado pensamiento computacional, aprendiendo estructuras de datos, buenas prácticas y algoritmos eficientes. Realicé cursos en desarrollo Backend y Frontend, y adquirí conocimientos en ciberseguridad básica para proteger sistemas y minimizar vulnerabilidades.
						<br /><span className="text-green-400">$</span> En cuanto a mis habilidades blandas, soy sociable, respetuoso y colaborativo. Me encanta trabajar en equipo, fomentar el compañerismo y aportar ideas que sumen al proyecto. ¡Siempre listo para nuevos desafíos y aventuras universitarias!
					</div>
				</div>
			</div>
		</section>
	);
};

export default SobreMi;
