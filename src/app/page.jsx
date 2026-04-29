
"use client";
import React from 'react'
import Navbar from './components/sections/Navbar'
import Hero from './components/Hero'
import SobreMi from './components/sections/SobreMi'
import Educacion from './components/sections/Educacion'
import Proyectos from './components/sections/Proyectos';
import Contacto from './components/sections/Contacto';
import Footer from './components/Footer';

export default function page() {
  return (
    <div className='bg-gradient-to-r from-gray-900 flex flex-col via-gray-800 to-gray-900 min-h-screen text-white'>
        <Navbar />
        <Hero />
        <SobreMi />
        <Educacion />
        <Proyectos />
        <Contacto />
        <Footer />
    </div>
  )
}
