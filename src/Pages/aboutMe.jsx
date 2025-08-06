import React from 'react'

export default function AboutMe() {
  return (
    <div id='about' className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4'>
            Sobre Mí
          </h2>
          <p className='text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4'>
            Conocé la historia detrás de mi yo informático
          </p>
          <div className='w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 sm:mt-6 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start'>
          
          {/* Left Side - Personal Story & Education */}
          <div className='space-y-6 lg:space-y-8'>
            
            {/* Main Story */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300'>
              <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center'>
                <span className='text-cyan-400 mr-2 sm:mr-3'>🚀</span>
                Mi Historia
              </h3>
              <p className='text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base'>
                Soy un apasionado por la informática y el desarrollo de software, especializado en desarrollo 
                integral con una fuerte inclinación hacia el frontend. Mi pasión va más allá del código: 
                uso Linux diariamente por su seguridad, robustez y filosofía de software libre.
              </p>
              <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
                Estoy en constante aprendizaje explorando nuevos lenguajes, diseño de bases de datos y 
                ciberseguridad. Me fascina escribir comandos en terminal y entender cómo funcionan los 
                sistemas por dentro. Cada línea de código es una oportunidad de crear algo increíble.
              </p>
            </div>

            {/* Education */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300'>
              <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center'>
                <span className='text-blue-400 mr-2 sm:mr-3'>🎓</span>
                Educación
              </h3>
              <div className='space-y-4 sm:space-y-6'>
                <div className='space-y-2 sm:space-y-3'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
                    <div>
                      <h4 className='text-base sm:text-lg font-semibold text-white'>Licenciatura en Informática</h4>
                      <p className='text-gray-400 text-sm sm:text-base'>Universidad Nacional de La Plata (UNLP)</p>
                    </div>
                    <span className='text-cyan-400 font-medium text-sm sm:text-base'>2025 - Presente</span>
                  </div>
                  <p className='text-gray-300 text-xs sm:text-sm'>
                    Enfocado en desarrollo de software, algoritmos, estructuras de datos y fundamentos teóricos.
                  </p>
                </div>
                
                <div className='border-t border-gray-700/50 pt-3 sm:pt-4'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2'>
                    <div>
                      <h4 className='text-base sm:text-lg font-semibold text-white'>Fundamentos de Ciberseguridad y Redes</h4>
                      <p className='text-gray-400 text-sm sm:text-base'>Cisco Networking Academy</p>
                    </div>
                    <span className='text-cyan-400 font-medium text-sm sm:text-base'>2024</span>
                  </div>
                  <p className='text-gray-300 text-xs sm:text-sm'>
                    Fundamentos de seguridad informática, protocolos de red, análisis de vulnerabilidades y mejores prácticas.
                  </p>
                </div>
                
                <div className='border-t border-gray-700/50 pt-3 sm:pt-4'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2'>
                    <div>
                      <h4 className='text-base sm:text-lg font-semibold text-white'>Bootcamp Desarrollo Stack MERN</h4>
                      <p className='text-gray-400 text-sm sm:text-base'>Mindhub</p>
                    </div>
                    <span className='text-cyan-400 font-medium text-sm sm:text-base'>2023</span>
                  </div>
                  <p className='text-gray-300 text-xs sm:text-sm'>
                    Desarrollo completo con MongoDB, Express.js, React y Node.js. Proyectos prácticos y metodologías ágiles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Passions & Stats */}
          <div className='space-y-6 lg:space-y-8'>
            
            {/* What I Love */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300'>
              <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center'>
                <span className='text-purple-400 mr-2 sm:mr-3'>💜</span>
                Lo que me Apasiona
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                <div className='flex items-center space-x-2 sm:space-x-3'>
                  <div className='w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0'></div>
                  <span className='text-gray-300 text-sm sm:text-base'>Desarrollo en equipo</span>
                </div>
                <div className='flex items-center space-x-2 sm:space-x-3'>
                  <div className='w-2 h-2 bg-blue-400 rounded-full flex-shrink-0'></div>
                  <span className='text-gray-300 text-sm sm:text-base'>Linux & Terminal</span>
                </div>
                <div className='flex items-center space-x-2 sm:space-x-3'>
                  <div className='w-2 h-2 bg-purple-400 rounded-full flex-shrink-0'></div>
                  <span className='text-gray-300 text-sm sm:text-base'>Redes & Ciberseguridad</span>
                </div>
                <div className='flex items-center space-x-2 sm:space-x-3'>
                  <div className='w-2 h-2 bg-pink-400 rounded-full flex-shrink-0'></div>
                  <span className='text-gray-300 text-sm sm:text-base'>Diseño de BD</span>
                </div>
                <div className='flex items-center space-x-2 sm:space-x-3'>
                  <div className='w-2 h-2 bg-green-400 rounded-full flex-shrink-0'></div>
                  <span className='text-gray-300 text-sm sm:text-base'>Assembler</span>
                </div>
                <div className='flex items-center space-x-2 sm:space-x-3'>
                  <div className='w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0'></div>
                  <span className='text-gray-300 text-sm sm:text-base'>Front-End</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-2 gap-3 sm:gap-4'>
              <div className='bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-cyan-400/20 text-center'>
                <div className='text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2'>2+</div>
                <div className='text-gray-300 text-xs sm:text-sm'>Años de Experiencia</div>
              </div>
              <div className='bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-400/20 text-center'>
                <div className='text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2'>5+</div>
                <div className='text-gray-300 text-xs sm:text-sm'>Tecnologías Dominadas</div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className='bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gradient-to-r border-cyan-400/20'>
              <h3 className='text-lg sm:text-xl font-bold text-white mb-3 flex items-center'>
                <span className='text-cyan-400 mr-2 sm:mr-3'>🎯</span>
                Dato Curioso
              </h3>
              <p className='text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base'>
                Uso Linux como mi sistema operativo principal porque creo en el poder del software libre. 
                Mi primera línea de código fue un "Hello World", pero mi primer comando en terminal fue 
                "sudo apt update" y desde entonces no puedo parar de explorar. 🐧
              </p>
              
              {/* Terminal Code Block */}
              <div className='bg-gray-900/80 rounded-lg p-3 sm:p-4 border border-gray-700/30 font-mono text-xs sm:text-sm'>
                <div className='flex items-center mb-2'>
                  <div className='flex space-x-1 sm:space-x-2'>
                    <div className='w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full'></div>
                    <div className='w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full'></div>
                    <div className='w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full'></div>
                  </div>
                  <span className='text-gray-400 ml-2 sm:ml-4 text-xs'>phantom@debian:~$</span>
                </div>
                <div className='space-y-1 text-gray-300'>
                  <div className='flex flex-wrap'>
                    <span className='text-cyan-400'>$</span>
                    <span className='ml-1 sm:ml-2 break-all'>sudo apt update && sudo apt upgrade</span>
                  </div>
                  <div className='flex flex-wrap'>
                    <span className='text-cyan-400'>$</span>
                    <span className='ml-1 sm:ml-2 break-all'>ls -la | grep config</span>
                  </div>
                  <div className='flex flex-wrap'>
                    <span className='text-cyan-400'>$</span>
                    <span className='ml-1 sm:ml-2 break-all'>systemctl status nginx</span>
                  </div>
                  <div className='flex flex-wrap'>
                    <span className='text-cyan-400'>$</span>
                    <span className='ml-1 sm:ml-2 text-gray-500'># Daily routine... 🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
