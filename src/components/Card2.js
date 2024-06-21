"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card.tsx";
import descartables from '../img/desechables.jpg';
import { Link } from 'react-router-dom';


const Card2 = () => {
  return (
    <CardContainer className="inter-var flex flex-col">
      <CardBody className="bg-ecru relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto p-3">
        <CardItem translateZ="100" className="w-full">
          <img
            src={descartables}
            height="1000"
            width="1000"
            className="max-h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
      <div className="w-full h-24 bg-orange_card rounded-b-2xl items-center">
        <h2 className="text-3xl text-black text-center mt-3">DESCARTABLES</h2>
        <div>
          <Link to="#"><p className="text-end mt-4 mr-3 text-1xl text-white hover:drop-shadow-custom">Ver productos ---></p></Link>
        </div>
      </div>
    </CardContainer>

  );
};

export default Card2;
