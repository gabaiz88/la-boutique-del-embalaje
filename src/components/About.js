import React from 'react';
import imagen from '../img/descartables_about2.jpg';
import linea from '../img/linea_crayon.jpg'

const About = () => {
  return (
    <div id="about" className="flex justify-center w-10/12 mx-auto my-10 gap-32">
      <div className='flex flex-col w-2/4 justify-between'>
        <div className=''>
          <h2 className="text-5xl mb-2">Acerca de Nosotros</h2>
          <img src={linea} className='w-36 mr-3' alt="linea"></img>
        </div>
        <p className='w-9/12 text-lg'>La Boutique del Embalaje es un comercio con 25 años de historia, ubicado en el corazón de Almagro. Especializados en la venta de descartables y cotillón, ofrecemos una amplia variedad de productos para todas tus necesidades de embalaje y celebración. Nuestro compromiso con la calidad y la atención al cliente nos ha convertido en el lugar preferido de la comunidad.
        Desde nuestros inicios, hemos trabajado incansablemente para brindar un servicio excepcional, ayudando a nuestros clientes a encontrar exactamente lo que necesitan. En La Boutique del Embalaje, creemos que cada cliente es único y merece una atención personalizada. Visítanos y descubre por qué somos el referente en embalaje y cotillón en Almagro.</p>
      </div>
      <div className=''>
        <img src={imagen} className='rounded-3xl' alt="imagen"></img>
      </div>
    </div>
  );
};

export default About;
