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
    <form onSubmit={handleSubmit} className="p-5 sm:w-128 sm:h-96 sm:mx-auto sm:p-10 bg-white shadow-md rounded-lg space-y-6">
      <div className="relative">
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder=" "
          className="input-field"
          required
        />
        <label htmlFor="nombre" className={`input-label ${nombre ? 'filled' : ''}`}>
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
          className="input-field"
          required
        />
        <label htmlFor="email" className={`input-label ${email ? 'filled' : ''}`}>
          Correo
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="relative">
        <input
          id="asunto"
          type="text"
          name="asunto"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
          placeholder=" "
          className="input-field"
          required
        />
        <label htmlFor="asunto" className={`input-label ${asunto ? 'filled' : ''}`}>
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
          className="input-field"
          required
        />
        <label htmlFor="message" className={`input-label ${mensaje ? 'filled' : ''}`}>
          Mensaje
        </label>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" disabled={state.submitting} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
