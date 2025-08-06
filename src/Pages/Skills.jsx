import React from 'react'

export default function Skills() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const skillCategories = [
    // Desarrollo Frontend
    {
      title: "Desarrollo Frontend",
      color: "from-blue-400 to-purple-500",
      skills: [
        { name: "React", level: 5, description: "Hooks, Context, Router" },
        { name: "JavaScript", level: 5, description: "ES6+, Funciones Asíncronas" },
        { name: "HTML/CSS", level: 5, description: "Responsive, Flexbox, Grid" },
        { name: "Tailwind CSS", level: 4, description: "Utilidades, Responsive Design" },
        { name: "Bootstrap", level: 4, description: "Componentes, Grid System" }
      ]
    },
    {
      title: "Desarrollo Backend",
      icon: "⚙️",
      color: "blue",
      skills: [
        { name: "Node.js", level: 4, description: "Express, Middleware, Controladores, Endpoints" },
        { name: "MongoDB", level: 4, description: "Mongoose, MongoCompass" },
        { name: "Express.js", level: 4, description: "Rutas, Autenticación, CORS" },
        { name: "WebSockets", level: 4, description: "Comunicación en Tiempo Real, Socket.io" },
        { name: "APIs REST", level: 4, description: "CRUD, JSON, Postman" }
      ]
    },
    {
      title: "Sistemas & DevOps",
      icon: "🐧",
      color: "green",
      skills: [
        { name: "Linux", level: 3, description: "Debian, Terminal, Bash" },
        { name: "Git", level: 4, description: "Control de Versiones, GitHub, Branching" },
        { name: "VPS & Deploy", level: 2, description: "Despliegue de servicios, Comandos Linux, Configuración básica" },
      ]
    },
    {
      title: "Bases de Datos",
      icon: "🗃️",
      color: "purple",
      skills: [
        { name: "MongoDB", level: 4, description: "NoSQL, Documentos, Consultas" },
        { name: "MySQL", level: 2, description: "SQL, Diseño Relacional" },
      ]
    },
    {
      title: "Ciberseguridad",
      icon: "🔒",
      color: "red",
      skills: [
        { name: "Fundamentos", level: 3, description: "Conceptos de Malware, Amenazas, Vulnerabilidades" },
        { name: "Redes", level: 3, description: "IPv4, IPv6, TCP/IP, Firewalls, VPN, IoT" },
        { name: "Análisis", level: 2, description: "Evaluación de Vulnerabilidades" },
      ]
    },
    {
      title: "Herramientas",
      icon: "🛠️",
      color: "yellow",
      skills: [
        { name: "VS Code", level: 5, description: "Extensiones, Debugging, Git" },
        { name: "GitHub", level: 4, description: "Repositorios, Pull Requests" },
        { name: "Postman", level: 4, description: "Testing de APIs, Colecciones" },
        { name: "Generación de PDFs", level: 4, description: "jsPDF, PDFKit, Creación de Documentos" },
        { name: "QR Dinámicos", level: 4, description: "QRCode.js, Generación Dinámica de QR" },
      ]
    },
    {
      title: "Soft Skills & Metodologías",
      icon: "🤝",
      color: "pink",
      skills: [
        { name: "Trabajo en Equipo", level: 5, description: "Colaboración, Comunicación efectiva, Sinergia" },
        { name: "Metodologías Ágiles", level: 4, description: "Scrum, Sprints, Daily Standups" },
        { name: "Resolución de Problemas", level: 4, description: "Análisis, Debugging, Pensamiento crítico" },
        { name: "Aprendizaje Continuo", level: 5, description: "Autodidacta, Adaptabilidad, Curiosidad" },
      ]
    }
  ]

  const getColorClasses = (color, variant = 'bg') => {
    const colors = {
      cyan: {
        bg: 'from-cyan-500/10 to-blue-500/10',
        border: 'border-cyan-400/20',
        text: 'text-cyan-400',
        dot: 'bg-cyan-400'
      },
      blue: {
        bg: 'from-blue-500/10 to-purple-500/10',
        border: 'border-blue-400/20',
        text: 'text-blue-400',
        dot: 'bg-blue-400'
      },
      green: {
        bg: 'from-green-500/10 to-cyan-500/10',
        border: 'border-green-400/20',
        text: 'text-green-400',
        dot: 'bg-green-400'
      },
      purple: {
        bg: 'from-purple-500/10 to-pink-500/10',
        border: 'border-purple-400/20',
        text: 'text-purple-400',
        dot: 'bg-purple-400'
      },
      red: {
        bg: 'from-red-500/10 to-orange-500/10',
        border: 'border-red-400/20',
        text: 'text-red-400',
        dot: 'bg-red-400'
      },
      yellow: {
        bg: 'from-yellow-500/10 to-orange-500/10',
        border: 'border-yellow-400/20',
        text: 'text-yellow-400',
        dot: 'bg-yellow-400'
      },
      pink: {
        bg: 'from-pink-500/10 to-rose-500/10',
        border: 'border-pink-400/20',
        text: 'text-pink-400',
        dot: 'bg-pink-400'
      }
    }
    return colors[color] || colors.cyan
  }

  const SkillBar = ({ skill, color }) => {
    const colorClasses = getColorClasses(color)
    
    return (
      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <span className='text-white font-medium text-sm sm:text-base'>{skill.name}</span>
          <div className='flex space-x-1'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  i < skill.level ? colorClasses.dot : 'bg-gray-600'
                }`}
              ></div>
            ))}
          </div>
        </div>
        <p className='text-gray-400 text-xs sm:text-sm'>{skill.description}</p>
      </div>
    )
  }

  return (
    <div id='skills' className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4'>
            Mis Habilidades
          </h2>
          <p className='text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4'>
            Combinación de competencias técnicas y habilidades interpersonales
          </p>
          <div className='w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 sm:mt-6 rounded-full'></div>
        </div>

        {/* Skills Overview Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16'>
          <div className='bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-cyan-400/20 text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2'>7</div>
            <div className='text-gray-300 text-xs sm:text-sm'>Categorías</div>
          </div>
          <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-400/20 text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2'>30+</div>
            <div className='text-gray-300 text-xs sm:text-sm'>Habilidades</div>
          </div>
          <div className='bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-400/20 text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2'>2+</div>
            <div className='text-gray-300 text-xs sm:text-sm'>Años Práctica</div>
          </div>
          <div className='bg-gradient-to-br from-pink-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-pink-400/20 text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-pink-400 mb-1 sm:mb-2'>🎯</div>
            <div className='text-gray-300 text-xs sm:text-sm'>Especialización</div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className='mb-16 md:mb-20'>
          <div className='text-center mb-8 sm:mb-12'>
            <h3 className='text-2xl sm:text-3xl font-bold text-cyan-400 mb-2 sm:mb-3'>💻 Habilidades Técnicas</h3>
            <p className='text-gray-400 text-sm sm:text-base'>Tecnologías y herramientas de desarrollo</p>
            <div className='w-12 sm:w-16 h-0.5 bg-cyan-400 mx-auto mt-3 sm:mt-4 rounded-full'></div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            {skillCategories
              .filter(category => category.title !== "Soft Skills & Metodologías")
              .map((category, index) => {
                const colorClasses = getColorClasses(category.color)
                
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colorClasses.bg} backdrop-blur-sm rounded-2xl p-6 sm:p-8 border ${colorClasses.border} hover:border-opacity-50 transition-all duration-300`}
                  >
                    <div className='flex items-center mb-4 sm:mb-6'>
                      <span className='text-2xl sm:text-3xl mr-3 sm:mr-4'>{category.icon}</span>
                      <h3 className={`text-xl sm:text-2xl font-bold ${colorClasses.text}`}>
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className='space-y-4 sm:space-y-6'>
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skillIndex}
                          skill={skill}
                          color={category.color}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className='mb-16 md:mb-20'>
          <div className='text-center mb-8 sm:mb-12'>
            <h3 className='text-2xl sm:text-3xl font-bold text-pink-400 mb-2 sm:mb-3'>🤝 Habilidades Blandas & Metodologías</h3>
            <p className='text-gray-400 text-sm sm:text-base'>Competencias interpersonales y metodologías de trabajo</p>
            <div className='w-12 sm:w-16 h-0.5 bg-pink-400 mx-auto mt-3 sm:mt-4 rounded-full'></div>
          </div>
          
          <div className='max-w-4xl mx-auto'>
            {skillCategories
              .filter(category => category.title === "Soft Skills & Metodologías")
              .map((category, index) => {
                const colorClasses = getColorClasses(category.color)
                
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colorClasses.bg} backdrop-blur-sm rounded-2xl p-6 sm:p-8 border ${colorClasses.border} hover:border-opacity-50 transition-all duration-300`}
                  >
                    <div className='flex items-center justify-center mb-4 sm:mb-6'>
                      <span className='text-2xl sm:text-3xl mr-3 sm:mr-4'>{category.icon}</span>
                      <h3 className={`text-xl sm:text-2xl font-bold ${colorClasses.text}`}>
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skillIndex}
                          skill={skill}
                          color={category.color}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12 md:mt-16'>
          <div className='bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-600/50 overflow-hidden max-w-4xl mx-auto'>
            {/* Terminal Header */}
            <div className='bg-gray-800/80 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-600/50 flex items-center justify-between'>
              <div className='flex items-center space-x-1 sm:space-x-2'>
                <div className='w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full'></div>
                <div className='w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full'></div>
              </div>
              <div className='text-gray-400 text-xs sm:text-sm font-mono'>gustavo@portfolio:~$</div>
            </div>
            
            {/* Terminal Content */}
            <div className='p-4 sm:p-6 font-mono text-left space-y-2 sm:space-y-3 text-xs sm:text-sm'>
              <div className='text-green-400'>
                <span className='text-gray-400'>$</span> pascal evaluacion.pas
              </div>
              
              <div className='text-gray-400 text-xs'>
                (* Evaluando condiciones con álgebra de Boole *)
              </div>
              
              <div className='space-y-1 text-gray-300 overflow-x-auto'>
                <div><span className='text-purple-400'>program</span> <span className='text-yellow-400'>EvaluacionContacto</span>;</div>
                <div><span className='text-purple-400'>var</span></div>
                <div className='ml-2 sm:ml-4'><span className='text-cyan-400'>tienes_proyecto</span>, <span className='text-cyan-400'>necesitas_dev</span>: <span className='text-blue-400'>boolean</span>;</div>
                <div><span className='text-purple-400'>begin</span></div>
                <div className='ml-2 sm:ml-4'><span className='text-cyan-400'>tienes_proyecto</span> := <span className='text-green-400'>true</span>;</div>
                <div className='ml-2 sm:ml-4'><span className='text-cyan-400'>necesitas_dev</span> := <span className='text-green-400'>true</span>;</div>
              </div>
              
              <div className='text-yellow-400 ml-2 sm:ml-4 overflow-x-auto'>
                <span className='text-purple-400'>if</span> (<span className='text-cyan-400'>tienes_proyecto</span> <span className='text-pink-400'>and</span> <span className='text-cyan-400'>necesitas_dev</span>) <span className='text-purple-400'>then</span>
              </div>
              
              <div className='text-green-400 ml-4 sm:ml-8 overflow-x-auto'>
                writeln(<span className='text-green-400'>'¡Deberías contactarme!'</span>);
              </div>
              
              <div className='text-gray-300'>
                <span className='text-purple-400'>end.</span>
              </div>
              
              <div className='text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4'>
                (* Resultado: TRUE - Contacto recomendado *)
              </div>
              
              <div className='text-center mt-4 sm:mt-6'>
                <button 
                  onClick={scrollToContact}
                  className='px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-semibold rounded-lg hover:from-green-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg font-mono text-sm sm:text-base'
                >
                  EXECUTE_CONTACTO()
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
