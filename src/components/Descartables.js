import React, { useEffect, useRef } from 'react';
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
import DescartablesTitle from "./DescartablesTitle";

const Descartables = () => {
    const imgRefs = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const currentRefs = imgRefs.current;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        currentRefs.forEach((img) => {
            if (img) observer.observe(img);
        });

        return () => {
            currentRefs.forEach((img) => {
                if (img) observer.unobserve(img);
            });
        };
    }, []);

    return (
        <div className="container relative">
            <DescartablesTitle />
          <style>{`
                .reveal {
                    opacity: 0;
                    transform: scale(0.95);
                    transition: opacity 1s ease-out, transform 1s ease-out;
                }
                .reveal.visible {
                    opacity: 1;
                    transform: scale(1);
                }
            `}</style>
            <div className="flex flex-col items-center mx-auto p-5 max-w-[80%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-col space-y-5">
                        <img ref={(el) => imgRefs.current[0] = el} src={img1} alt="random1" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[1] = el} src={img4} alt="random4" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[2] = el} src={img7} alt="random7" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[3] = el} src={img10} alt="random10" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[4] = el} src={img13} alt="random13" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[5] = el} src={img16} alt="random16" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <img ref={(el) => imgRefs.current[6] = el} src={img2} alt="random2" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[7] = el} src={img5} alt="random5" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[8] = el} src={img8} alt="random8" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[9] = el} src={img11} alt="random11" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[10] = el} src={img14} alt="random14" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[11] = el} src={img17} alt="random17" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[12] = el} src={img19} alt="random19" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <img ref={(el) => imgRefs.current[13] = el} src={img3} alt="random3" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[14] = el} src={img6} alt="random6" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[15] = el} src={img9} alt="random9" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[16] = el} src={img12} alt="random12" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[17] = el} src={img15} alt="random15" className="reveal w-full h-auto object-cover rounded-lg" />
                        <img ref={(el) => imgRefs.current[18] = el} src={img18} alt="random18" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Descartables;
