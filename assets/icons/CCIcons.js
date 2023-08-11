import React, { useState, useRef, useEffect } from 'react';

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

export const IconWrapper = ({ IconComponent, label }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <li className="icon-container px-2 py-2 relative" onClick={openModal} style={{ cursor: 'pointer' }}>
      <div className="icon-wrapper">
        <IconComponent />
        <span className={`icon-label ${modalIsOpen ? 'highlighted' : ''}`}>{label}</span>
      </div>
      {modalIsOpen && <CustomModal onClose={closeModal} label={label} />}
    </li>
  );
};


const CustomModal = ({ onClose, label }) => {
  const contentRef = useRef();

  const handleClickOutside = (e) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content-container">
        <div className="modal-content" ref={contentRef}>
          <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
        </div>
      </div>
    </div>
  );
};

