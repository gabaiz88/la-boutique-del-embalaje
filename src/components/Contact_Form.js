import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("moqgokyd");

  // Hooks para manejar el estado de los campos
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  if (state.succeeded) {
    return <p className='text-4xl'>¡Gracias por contactarnos!</p>;
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-128 h-128 mx-auto p-10 bg-white shadow-md rounded-lg space-y-6">
      <div className="relative">
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder=" "
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <label
          htmlFor="nombre"
          className={`absolute top-3 left-3 bg-white px-1 transition-all duration-300 ${
            nombre ? 'text-xs -top-[6.5px] left-2 text-gray-700' : 'text-gray-500'
          }`}
        >
          Nombre
        </label>
      </div>
      <div className="relative">
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <label
          htmlFor="email"
          className={`absolute top-3 left-3 bg-white px-1 transition-all duration-300 ${
            email ? 'text-xs -top-[6.5px] left-2 text-gray-700' : 'text-gray-500'
          }`}
        >
          Correo
        </label>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="relative">
        <input
          id="asunto"
          type="text"
          name="asunto"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
          placeholder=" "
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <label
          htmlFor="asunto"
          className={`absolute top-3 left-3 bg-white px-1 transition-all duration-300 ${
            asunto ? 'text-xs -top-[6.5px] left-2 text-gray-700' : 'text-gray-500'
          }`}
        >
          Asunto
        </label>
      </div>
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder=" "
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32"
          required
        />
        <label
          htmlFor="message"
          className={`absolute top-3 left-3 bg-white px-1 transition-all duration-300 ${
            mensaje ? 'text-xs -top-[6.5px] left-2 text-gray-700' : 'text-gray-500'
          }`}
        >
          Mensaje
        </label>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="flex items-center justify-between">
        <button 
          type="submit" 
          disabled={state.submitting}
          className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
