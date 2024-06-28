import React, { useEffect, useRef } from "react";
import img1 from "../img/papeleria/img1.jpg";
import img2 from "../img/papeleria/img2.jpg";
import img3 from "../img/papeleria/img3.jpg";
import img4 from "../img/papeleria/img4.jpg";
import img6 from "../img/papeleria/img6.jpg";
import img7 from "../img/papeleria/img7.jpg";
import img8 from "../img/papeleria/img8.jpg";
import img10 from "../img/papeleria/img10.jpg";
import img11 from "../img/papeleria/img11.jpg";
import PapeleriaTitle from "./PapeleriaTitle";

const Papeleria = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    const currentRefs = imgRefs.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
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
      <PapeleriaTitle />
      <style>{`
                .container{
                    width: 100%;
                    height: 100vh;
                    position: relative;
                    background-color: #000;
                }
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
      <div className="flex flex-col items-center mx-auto p-5 max-w-[80%]  bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="flex flex-col space-y-5">
            <img
              ref={(el) => (imgRefs.current[0] = el)}
              src={img1}
              alt="random1"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
            <img
              ref={(el) => (imgRefs.current[1] = el)}
              src={img4}
              alt="random4"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
            <img
              ref={(el) => (imgRefs.current[2] = el)}
              src={img7}
              alt="random7"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
            <img
              ref={(el) => (imgRefs.current[3] = el)}
              src={img10}
              alt="random10"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-5">
            <img
              ref={(el) => (imgRefs.current[4] = el)}
              src={img2}
              alt="random2"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
            <img
              ref={(el) => (imgRefs.current[6] = el)}
              src={img8}
              alt="random8"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
            <img
              ref={(el) => (imgRefs.current[7] = el)}
              src={img11}
              alt="random11"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-5">
            <img
              ref={(el) => (imgRefs.current[8] = el)}
              src={img3}
              alt="random3"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
            <img
              ref={(el) => (imgRefs.current[9] = el)}
              src={img6}
              alt="random6"
              className="reveal w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Papeleria;
