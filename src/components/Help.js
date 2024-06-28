import React from 'react';
import Modal from 'react-modal';
import CenteredAccordion from './CenteredAccordion';

Modal.setAppElement('#root'); // Asegúrate de que #root sea el elemento raíz de tu aplicación

const Help = ({ isOpen, onClose }) => {
  return (
    <div>
      <style>{`
        .modal-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          width: 60%; /* Ancho del modal ajustado al 60% del ancho de la pantalla */
          max-width: 600px; /* Máximo ancho permitido */
          max-height: 80%;
          overflow: auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1000; /* Asegura que esté por encima de otros elementos */
        }
        .close-button_custom {
          position: absolute;
          right: 20px;
          font-size: 1.5rem;
          cursor: pointer;
          background-color: transparent;
          border: none;
          outline: none;
          color: #333; /* Cambia el color del botón de cierre */
        }
      `}</style>

      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Ayuda Modal"
        className="modal-content" // Clase para el contenido del modal
        overlayClassName="modal-overlay" // Clase para el overlay oscuro detrás del modal
      >
        <div className="modal-header flex flex-row justify-between items-center mb-5">
          <h2 className='text-3xl'>Ayuda</h2>
          <button className="close-button_custom" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <CenteredAccordion />
        </div>
      </Modal>
    </div>
  );
};

export default Help;
