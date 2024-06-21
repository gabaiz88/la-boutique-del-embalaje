import React from 'react';
import ContactForm from "./Contact_Form";

const Contact = () => {
    return (
        <div id="contact" className='w-full bg-hookers_green'>
            <div className="w-10/12 text-center mx-auto flex-col justify-center bg-blue_contact p-10">
                <h2 className="text-5xl mb-10 text-gray-800">Contacto</h2>
                <div className='flex justify-center	items-center w-full gap-10 ml-2'>
                    <div className='h-full gap-3'>
                        <div className='mb-4'>
                            <p className="text-2xl text-gray-800">
                                Dirección: Jeronimo Salguero 679, Almagro.
                            </p>
                            <p className="text-2xl text-gray-800">
                                Teléfono: 4867-5494 o 11-6881-3544
                            </p>
                            <a className="text-2xl text-white hover:text-green-800" href="mailto:boutiquedelembalaje@gmail.com?subject=Consulta%20general" >
                                Email: boutiquedelembalaje@gmail.com
                            </a>
                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0689555931885!2d-58.4192638!3d-34.6024178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb63f8aa6127%3A0x6d839dc8a4c2ed9b!2sLa%20boutique%20del%20embalaje!5e0!3m2!1ses!2ses!4v1717515113194!5m2!1ses!2ses" width="550" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="mymap"></iframe>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
