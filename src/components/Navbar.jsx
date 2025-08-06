import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Offset para compensar la altura del navbar (64px = h-16)
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      // Cerrar el menú después de navegar
      setIsMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='w-full fixed top-0 bg-gray-800/95 backdrop-blur-md text-white z-50 shadow-lg shadow-gray-900/50 border-b border-gray-700/50'>
      {/* Navbar Principal */}
      <div className='h-16 flex items-center justify-between px-4 relative'>
        {/* Logo */}
        <div className='text-lg font-bold px-3 py-2 rounded-lg transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden group'>
          <span className='relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:text-white transition-all duration-500'>My Portfolio</span>
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-lg'></div>
        </div>

        {/* Menu Desktop (oculto en móvil) */}
        <div className='hidden lg:flex space-x-4'>
          <button onClick={() => scrollToSection('about')} className='relative hover:text-cyan-400 transition-colors duration-300 group'>
            Sobre Mí
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out'></span>
          </button>
          <button onClick={() => scrollToSection('certifications')} className='relative hover:text-cyan-400 transition-colors duration-300 group'>
            Certificaciones
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out'></span>
          </button>
          <button onClick={() => scrollToSection('skills')} className='relative hover:text-cyan-400 transition-colors duration-300 group'>
            Habilidades
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out'></span>
          </button>
          <button onClick={() => scrollToSection('projects')} className='relative hover:text-cyan-400 transition-colors duration-300 group'>
            Proyectos
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out'></span>
          </button>
          <button onClick={() => scrollToSection('contact')} className='relative hover:text-cyan-400 transition-colors duration-300 group'>
            Contacto
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out'></span>
          </button>
        </div>

        {/* Botón Hamburguesa (visible solo en móvil) */}
        <button 
          onClick={toggleMenu}
          className='lg:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-300'
        >
          <div className='w-6 h-6 flex flex-col justify-center items-center space-y-1'>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Menu Mobile Desplegable - POSICIÓN ABSOLUTA */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className='px-4 py-4 space-y-3'>
          <button 
            onClick={() => scrollToSection('about')} 
            className='block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-700/50 hover:text-cyan-400 transition-all duration-300 group'
          >
            <span className='flex items-center'>
              <span className='w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              Sobre Mí
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('certifications')} 
            className='block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-700/50 hover:text-cyan-400 transition-all duration-300 group'
          >
            <span className='flex items-center'>
              <span className='w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              Certificaciones
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className='block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-700/50 hover:text-cyan-400 transition-all duration-300 group'
          >
            <span className='flex items-center'>
              <span className='w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              Habilidades
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className='block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-700/50 hover:text-cyan-400 transition-all duration-300 group'
          >
            <span className='flex items-center'>
              <span className='w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              Proyectos
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className='block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-700/50 hover:text-cyan-400 transition-all duration-300 group'
          >
            <span className='flex items-center'>
              <span className='w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              Contacto
            </span>
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
