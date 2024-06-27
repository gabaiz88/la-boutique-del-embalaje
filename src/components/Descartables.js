import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import img1 from '../img/descartables/img1.jpg';
import img2 from '../img/descartables/img2.jpg';
import img3 from '../img/descartables/img3.jpg';
import img4 from '../img/descartables/img4.jpg';
import img5 from '../img/descartables/img5.jpg';
import img6 from '../img/descartables/img6.jpg';
import img7 from '../img/descartables/img7.jpg';
import img8 from '../img/descartables/img8.jpg';
import img9 from '../img/descartables/img9.jpg';
import img10 from '../img/descartables/img10.jpg';
import img11 from '../img/descartables/img11.jpg';
import img12 from '../img/descartables/img12.jpg';
import img13 from '../img/descartables/img13.jpg';
import img14 from '../img/descartables/img14.jpg';
import img15 from '../img/descartables/img15.jpg';
import img16 from '../img/descartables/img16.jpg';
import img17 from '../img/descartables/img17.jpg';
import img18 from '../img/descartables/img18.jpg';
import img19 from '../img/descartables/img19.jpg';

const Descartables = () => {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            reset: true,
            viewFactor: 0.2,
        });
    }, []);

    return (
        <div className='bg-black'>
            <div className="flex flex-col items-center mx-auto p-5 max-w-[80%]">
                <h2 className="text-3xl mb-5 text-white">Envases descartables</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-col space-y-5">
                        <img src={img1} alt="random1" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img4} alt="random4" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img7} alt="random7" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img10} alt="random10" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img13} alt="random13" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img16} alt="random16" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <img src={img2} alt="random2" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img5} alt="random5" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img8} alt="random8" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img11} alt="random11" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img14} alt="random14" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img17} alt="random17" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img19} alt="random19" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <img src={img3} alt="random3" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img6} alt="random6" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img9} alt="random9" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img12} alt="random12" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img15} alt="random15" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img src={img18} alt="random18" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Descartables;
