import React, { useState, useEffect } from 'react';
import img1 from '../img/cajas_panoramica.jpg';
import img2 from '../img/descartables_carousel.jpg';
import img3 from '../img/party_supplies.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: img1, caption: 'img 1' },
    { id: 2, image: img2, caption: 'img 2' },
    { id: 3, image: img3, caption: 'img 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia de diapositiva cada 5 segundos

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]); // Se ejecuta cuando currentSlide cambia

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="-z-10 relative mx-auto mt-auto max-w-full max-h-[140px] sm:max-h-[550px] overflow-hidden">
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`mySlides ${index === currentSlide ? 'block' : 'hidden'} fade w-full h-full`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;


