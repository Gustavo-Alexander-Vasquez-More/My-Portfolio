import React, { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const publicProjects = [
    {
      id: 1,
      title: "Rentame Carmen",
      description: "Aplicación web desarrollada con React y Node.js que incluye autenticación, CRUD completo y diseño responsive.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/rentame.png", // Cambia por tu imagen
      github: "https://github.com/tu-usuario/proyecto1",
      demo: "https://rentamecarmen.com.mx",
      category: "fullstack"
    },
    {
      id: 2,
      title: "El Xicalango", 
      description: "Dashboard administrativo con gráficos interactivos, manejo de estado avanzado y integración con APIs externas.",
      tech: ["React", "Express", "MySQL", "Chart.js"],
      image: "/xicalango.png", // Cambia por tu imagen
      github: "https://github.com/tu-usuario/proyecto2",
      demo: "https://tu-proyecto2.vercel.app",
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

        {/* Project Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          <div className='bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 text-center'>
            <div className='text-3xl font-bold text-cyan-400 mb-2'>15+</div>
            <div className='text-gray-300 text-sm'>Proyectos Totales</div>
          </div>
          <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 text-center'>
            <div className='text-3xl font-bold text-blue-400 mb-2'>2</div>
            <div className='text-gray-300 text-sm'>Open Source</div>
          </div>
          <div className='bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 text-center'>
            <div className='text-3xl font-bold text-purple-400 mb-2'>13+</div>
            <div className='text-gray-300 text-sm'>Para Clientes</div>
          </div>
          <div className='bg-gradient-to-br from-pink-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20 text-center'>
            <div className='text-3xl font-bold text-pink-400 mb-2'>�</div>
            <div className='text-gray-300 text-sm'>Freelance</div>
          </div>
        </div>

        {/* Public Projects Section */}
        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-white mb-8 text-center'>
            Proyectos Open Source
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {publicProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Private Work Section */}
        <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-16'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-white mb-4 flex items-center justify-center'>
              <span className='text-orange-400 mr-3'>�</span>
              Trabajo para Clientes
            </h3>
            <p className='text-gray-400 mb-6 max-w-3xl mx-auto'>
              La mayoría de mi trabajo ha sido desarrollando soluciones personalizadas para empresas y emprendedores. 
              Por respeto a mis clientes y políticas de privacidad, no puedo mostrar estos proyectos públicamente, 
              pero puedo contarte sobre ellos en una conversación.
            </p>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
              <div className='bg-gray-700/30 rounded-xl p-6 border border-gray-600/30'>
                <h4 className='text-lg font-semibold text-cyan-400 mb-2'>E-commerce</h4>
                <p className='text-gray-400 text-sm'>
                  Tiendas online completas con pagos, inventario y paneles administrativos para pequeñas y medianas empresas
                </p>
              </div>
              <div className='bg-gray-700/30 rounded-xl p-6 border border-gray-600/30'>
                <h4 className='text-lg font-semibold text-blue-400 mb-2'>Sistemas de Gestión</h4>
                <p className='text-gray-400 text-sm'>
                  Aplicaciones internas para manejo de clientes, inventarios, reportes y administración empresarial
                </p>
              </div>
              <div className='bg-gray-700/30 rounded-xl p-6 border border-gray-600/30'>
                <h4 className='text-lg font-semibold text-purple-400 mb-2'>Páginas Web</h4>
                <p className='text-gray-400 text-sm'>
                  Sitios corporativos, landing pages y portfolios profesionales para diversos sectores
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              ¿Te interesa conocer más detalles?
            </h3>
            <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
              Puedo platicarte sobre los proyectos que he desarrollado, las tecnologías que he usado 
              y los desafíos que he resuelto. ¡Conversemos!
            </p>
            <button className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25'>
              Hablemos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
