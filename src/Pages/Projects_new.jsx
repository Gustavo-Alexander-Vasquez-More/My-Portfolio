import React from 'react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Rentame Carmen",
      description: "Plataforma de alquiler de propiedades desarrollada con React y Node.js. Incluye sistema de autenticación, gestión de propiedades, búsqueda avanzada y panel administrativo completo.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      image: "/rentame.png",
      github: "https://github.com/GustavoVasquez0308",
      demo: "https://rentamecarmen.com.mx",
      category: "fullstack"
    },
    {
      id: 2,
      title: "El Xicalango", 
      description: "Sitio web para restaurante con menú interactivo, reservas online y sistema de pedidos. Diseño responsive y optimizado para dispositivos móviles.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      image: "/xicalango.png",
      github: "https://github.com/GustavoVasquez0308",
      demo: "https://elxicalango.com",
      category: "frontend"
    }
  ]

  const ProjectCard = ({ project }) => {
    return (
      <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group'>
        {/* Image */}
        <div className='h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden'>
          <img 
            src={project.image} 
            alt={project.title}
            className='w-full h-full object-cover object-top'
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className='absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800'>
            <span className='text-gray-400 text-sm'>Imagen no disponible</span>
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>

        <div className='p-6'>
          <h3 className='text-xl font-bold text-white mb-3'>{project.title}</h3>
          <p className='text-gray-400 mb-4 leading-relaxed'>{project.description}</p>
          
          {/* Tech Stack */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tech.map((tech, index) => (
              <span 
                key={index}
                className='px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs rounded-full'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className='flex gap-4'>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-all duration-300'
            >
              <span>🔗</span>
              GitHub
            </a>
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-400 rounded-lg transition-all duration-300'
            >
              <span>🚀</span>
              Demo
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4'>
            Mis Proyectos
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Algunos de los proyectos que he desarrollado
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6 rounded-full'></div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              ¿Te gustaría trabajar juntos?
            </h3>
            <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
              Siempre estoy abierto a nuevos proyectos y colaboraciones interesantes.
              ¡Hablemos sobre tu próxima idea!
            </p>
            <button className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25'>
              Contactemos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
