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
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const iconRef = useRef(null);
  const containerRef = useRef(null);

  const openModal = () => {
    if (iconRef.current && containerRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const topPosition = rect.top - containerRect.top;
      const leftPosition = rect.right - containerRect.left + 10; // Add 10 pixels to the right

      setModalPosition({ top: topPosition, left: leftPosition });
      setModalIsOpen(true);
    }
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div ref={containerRef} className="icon-parent-container" style={{ position: 'relative' }}>
      <li className="icon-container px-2 py-2 relative" onClick={openModal} style={{ cursor: 'pointer' }}>
        <div className="icon-wrapper">
          <Icon ref={iconRef} src={icon.src} alt={icon.alt} />
          <span className={`icon-label ${modalIsOpen ? 'icon-label-bold' : ''}`}>{label}</span>
        </div>
      </li>
      {modalIsOpen && (
        <div className="modal-content-container" style={{ position: 'absolute', top: modalPosition.top, left: modalPosition.left }}>
          <CustomModal onClose={closeModal} label={label} />
        </div>
      )}
    </div>
  );
};





const CustomModal = ({ onClose, label, position }) => {
  if (!position) {
    console.error('Position is not defined');
    return null;
  }

  const contentRef = useRef();

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.0)' // Transparent background
      }}
      onClick={onClose} // Close the modal when the overlay is clicked
    >
      <div
        className="modal-content-container"
        style={{
          position: 'fixed',
          top: position.top,
          left: position.left,
          zIndex: 10000 // Ensure the content is above the overlay
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks on the content from closing the modal
      >
        <div className="modal-content" ref={contentRef}>
          <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
        </div>
      </div>
    </div>
  );
};









