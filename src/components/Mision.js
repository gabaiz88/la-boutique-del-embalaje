import React from 'react';
import imagen from '../img/frente_laboutique_cortada.png';
import linea from '../img/linea_crayon_naranja.jpg'

const Mision = () => {
    return (
        <div className='flex'>

            <div id="mision" className='bg-red_mision w-8/12 p-10'>
                <div className="flex justify-center w-10/12 mx-auto gap-36">
                    <div className='ml-12'>
                        <img src={imagen} className='rounded-3xl w-128' alt="imagen"></img>
                    </div>
                </div>
            </div>

            <div className='bg-orange_card w-2/4 flex flex-col justify-start p-10'>
                <div className=''>
                    <h2 className="text-5xl mb-1 text-black">Misión</h2>
                    <img src={linea} className='w-32 mr-3' alt="linea"></img>
                </div>
                <div className='w-9/12 text-lg text-black mt-10'>
                    <p>Nuestra misión es proporcionar envases descartables y artículos de cotillón de alta calidad que añadan valor a las celebraciones y la vida cotidiana de nuestros clientes. Nos dedicamos a innovar y ofrecer productos que cumplan con las expectativas de funcionalidad y diseño, asegurando siempre la satisfacción del cliente.</p>
                </div>
            </div>

        </div>
    );
};

export default Mision;