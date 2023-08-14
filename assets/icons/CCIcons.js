
import React, { useState, useRef, useEffect } from 'react';

const icons = [
  { src: "https://i.ibb.co/Bj70xwG/anon.jpg", alt: "Icon 3", label: "anynomous" },
  { src: "https://i.ibb.co/SX5bMQw/mike.jpg", alt: "Icon 4", label: "mcmmike" },
  { src: "https://i.ibb.co/mhcXpxR/mac.jpg", alt: "Icon 5", label: "future3000" },
  { src: "https://i.ibb.co/VMsjm9f/mw-grin.png", alt: "Icon 6", label: "mwgrin_fr" }
];

const userPopupDetails = {
  "anynomous": { text: "Key base:", url: "https://45454545.com" },
  "mcmmike": { text: "Forum:", url: "https://45545.com" },
  "future3000": { text: "Telegram:", url: "https://dfgjkdfgfd.com" },
  "mwgrin_fr": { text: "Twitter:", url: "https://dfg3434.com" },
  // Add more as needed
};

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

  const iconHeight = 24; // Icon height in pixels

  const details = userPopupDetails[label] || { text: "Visit the forum:", url: "https://www.grin.mw" };

  return (
    <li className="icon-container px-1 py-1 relative" style={{ marginLeft: '0.5rem', position: 'relative' }}>
      <div className="icon-parent-container" style={{ position: 'relative', padding: '0px' }}>
        <div
          ref={iconAndLabelRef}
          onClick={openModal}
          style={{
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            border: modalIsOpen ? '2px solid #333' : 'none',
            borderRadius: '4px',
            backgroundColor: modalIsOpen ? '#f9f9f9' : 'transparent', // Same background color as the popup
          }}
        >
          <Icon src={icon.src} alt={icon.alt} />
          <span className={`icon-label ${modalIsOpen ? 'icon-label-bold' : ''}`} style={{ minWidth: '100px' }}>{label}</span>
        </div>
        {modalIsOpen && (
          <div
            className={`modal-content-container ${modalIsOpen ? 'special-border' : ''}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '100%',
              zIndex: 10000,
              transform: 'translateY(-50%)',
              border: '2px solid #333',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9', // Background color of the popup
            }}
          >
            <div className="modal-content">
              <p>{details.text} <a href={details.url} target="_blank" rel="noopener noreferrer">{details.url}</a></p>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};






