import React, { useEffect, useRef } from 'react';
import img1 from '../img/cotillon/img1.jpg';
import img2 from '../img/cotillon/img2.jpg';
import img3 from '../img/cotillon/img3.jpg';
import img4 from '../img/cotillon/img4.jpg';
import CotillonTitle from "./CotillonTitle";

const Cotillon = () => {
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
            <CotillonTitle />
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
                        <img ref={(el) => imgRefs.current[1] = el} src={img4} alt="random2" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <img ref={(el) => imgRefs.current[2] = el} src={img2} alt="random3" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-5">
                    <img ref={(el) => imgRefs.current[3] = el} src={img3} alt="random4" className="reveal w-full h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cotillon;
