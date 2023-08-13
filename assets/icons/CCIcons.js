import React, { useState, useRef, useEffect } from 'react';

const icons = [
  { src: "https://i.ibb.co/Bj70xwG/anon.jpg", alt: "Icon 3", label: "anynomous" },
  { src: "https://i.ibb.co/SX5bMQw/mike.jpg", alt: "Icon 4", label: "mcmmike" },
  { src: "https://i.ibb.co/mhcXpxR/mac.jpg", alt: "Icon 5", label: "future3000" },
  { src: "https://i.ibb.co/VMsjm9f/mw-grin.png", alt: "Icon 6", label: "mwgrin_fr" }
];

export const Icon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: '24px', height: '24px', borderRadius: '50%' }}
  />
);

export const IconList = () => (
  <ul className="icon-list">
    {icons.map((icon, index) => (
      <IconWrapper IconComponent={() => <Icon src={icon.src} alt={icon.alt} />} label={icon.label} key={index} />
    ))}
  </ul>
);

export const IconWrapper = ({ IconComponent, label }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const iconRef = useRef(null);

  const openModal = () => {
    const rect = iconRef.current.getBoundingClientRect();
    console.log(`Icon position for ${label}:`, rect);

    const modalWidth = 200; // The width of your modal
    let leftPosition = rect.right;

    // Check if the modal would go off the right side of the viewport
    if (leftPosition + modalWidth > window.innerWidth) {
      leftPosition = rect.left - modalWidth; // Position the modal to the left of the icon
    }

    const newPosition = { top: rect.top + window.scrollY, left: leftPosition };
    console.log(`Modal position for ${label}:`, newPosition);

    setModalPosition(newPosition);
    setModalIsOpen(true);
  };

  const CustomModal = ({ onClose, label, position }) => {
  return (
    <div className="modal-content-container" style={{ top: position.top, left: position.left }}>
      <div className="modal-content">
        <p>Visit the <a href="https://www.grin.mw" target="_blank" rel="noopener noreferrer">forum</a></p>
      </div>
    </div>
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







