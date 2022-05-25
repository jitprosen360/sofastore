import React from 'react';
import './styles.css';

const Modal = ({  hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="modalk" >
        {children}
      </div>
    </div>
  ];
}

export default Modal;