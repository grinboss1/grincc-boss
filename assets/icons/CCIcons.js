import React, { useState, useRef, useEffect } from 'react';

const icons = [
  { src: "https://i.ibb.co/Bj70xwG/anon.jpg", alt: "Icon 3", label: "anynomous" },
  { src: "https://i.ibb.co/SX5bMQw/mike.jpg", alt: "Icon 4", label: "mcmmike" },
  { src: "https://i.ibb.co/mhcXpxR/mac.jpg", alt: "Icon 5", label: "future3000" },
  { src: "https://i.ibb.co/VMsjm9f/mw-grin.png", alt: "Icon 6", label: "mwgrin_fr" }
];

export const Icon = React.forwardRef(({ src, alt }, ref) => (
  <img
    ref={ref}
    src={src}
    alt={alt}
    style={{ width: '24px', height: '24px', borderRadius: '50%' }}
  />
));


export const IconList = () => (
  <ul className="icon-list">
    {icons.map((icon, index) => (
      <IconWrapper icon={icon} label={icon.label} key={index} />
    ))}
  </ul>
);

export const IconWrapper = ({ icon, label }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const iconAndLabelRef = useRef(null);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  };

  return (
    <div className="icon-parent-container" style={{ position: 'relative' }}>
      <div ref={iconAndLabelRef} onClick={openModal} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
        <Icon src={icon.src} alt={icon.alt} />
        <span className={`icon-label ${modalIsOpen ? 'icon-label-bold' : ''}`}>{label}</span>
      </div>
      {modalIsOpen && <CustomModal iconAndLabelRef={iconAndLabelRef} onClose={closeModal} label={label} />}
    </div>
  );
};

const CustomModal = ({ iconAndLabelRef, onClose, label }) => {
  const rect = iconAndLabelRef.current.getBoundingClientRect();
  const topPosition = rect.top + window.scrollY;
  const leftPosition = rect.right;

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10000,
        background: 'rgba(0, 0, 0, 0.0)'
      }}
      onClick={onClose}
    >
      <div
        className="modal-content-container"
        style={{
          position: 'absolute', // Now absolute inside the fixed overlay
          top: topPosition,
          left: leftPosition
        }}
      >
        <div className="modal-content">
          <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
        </div>
      </div>
    </div>
  );
};










