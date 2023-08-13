import React, { useState, useRef, useEffect } from 'react';

const icons = [
  { src: "https://i.ibb.co/Bj70xwG/anon.jpg", alt: "Icon 3", label: "anynomous" },
  { src: "https://i.ibb.co/SX5bMQw/mike.jpg", alt: "Icon 4", label: "mcmmike" },
  { src: "https://i.ibb.co/mhcXpxR/mac.jpg", alt: "Icon 5", label: "future3000" },
  { src: "https://i.ibb.co/VMsjm9f/mw-grin.png", alt: "Icon 6", label: "mwgrin_fr" }
];

export const IconList = () => (
  <ul className="icon-list">
    {icons.map((icon, index) => (
      <li className="icon-container" key={index}>
        <div className="icon-wrapper">
          <img src={icon.src} alt={icon.alt} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
          <span className="icon-label">{icon.label}</span>
        </div>
      </li>
    ))}
  </ul>
);

export const IconWrapper = ({ IconComponent, label }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const iconImageRef = useRef(null);

  const openModal = () => {
    const rect = iconImageRef.current.getBoundingClientRect();
    console.log("Icon position:", rect);
    const leftPosition = rect.right;
    console.log("Modal left position:", leftPosition);
    setModalPosition({ top: rect.top + window.scrollY, left: leftPosition });
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false); // Here's the closeModal function

  return (
    <li className="icon-container px-2 py-2 relative" onClick={openModal} style={{ cursor: 'pointer' }}>
      <div className="icon-wrapper">
        <img ref={iconImageRef} src={IconComponent.src} alt={IconComponent.alt} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
        <span className={`icon-label ${modalIsOpen ? 'highlighted' : ''}`}>{label}</span>
      </div>
      {modalIsOpen && <CustomModal position={modalPosition} onClose={closeModal} label={label} />}
    </li>
  );
};


const CustomModal = ({ onClose, label, position }) => {
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
    <div className="modal-content-container" style={{ position: 'absolute', top: position.top, left: position.left }}>
      <div className="modal-content" ref={contentRef}>
        <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
      </div>
    </div>
  );
};







