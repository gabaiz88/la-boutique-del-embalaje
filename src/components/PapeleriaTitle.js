import React from "react";
import video from "../img/papeleria/papeleria_video.mp4";

const PapeleriaTitle = () => {
    return (
        <div className="papeleria-title relative">
            <style>{`
  
        .papeleria-title video {
            width: 83%;
            height: 450px;
            margin-left: 133px;
        }

        .papeleria-title h2 {
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
            font-size: 150px;
            font-weight: 900;
            mix-blend-mode: multiply;
        }
               @media (max-width: 768px) {
          .papeleria-title video {
            display: none;
          }

          .papeleria-title h2 {
            background-color: #000;
            font-size: 5vw;
            display: none;
          }
        }
      `}</style>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <h3 className="text-white text-4xl text-center my-5 sm:invisible"> Papelería </h3>
            <h2>PAPELERÍA</h2>
        </div>
    );
};

export default PapeleriaTitle;
