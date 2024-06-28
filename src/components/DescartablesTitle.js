import React, { useEffect, useRef, useState } from "react";
import video from "../img/descartables/7767530-hd_2048_1080_25fps.mp4";

const DescartablesTitle = () => {
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isMobile) {
                videoRef.current.pause();
                videoRef.current.removeAttribute("autoplay");
            } else {
                videoRef.current.play();
                videoRef.current.setAttribute("autoplay", true);
            }
        }
    }, [isMobile]);

    return (
        <div className="descartables-title relative">
            <style>{`
  
        .descartables-title video {
            width: 100%;
            height: 535px;
            margin-left: 1px;
        }

        .descartables-title h2 {
            position: absolute;
            top: 0;
            left: 0;
            background: #000;
            height: 100%;
            width: 100%;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 130px;
            font-weight: 900;
            text-align: center;
            mix-blend-mode: multiply;
        }

        @media (max-width: 768px) {
          .descartables-title video {
            display: none;
          }

          .descartables-title h2 {
            background-color: #000;
            font-size: 5vw;
            display: none;
          }
        }

      `}</style>
            <video ref={videoRef} muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <h3 className="text-white text-4xl text-center my-5 sm:invisible"> Envases <br />Descartables </h3>
            <h2>ENVASES <br /> DESCARTABLES</h2>
        </div>
    );
};

export default DescartablesTitle;
