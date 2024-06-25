import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappIcon = () => {
  return (
    <a id="whatsapp"
      href="https://wa.me/+5491168813544"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 sm:right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default WhatsappIcon;