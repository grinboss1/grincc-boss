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
    <li className="icon-container px-1 py-1 relative" style={{ marginLeft: '0.5rem', position: 'relative' }}>
      <div className="icon-parent-container" style={{ position: 'relative', padding: '0px' }}>
        <div ref={iconAndLabelRef} onClick={openModal} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
          <Icon src={icon.src} alt={icon.alt} />
          <span className={`icon-label ${modalIsOpen ? 'icon-label-bold' : ''}`} style={{ minWidth: '100px' }}>{label}</span>
        </div>
        {modalIsOpen && (
          <div className="modal-content-container" style={{ position: 'absolute', top: '50%', left: '100%', zIndex: 10000, transform: 'translateY(-50%)' }}>
            {/* top: '50%' and transform: 'translateY(-50%)' center the popup vertically relative to the icon */}
            <div className="modal-content">
              <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};


const userPopupTexts = {
  "anynomous": "Anynomous's details...",
  "mcmmike": "Mcmmike's details...",
  "future3000": "Future3000's details...",
  "mwgrin_fr": "Mwgrin_fr's details...",
  // Add more as needed
};



const CustomModal = ({ onClose, label, position }) => {
  const popupText = userPopupTexts[label] || "Default text if label not found";

  return (
    <div
      className="modal-content-container"
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        zIndex: 10000
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content">
        <p>{popupText}</p>
        <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
      </div>
    </div>
  );
};











