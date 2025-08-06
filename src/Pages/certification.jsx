import React, { useState } from 'react'

export default function Certification() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const certifications = [
    {
      id: 1,
      title: "HTML y CSS",
      institution: "OpenBootcamp",
      date: "19 de mayo 2023",
      type: "Curso Online",
      description: "Fundamentos de desarrollo web frontend con HTML5 y CSS3. Creación de interfaces responsivas y modernas.",
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid", "Web Semantics", "Frontend"],
      pdfPath: "/PDF/openbootcamp-html-css.pdf",
      previewImage: "/htmlCssOpenBootcamp.png",
      color: "orange"
    },
    {
      id: 2,
      title: "Git",
      institution: "OpenBootcamp",
      date: "11 de junio 2023",
      type: "Curso Online",
      description: "Control de versiones con Git y colaboración en proyectos utilizando GitHub. Gestión de repositorios, ramas y flujos de trabajo.",
      skills: ["Git", "Version Control", "Branching", "Merging", "Pull Requests", "Collaboration"],
      pdfPath: "/PDF/openbootcamp-git.pdf",
      previewImage: "/gitOpenBootcamp.png",
      color: "purple"
    },
    {
      id: 3,
      title: "Bootcamp Full-Stack MERN",
      institution: "MindHub",
      date: "24 de agosto 2023",
      type: "Bootcamp Intensivo",
      description: "Programa intensivo de desarrollo full-stack especializado en MongoDB, Express.js, React.js y Node.js con metodologías ágiles.",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "APIs REST", "Git", "Metodologías Ágiles"],
      pdfPath: "/PDF/mindhub.pdf",
      previewImage: "/mindhub.png",
      color: "cyan"
    },
    {
      id: 4,
      title: "Cisco - Fundamentos en Ciberseguridad",
      institution: "Cisco Networking Academy",
      date: "31 de agosto 2023",
      type: "Certificación Oficial",
      description: "Conceptos fundamentales de ciberseguridad, análisis de amenazas, vulnerabilidades y protección de sistemas.",
      skills: ["Cybersecurity", "Threat Analysis", "Vulnerability Assessment", "Network Security", "Risk Management"],
      pdfPath: "/PDF/cybersecurity.pdf",
      previewImage: "/fundamentosCiberseguridadCisco.png",
      color: "red"
    },
    {
      id: 5,
      title: "PHP Essentials",
      institution: "LinkedIn Learning",
      date: "9 de mayo 2024",
      type: "Curso Online",
      description: "Fundamentos de PHP para desarrollo web backend, programación orientada a objetos y conexión con bases de datos.",
      skills: ["PHP", "Web Development"],
      pdfPath: "/PDF/linkedin-php.pdf",
      previewImage: "/phpLinkedin.png",
      color: "green"
    },
    {
      id: 6,
      title: "Cisco - Fundamentos en Redes",
      institution: "Cisco Networking Academy",
      date: "21 de mayo 2024",
      type: "Certificación Oficial",
      description: "Fundamentos de redes informáticas, protocolos TCP/IP, configuración de routers y switches, y conceptos de networking.",
      skills: ["Networking", "TCP/IP", "Routers", "Switches", "IoT", "Network Security"],
      pdfPath: "/PDF/networkingBasics.pdf",
      previewImage: "/fundamentosRedesCisco.png",
      color: "blue"
    },
    {
      id: 7,
      title: "Fundamentos en Ciberseguridad",
      institution: "Comunidad Reparando",
      date: "2 de enero 2025",
      type: "Certificación Comunitaria",
      description: "Programa comunitario enfocado en ciberseguridad práctica, ethical hacking y protección de datos personales.",
      skills: ["Ethical Hacking", "Data Protection", "Kali Linux", "Malwares", "Privacy"],
      pdfPath: "/PDF/reparando-cybersecurity.pdf",
      previewImage: "/redesComunidadReparando.png",
      color: "purple"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        bg: 'from-cyan-500/10 to-blue-500/10',
        border: 'border-cyan-400/20',
        text: 'text-cyan-400',
        accent: 'bg-cyan-400',
        button: 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
      },
      blue: {
        bg: 'from-blue-500/10 to-purple-500/10',
        border: 'border-blue-400/20',
        text: 'text-blue-400',
        accent: 'bg-blue-400',
        button: 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
      },
      red: {
        bg: 'from-red-500/10 to-orange-500/10',
        border: 'border-red-400/20',
        text: 'text-red-400',
        accent: 'bg-red-400',
        button: 'from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'
      },
      purple: {
        bg: 'from-purple-500/10 to-pink-500/10',
        border: 'border-purple-400/20',
        text: 'text-purple-400',
        accent: 'bg-purple-400',
        button: 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
      },
      green: {
        bg: 'from-green-500/10 to-emerald-500/10',
        border: 'border-green-400/20',
        text: 'text-green-400',
        accent: 'bg-green-400',
        button: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
      },
      orange: {
        bg: 'from-orange-500/10 to-yellow-500/10',
        border: 'border-orange-400/20',
        text: 'text-orange-400',
        accent: 'bg-orange-400',
        button: 'from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600'
      }
    }
    return colors[color] || colors.cyan
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certifications.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const downloadCertificate = (pdfPath, title) => {
    // Simulación de descarga - en producción usarías la ruta real del archivo
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = `${title.replace(/\s+/g, '_')}.pdf`
    link.click()
  }

  return (
    <div id='certifications' className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4'>
            Certificaciones
          </h2>
          <p className='text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4'>
            Formación académica y certificaciones que respaldan mi crecimiento profesional
          </p>
          <div className='w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 sm:mt-6 rounded-full'></div>
        </div>

        {/* Carousel Container */}
        <div className='relative max-w-6xl mx-auto mb-12 md:mb-16 overflow-hidden px-8 sm:px-12 md:px-20'>
          {/* Carousel Track */}
          <div 
            className='flex transition-transform duration-700 ease-in-out'
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {certifications.map((cert, index) => {
              const certColorClasses = getColorClasses(cert.color)
              return (
                <div key={cert.id} className='w-full flex-shrink-0'>
                  {/* Main Certificate Card */}
                  <div className={`bg-gradient-to-br ${certColorClasses.bg} backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border ${certColorClasses.border} transition-all duration-500 mx-1 sm:mx-2 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center`}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center w-full'>
                      
                      {/* Certificate Info */}
                      <div className='space-y-4 sm:space-y-6'>
                        <div>
                          <div className='flex items-center gap-2 sm:gap-3 mb-2'>
                            <span className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${certColorClasses.accent}`}></span>
                            <span className={`text-xs sm:text-sm font-medium ${certColorClasses.text}`}>{cert.institution}</span>
                          </div>
                          <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3'>{cert.title}</h3>
                          <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4'>
                            <span>📅 {cert.date}</span>
                            <span>🎓 {cert.type}</span>
                          </div>
                        </div>

                        <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>{cert.description}</p>

                        {/* Skills */}
                        <div>
                          <h4 className='text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3'>Competencias adquiridas:</h4>
                          <div className='flex flex-wrap gap-1 sm:gap-2'>
                            {cert.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className={`px-2 sm:px-3 py-1 ${certColorClasses.bg} border ${certColorClasses.border} rounded-full text-xs ${certColorClasses.text}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Download Button */}
                        <button 
                          onClick={() => downloadCertificate(cert.pdfPath, cert.title)}
                          className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${certColorClasses.button} text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base`}
                        >
                          <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                          </svg>
                          <span className='hidden sm:inline'>Descargar Certificado</span>
                          <span className='sm:hidden'>Descargar</span>
                        </button>
                      </div>

                      {/* Certificate Preview */}
                      <div className='flex justify-center order-first lg:order-last'>
                        <div className='relative group'>
                          <div className={`absolute inset-0 bg-gradient-to-r ${certColorClasses.button} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300`}></div>
                          <div className='relative bg-white rounded-2xl p-3 sm:p-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300'>
                            <div className='w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 bg-white rounded-lg overflow-hidden'>
                              {/* Vista previa con imagen del PDF */}
                              <img 
                                src={cert.previewImage}
                                alt={`Preview de ${cert.title}`}
                                className="w-full h-full object-cover rounded-lg"
                                onError={(e) => {
                                  // Fallback si la imagen no se carga
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              {/* Fallback si no se puede cargar la imagen */}
                              <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-col items-center justify-center hidden'>
                                <div className='text-center p-4 sm:p-6'>
                                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${certColorClasses.accent} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                                    <svg className='w-6 h-6 sm:w-8 sm:h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                                    </svg>
                                  </div>
                                  <h4 className='font-bold text-gray-800 text-xs sm:text-sm mb-2'>{cert.title}</h4>
                                  <p className='text-gray-600 text-xs'>{cert.institution}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className='absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-transparent border-2 border-white/30 rounded-full flex items-center justify-center text-white/80 hover:border-white/60 hover:text-white hover:bg-white/10 transition-all duration-300'
            style={{ backdropFilter: 'none' }}
          >
            <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.8))' }}>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className='absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-transparent border-2 border-white/30 rounded-full flex items-center justify-center text-white/80 hover:border-white/60 hover:text-white hover:bg-white/10 transition-all duration-300'
            style={{ backdropFilter: 'none' }}
          >
            <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' style={{ filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.8))' }}>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className='flex justify-center space-x-2 sm:space-x-3 mb-12 md:mb-16'>
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? `${getColorClasses(certifications[index].color).accent}` 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <div className='bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-cyan-400/20 max-w-3xl mx-auto'>
            <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4'>Aprendizaje Continuo</h3>
            <p className='text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base px-2'>
              Como la secuencia de Fibonacci, cada certificación construye sobre las anteriores, creando un crecimiento exponencial de conocimiento y habilidades.
            </p>
            
            {/* Fibonacci Visual */}
            <div className='flex items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-6 overflow-x-auto'>
              <div className='flex items-center gap-1 text-cyan-400 font-mono text-xs sm:text-sm flex-shrink-0'>
                <span className='w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/20 rounded-full flex items-center justify-center text-xs font-bold'>1</span>
                <span className='text-gray-400'>→</span>
                <span className='w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/30 rounded-full flex items-center justify-center text-xs font-bold'>1</span>
                <span className='text-gray-400'>→</span>
                <span className='w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/40 rounded-full flex items-center justify-center text-xs font-bold'>2</span>
                <span className='text-gray-400'>→</span>
                <span className='w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/50 rounded-full flex items-center justify-center text-xs font-bold'>3</span>
                <span className='text-gray-400'>→</span>
                <span className='w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/60 rounded-full flex items-center justify-center text-xs font-bold'>5</span>
                <span className='text-gray-400'>→</span>
                <span className='w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/70 rounded-full flex items-center justify-center text-xs font-bold'>8</span>
                <span className='text-gray-400'>→</span>
                <span className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-xs text-white font-bold'>∞</span>
              </div>
            </div>
            
            <p className='text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm'>
              HTML + CSS → Git → MERN → Ciberseguridad → PHP → Redes → Comunidad = <span className='text-cyan-400 font-semibold'>Crecimiento Exponencial</span>
            </p>
            
            <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <div className='text-center'>
                <div className='text-xl sm:text-2xl font-bold text-cyan-400 mb-1'>{certifications.length}</div>
                <div className='text-gray-400 text-xs sm:text-sm'>Certificaciones</div>
              </div>
              <div className='w-8 h-px sm:w-px sm:h-8 bg-gray-600'></div>
              <div className='text-center'>
                <div className='text-xl sm:text-2xl font-bold text-blue-400 mb-1'>∞</div>
                <div className='text-gray-400 text-xs sm:text-sm'>Próximas metas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
