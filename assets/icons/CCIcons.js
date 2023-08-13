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

  const openModal = () => {
    const rect = iconRef.current.getBoundingClientRect();
    console.log('Rect values:', rect); // Log the entire rect object
    const topPosition = rect.top + window.scrollY;
    const leftPosition = rect.right + 100; // Add 10 pixels to the right

    console.log('Calculated top:', topPosition, 'Calculated left:', leftPosition); // Log the calculated positions
    setModalPosition({ top: topPosition, left: leftPosition });
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <ul className="icon-list">
      <div className="icon-parent-container" style={{ position: 'relative' }}>
        <li className="icon-container px-2 py-2 relative" onClick={openModal} style={{ cursor: 'pointer' }}>
          <div className="icon-wrapper">
            <Icon ref={iconRef} src={icon.src} alt={icon.alt} /> {/* Use Icon directly */}
            <span className={`icon-label ${modalIsOpen ? 'highlighted' : ''}`}>{label}</span>
          </div>
        </li>
        {modalIsOpen && <CustomModal position={modalPosition} onClose={closeModal} label={label} />}
      </div>
    </ul>
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
    <div className="modal-content-container" style={{ position: 'fixed', top: position.top, left: position.left }}>

      <div className="modal-content" ref={contentRef}>
        <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
      </div>
    </div>
  );
};





