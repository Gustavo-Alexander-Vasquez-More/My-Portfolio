import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../Pages/aboutMe';
import Certification from '../Pages/certification';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
export default function layout() {
  return (
    <div className='w-full h-auto flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 to-slate-90 lg:py-0 py-8'>
      <Navbar />
      <Hero />
      <AboutMe />
      <Certification />
      <Skills />
      <Projects />
      <Contact />
      {/* Aquí puedes agregar más componentes o secciones según sea necesario */}
    </div>
  )
}
