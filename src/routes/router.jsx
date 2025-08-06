// filepath: c:\Users\tavov\OneDrive\Desktop\nuew\front-end\src\routes\router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/index';
import App from '../App';

function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Index/>} /> {/* Ruta raíz */}
      <Route path="/app" element={<App />} /> {/* Otra ruta opcional */}
        {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
}

export default RouterComponent;