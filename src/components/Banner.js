import React from 'react';
import mercado_pago from "../img/mercado-pago-logo-vector-2023.png";
import tarjetas from "../img/tarjetas.png";

const Banner = () => {
    return (
            <div class="flex items-center justify-center gap-24 bg my-5">
                <div class="envios flex justify-center box-border rounded h-20 w-56 p-2 gap-2 items-center text-gray-700 bg-gray-300">
                    <span class="material-symbols-outlined text-4xl"> local_shipping </span>
                    <p>Envios a domicilio</p>
                </div>
                <div class="envios flex justify-center box-border rounded h-20 w-56 p-2 gap-2 items-center text-gray-700 bg-gray-300">
                    <span class="material-symbols-outlined text-4xl"> shopping_cart </span>
                    <p class="text-center">Venta por Menor y por Mayor</p>
                </div>
                <img src={mercado_pago} className="w-60" alt="mercado_pago"></img>
                <img src={tarjetas} className="w-60" alt="tarjetas"></img>
            </div>
    );
};

export default Banner;
