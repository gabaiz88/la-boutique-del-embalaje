import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

const Gallery = () => {
  useEffect(() => {
    // Configura ScrollReveal
    ScrollReveal().reveal('.image-container', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {/* Imagen 1 */}
      <div className="image-container">
        <Link to="/ruta-de-tu-pagina">
          <img src="url-de-tu-imagen-1" alt="Imagen 1" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
        </Link>
      </div>

      {/* Imagen 2 */}
      <div className="image-container">
        <Link to="/ruta-de-tu-pagina">
          <img src="url-de-tu-imagen-2" alt="Imagen 2" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
        </Link>
      </div>

      {/* Imagen 3 */}
      <div className="image-container">
        <Link to="/ruta-de-tu-pagina">
          <img src="url-de-tu-imagen-3" alt="Imagen 3" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
