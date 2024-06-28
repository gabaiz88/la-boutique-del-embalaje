import React from 'react';
import mercado_pago from "../img/mercado-pago-logo-vector-2023.png";
import tarjetas from "../img/tarjetas.png";

const Banner = () => {
    return (
            <div class="flex flex-wrap p-5 gap-6 sm:flex-row items-center justify-center sm:gap-24 bg-white">
                <div class="envios flex h-24 w-40 justify-center box-border rounded sm:h-20 sm:w-56 p-2 gap-2 items-center text-gray-700 bg-gray-300">
                    <span class="material-symbols-outlined text-4xl"> local_shipping </span>
                    <p>Envios a domicilio</p>
                </div>
                <div class="envios flex h-24 w-40 justify-center box-border rounded sm:h-20 sm:w-56 p-2 gap-2 items-center text-gray-700 bg-gray-300">
                    <span class="material-symbols-outlined text-4xl"> shopping_cart </span>
                    <p class="text-center">Venta por Menor y por Mayor</p>
                </div>
                <img src={mercado_pago} className="w-40 sm:w-60" alt="mercado_pago"></img>
                <img src={tarjetas} className="w-40 sm:w-60" alt="tarjetas"></img>
            </div>
    );
};

export default Banner;
