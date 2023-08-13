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
  const iconAndLabelRef = useRef(null);

  const openModal = () => {
    const rect = iconAndLabelRef.current.getBoundingClientRect();
    const topPosition = rect.top + window.scrollY;
    const leftPosition = rect.right + 20;
    setModalPosition({ top: topPosition, left: leftPosition });
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto'; // Allow scrolling
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalIsOpen && iconAndLabelRef.current && !iconAndLabelRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalIsOpen]);

  return (
    <li className="icon-container px-1 py-1 relative" style={{ marginLeft: '0.5rem' }}>
      <div className="icon-parent-container" style={{ position: 'relative', padding: '0px' }}>
        <div ref={iconAndLabelRef} onClick={openModal} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
          <Icon src={icon.src} alt={icon.alt} />
          <span className={`icon-label ${modalIsOpen ? 'icon-label-bold' : ''}`} style={{ minWidth: '100px' }}>{label}</span> {/* Set min-width as needed */}
        </div>
        {modalIsOpen && <CustomModal position={modalPosition} onClose={closeModal} label={label} />}
      </div>
    </li>
  );
};




const CustomModal = ({ onClose, label, position }) => {
  return (
    <div
      className="modal-content-container"
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left, // Using left position instead of right
        zIndex: 10000
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content">
        <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
      </div>
    </div>
  );
};










