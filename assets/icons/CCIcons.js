import React, { useState } from 'react';

export const Icon3 = () => (
  <img
    src="https://i.ibb.co/Bj70xwG/anon.jpg"
    alt="Icon 3"
    style={{ width: '24px', height: '24px', borderRadius: '50%' }}
  />
);

export const Icon4 = () => (
  <img
    src="https://i.ibb.co/SX5bMQw/mike.jpg"
    alt="Icon 4"
    style={{ width: '24px', height: '24px', borderRadius: '50%' }}
  />
);

export const Icon5 = () => (
  <img
    src="https://i.ibb.co/mhcXpxR/mac.jpg"
    alt="Icon 5"
    style={{ width: '24px', height: '24px', borderRadius: '50%' }}
  />
);

export const Icon6 = () => (
  <img
    src="https://i.ibb.co/VMsjm9f/mw-grin.png"
    alt="Icon 6"
    style={{ width: '24px', height: '24px', borderRadius: '50%' }}
  />
);

const CustomModal = ({ isOpen, onClose, label, link }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-close-area" onClick={onClose}></div> {/* This div will handle clicks to close the modal */}
      <div className="modal-content">
        <h2>{label}</h2>
        <p>Visit the link:</p>
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </div>
    </div>
  );
};



export const IconWrapper = ({ IconComponent, label, link }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <li className="icon-container px-2 py-2" onClick={openModal} style={{ cursor: 'pointer' }}>
      <div className="icon-wrapper">
        <IconComponent />
        <span className="icon-label">{label}</span>
      </div>
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} label={label} link={link} />
    </li>
  );
};


