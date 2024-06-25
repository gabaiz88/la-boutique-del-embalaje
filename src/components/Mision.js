import React from 'react';
import imagen from '../img/frente_laboutique_cortada.png';

const Mision = () => {
    return (
        <div className='flex flex-col sm:flex-row'>
            <div id="mision" className='bg-red_mision p-5 sm:w-8/12 sm:p-10'>
                <div className="flex justify-center mx-auto sm:gap-36">
                    <div className='sm:ml-12'>
                        <img src={imagen} className='rounded-3xl w-128' alt="imagen"></img>
                    </div>
                </div>
            </div>

            <div className='bg-orange_card p-5 sm:w-2/4 flex flex-col justify-start sm:p-10'>
                <div className=''>
                    <h2 className="text-5xl mb-1 text-black">Misión</h2>
                </div>
                <div className='w-full sm:w-9/12 text-lg text-black mt-10'>
                    <p>Nuestra misión es proporcionar envases descartables y artículos de cotillón de alta calidad que añadan valor a las celebraciones y la vida cotidiana de nuestros clientes. Nos dedicamos a innovar y ofrecer productos que cumplan con las expectativas de funcionalidad y diseño, asegurando siempre la satisfacción del cliente.</p>
                </div>
            </div>

        </div>
    );
};

export default Mision;