import React from 'react'

export default function Contact() {

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "tavovm24@hotmail.com",
      link: "mailto:tavovm24@hotmail.com",
      description: "La forma más directa de contactarme"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Gustavo Vásquez",
      link: "https://www.linkedin.com/in/gustavo-v%C3%A1squez-94b2b923a/",
      description: "Conectemos profesionalmente"
    },
    {
      icon: "🐱",
      title: "GitHub",
      value: "GustavoVasquez",
      link: "https://github.com/Gustavo-Alexander-Vasquez-More",
      description: "Revisa mi código y mi actividad"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+54 11 62206510",
      link: "https://wa.me/541162206510",
      description: "Para conversaciones rápidas"
    }
  ]

  return (
    <div id='contact' className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4'>
            Contacto
          </h2>
          <p className='text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4'>
            ¿Buscas un desarrollador para tu equipo? ¡Me encantaría ser parte de tu empresa!
          </p>
          <div className='w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 sm:mt-6 rounded-full'></div>
        </div>

        {/* Contact Methods - Centered Layout */}
        <div className='max-w-4xl mx-auto px-2 sm:px-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12'>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className='block p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group'
              >
                <div className='flex items-start space-x-3 sm:space-x-4'>
                  <div className='text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                    {method.icon}
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h4 className='text-base sm:text-lg font-semibold text-white mb-1'>
                      {method.title}
                    </h4>
                    <p className='text-cyan-400 font-medium mb-2 text-sm sm:text-base break-all sm:break-normal'>
                      {method.value}
                    </p>
                    <p className='text-gray-400 text-xs sm:text-sm'>
                      {method.description}
                    </p>
                  </div>
                  <div className='text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0'>
                    →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Info */}
          <div className='bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-cyan-400/20'>
            <h3 className='text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center justify-center'>
              <span className='text-cyan-400 mr-2 sm:mr-3'>💼</span>
              Disponibilidad
            </h3>
            <p className='text-gray-300 leading-relaxed mb-3 sm:mb-4 text-center text-sm sm:text-base'>
              Actualmente buscando oportunidades de trabajo fijo como desarrollador. 
              También disponible para proyectos freelance interesantes.
            </p>
            <div className='flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-400'>
              <span className='w-2 h-2 bg-green-400 rounded-full'></span>
              <span>Disponible para empleo inmediato</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12 sm:mt-16'>
          <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50'>
            <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4'>
              ¿Tu empresa necesita un desarrollador?
            </h3>
            <p className='text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2'>
              Estoy buscando formar parte de un equipo donde pueda crecer profesionalmente 
              y contribuir con mis habilidades técnicas. ¡Hablemos!
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a 
                href="https://wa.me/541162206510"
                target="_blank"
                rel="noopener noreferrer"
                className='px-6 py-3 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 text-green-400 font-semibold rounded-full transition-all duration-300 text-sm sm:text-base'
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
