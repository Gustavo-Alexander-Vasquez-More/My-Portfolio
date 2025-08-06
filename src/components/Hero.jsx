import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentPhase, setCurrentPhase] = useState('typing-name') // typing-name, deleting-name, typing-binary, deleting-binary
  
  const nameText = 'Gustavo Vásquez'
  const binaryText = '01000111 01110101 01110011'

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
    }
  }

  useEffect(() => {
    let timeout
    
    const typeText = (text, onComplete) => {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(onComplete, 1500) // Wait 1.5s before next action
        }
      }, 80) // Typing speed
      return typeInterval
    }

    const deleteText = (text, onComplete) => {
      let index = text.length
      const deleteInterval = setInterval(() => {
        if (index >= 0) {
          setDisplayText(text.slice(0, index))
          index--
        } else {
          clearInterval(deleteInterval)
          setTimeout(onComplete, 300) // Short pause before next action
        }
      }, 50) // Deletion speed (faster)
      return deleteInterval
    }

    const runCycle = () => {
      // Phase 1: Type name
      setCurrentPhase('typing-name')
      const typeNameInterval = typeText(nameText, () => {
        // Phase 2: Delete name
        setCurrentPhase('deleting-name')
        const deleteNameInterval = deleteText(nameText, () => {
          // Phase 3: Type binary
          setCurrentPhase('typing-binary')
          const typeBinaryInterval = typeText(binaryText, () => {
            // Phase 4: Delete binary
            setCurrentPhase('deleting-binary')
            const deleteBinaryInterval = deleteText(binaryText, () => {
              // Restart cycle
              setTimeout(runCycle, 500)
            })
          })
        })
      })
    }

    // Start the cycle
    runCycle()

    // Cleanup function
    return () => {
      // Clear any active intervals when component unmounts
    }
  }, [])

  const isShowingBinary = currentPhase === 'typing-binary' || currentPhase === 'deleting-binary'

  return (
    <div className='w-full min-h-screen  flex items-center justify-center pt-16 pb-8'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Contenido de texto */}
          <div className='text-center lg:text-left space-y-8'>
            {/* Saludo animado */}
            <div className='space-y-4'>
              <p className='text-cyan-400 text-lg font-medium animate-pulse'>👋 ¡Hola! Soy</p>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight h-20 md:h-24 lg:h-28 flex items-center justify-center lg:justify-start'>
                <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Gustavo Vásquez
                </span>
              </h1>
              <h2 className='text-2xl md:text-3xl text-gray-300 font-light'>
                Desarrollador Full Stack
              </h2>
            </div>

            {/* Descripción */}
            <p className='text-lg text-gray-400 max-w-xl leading-relaxed'>
               💻 Estudiante de Informática creando soluciones web innovadoras. 
               Apasionado por algoritmos eficientes y código limpio.
            </p>

            {/* Estadísticas rápidas */}
            <div className='flex justify-center lg:justify-start space-x-8 text-center'>
              <div>
                <div className='text-2xl font-bold text-cyan-400'>2+</div>
                <div className='text-sm text-gray-400'>Años de experiencia</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-purple-400'>☕</div>
                <div className='text-sm text-gray-400'>Cafés diarios</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-pink-400'>∞</div>
                <div className='text-sm text-gray-400'>Ganas de aprender</div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button onClick={() => scrollToSection('projects')} className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25'>
                Ver Proyectos
              </button>
              <button className='px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300'>
                Descargar CV
              </button>
            </div>

            {/* Redes sociales */}
            <div className='flex justify-center lg:justify-start space-x-6 pt-4'>
              <a href='https://www.linkedin.com/in/gustavo-v%C3%A1squez-94b2b923a/' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300'>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
              </a>
              <a href='https://github.com/Gustavo-Alexander-Vasquez-More' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300'>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sección de imagen/avatar */}
          <div className='flex justify-center lg:justify-end'>
            <div className='relative'>
              {/* Círculos decorativos de fondo */}
              <div className='absolute -top-4 -right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse'></div>
              <div className='absolute -bottom-4 -left-4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
              
              {/* Contenedor de la imagen */}
              <div className='relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto'>
                {/* Borde animado */}
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-spin' style={{animationDuration: '3s'}}></div>
                
                {/* Imagen placeholder (reemplaza con tu foto) */}
                <div className='absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center text-6xl'>
                  <img 
                    src="/perfil.jpeg" 
                    alt="Tu nombre"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Indicador de estado */}
                <div className='absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full border-4 border-gray-900 animate-pulse flex items-center justify-center'>
                  <span className='text-xs'>🟢</span>
                </div>
              </div>

              {/* Elementos flotantes - Responsivos y más contenidos */}
              <div className='absolute top-6 -left-6 sm:top-10 sm:-left-8 md:-left-10 bg-gray-900/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 animate-bounce border border-cyan-400/30' style={{animationDelay: '0.5s'}}>
                <span className='text-cyan-400 text-xs sm:text-sm font-medium'>React</span>
              </div>
              <div className='absolute top-24 -right-8 sm:top-32 sm:-right-10 md:-right-12 bg-gray-900/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 animate-bounce border border-blue-400/30' style={{animationDelay: '1s'}}>
                <span className='text-blue-400 text-xs sm:text-sm font-medium'>Node.js</span>
              </div>
              <div className='absolute bottom-16 -left-6 sm:bottom-20 sm:-left-6 md:-left-8 bg-gray-900/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 animate-bounce border border-purple-400/30' style={{animationDelay: '1.5s'}}>
                <span className='text-purple-400 text-xs sm:text-sm font-medium'>JS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Solo visible en pantallas grandes */}
        <div className='hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
