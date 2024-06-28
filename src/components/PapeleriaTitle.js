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
      `}</style>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <h2>PAPELERÍA</h2>
        </div>
    );
};

export default PapeleriaTitle;
