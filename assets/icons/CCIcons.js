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
  const iconAndLabelRef = useRef(null); // Reference to the div containing icon and label

  const openModal = () => {
    const rect = iconAndLabelRef.current.getBoundingClientRect(); // Get bounding rect of the div
    const topPosition = rect.top + window.scrollY;
    const rightPosition = 20; // Distance from the right edge of the parent container

    setModalPosition({ top: topPosition, right: rightPosition });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    // Allow scrolling
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  };

  useEffect(() => {
    // Close the modal when clicking anywhere outside the modal
    const handleClickOutside = (event) => {
      if (modalIsOpen && iconAndLabelRef.current && !iconAndLabelRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [modalIsOpen]);

  return (
    <li className="icon-container px-1 py-1 relative" style={{ marginLeft: '0.5rem', width: '200px' }}> {/* Adjust the width as needed */}
      <div className="icon-parent-container" style={{ position: 'relative', padding: '0px' }}>
      {/* Wrap the icon and label inside a div and attach the click event to this div */}
      <div ref={iconAndLabelRef} onClick={openModal} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
        <Icon src={icon.src} alt={icon.alt} />
        <span className={`icon-label ${modalIsOpen ? 'icon-label-bold' : ''}`}>{label}</span>
      </div>
      {modalIsOpen && <CustomModal position={modalPosition} onClose={closeModal} label={label} />}
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
        right: position.right, // Set the right position instead of the left
        zIndex: 10000 // Ensure the content is above the overlay
      }}
      onClick={(e) => e.stopPropagation()} // Prevent clicks on the content from closing the modal
    >
      <div className="modal-content">
        <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
      </div>
    </div>
  );
};










