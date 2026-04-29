import React, { useState } from 'react';

const WHATSAPP_NUMBER = '541162206510'; // Reemplaza con tu número en formato internacional, ej: 5491123456789

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    // Construir mensaje personalizado
    const texto =
      `Hola! Soy ${form.nombre} (%0AEmail: ${form.email})%0A` +
      `Quiero contactarte desde tu portfolio.%0A` +
      `Mensaje: ${form.mensaje}`;
    // Abrir WhatsApp Web/app
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
    setLoading(false);
    setSuccess('Redirigiendo a WhatsApp...');
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-0 bg-gradient-to-br from-[#10121a] via-[#181c23] to-[#23243a]">
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col items-center mb-6 animate-fade-in">
          <div className="bg-primary/20 rounded-full p-4 mb-2">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25V19.5A2.25 2.25 0 0118.75 21.75H5.25A2.25 2.25 0 013 19.5V8.25m18 0A2.25 2.25 0 0018.75 6H5.25A2.25 2.25 0 003 8.25m18 0l-9 6.75-9-6.75" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">Contacto</h2>
          <p className="text-gray-300 text-center mt-2 max-w-xs">
            ¿Te gustaría que forme parte de tu equipo, tienes una propuesta interesante o simplemente quieres conectar?
            <br />
            Estoy abierto a nuevas oportunidades, colaboraciones y retos profesionales. ¡Déjame tu mensaje y te responderé lo antes posible!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full bg-white/10 rounded-xl p-8 flex flex-col gap-4 shadow-lg animate-fade-in-up">
          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="text-primary font-semibold">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="p-3 rounded bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-primary font-semibold">Correo</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu correo"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="mensaje" className="text-primary font-semibold">Mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Tu mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary/80 transition-colors disabled:opacity-60 shadow-md mt-2"
          >
            {loading ? (
              <span className="flex items-center gap-2 justify-center">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                Enviando...
              </span>
            ) : 'Enviar a WhatsApp'}
          </button>
          {success && (
            <div className={`text-center mt-2 text-sm font-semibold ${success.includes('WhatsApp') ? 'text-green-400' : 'text-red-400'}`}>{success}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contacto;
