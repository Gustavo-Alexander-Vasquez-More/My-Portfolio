import React from 'react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Rentame Carmen",
      description: "Plataforma web para empresa de renta y venta de herramientas de maquinaria ligera y jardinería. Incluye catálogo de equipos, sistema de disponibilidad en tiempo real, gestión de inventario y control de equipos rentados vs disponibles.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express", "Responsive Design"],
      image: "/rentame.png",
      demo: "https://rentamecarmen.com.mx",
      category: "fullstack"
    },
    {
      id: 2,
      title: "El Xicalango", 
      description: "Sitio web para empresa de mantenimiento de jardines, creación de ambientes paisajísticos y decoración de eventos con plantas. Incluye chatbot para consultas frecuentes, catálogo de trabajos realizados y diseño responsive optimizado para dispositivos móviles.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express", "Responsive Design"],
      image: "/xicalango.png",
      demo: "https://xicalango.com",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Modern Invitation", 
      description: "Diseño y desarrollo de una invitación de boda interactiva y responsive, adaptada a web y dispositivos móviles. Construida con tecnologías modernas para ofrecer una experiencia fluida y atractiva, integrando optimización de rendimiento, compatibilidad multiplataforma y diseño adaptativo.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      image: "/modern.png", // Cambia por tu imagen
      github: "https://github.com/tu-usuario/proyecto2",
      demo: "https://modern-invitation.vercel.app/",
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
    <div id='projects' className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20'>
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
      </div>
    </div>
  )
}
