import React from "react";
import video from "../img/cotillon/titulo2.mp4";

const CotillonTitle = () => {
    return (
        <div className="cotillon-title relative">
            <style>{`
  
        .cotillon-title video {
            width: 100%;
            height: 370px;
            margin-left: 1px;
        }

        .cotillon-title h2 {
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
          .cotillon-title video {
            display: none;
          }

          .cotillon-title h2 {
            background-color: #000;
            font-size: 5vw;
            display: none;
          }
        }

      `}</style>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <h3 className="text-white text-4xl text-center my-5 sm:invisible"> Cotillón </h3>
            <h2>COTILLÓN</h2>
        </div>
    );
};

export default CotillonTitle;
