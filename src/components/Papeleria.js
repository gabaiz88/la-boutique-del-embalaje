import React, { useEffect } from 'react';
import AOS from 'aos';
import img1 from '../img/papeleria/img1.jpg';
import img2 from '../img/papeleria/img2.jpg';
import img3 from '../img/papeleria/img3.jpg';
import img4 from '../img/papeleria/img4.jpg';
import img5 from '../img/papeleria/img5.jpg';
import img6 from '../img/papeleria/img6.jpg';
import img7 from '../img/papeleria/img7.jpg';
import img8 from '../img/papeleria/img8.jpg';
import img9 from '../img/papeleria/img9.jpg';
import img10 from '../img/papeleria/img10.jpg';
import img11 from '../img/papeleria/img11.jpg';

const Papeleria = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 50,
        });
    }, []);

    return (
        <div className='bg-black'>
            <div className="flex flex-col items-center mx-auto p-5 max-w-[80%]">
                <h2 className="text-3xl mb-5 text-white">Papeleria - Embalaje</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-col space-y-5">
                        <img src={img1} alt="random1" className="reveal w-full h-auto object-cover rounded-lg" data-aos="fade-up" />
                        <img src={img4} alt="random4" className="reveal w-full h-auto object-cover rounded-lg" data-aos="fade-up" />
                        <img src={img7} alt="random7" className="reveal w-full h-auto object-cover rounded-lg" data-aos="fade-up" />
                        <img src={img10} alt="random10" className="reveal w-full h-auto object-cover rounded-lg" data-aos="fade-up" />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <img src={img2} alt="random2" className="reveal w-full h-auto object-cover rounded-lg" data-aos="fade-up" />
                        <img src={img5} alt="random5" className="reveal w-full h-auto object-cover rounded-lg" data-aos="fade-up" />
                        <img src={img8} alt="random8" className="reveal w-full h-auto object-cover rounded-lg" data-aos="fade-up" />
                        <img src={img11} alt="random11" className="reveal w-full h-auto object-cover rounded-lg" data-aos="fade-up" />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <img src={img3} alt="random3" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img6} alt="random6" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img9} alt="random9" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Papeleria;
