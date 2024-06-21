import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Cards = () => {
    return (
        <div id="product" className="w-full bg-vainilla">
            <div className="flex flex-col items-center">
                <h2 className="text-5xl mt-10 text-ecru">Productos</h2>
                <div className="flex gap-20 justify-between">
                <Card />
                <Card2 />
                <Card3 />
                </div>
            </div>
        </div>
    )
};

export default Cards;