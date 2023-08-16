


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

export const IconList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [details, setDetails] = useState(null);

  const openModal = (label) => {
    const labelDetails = userPopupDetails[label] || { text: "Visit the forum:", url: "https://www.grin.mw" };
    setDetails(labelDetails);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalIsOpen && !event.target.closest('.icon-container')) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalIsOpen]);

  return (
    <ul className="icon-list">
      {icons.map((icon, index) => (
        <IconWrapper icon={icon} label={icon.label} key={index} openModal={openModal} />
      ))}
      {modalIsOpen && (
        <>
          <div className="background-popup popup-common-style"></div>
          <div className="modal-content-container popup-common-style">
            <div className="modal-content">
              <p>{details.text} <a href={details.url} target="_blank" rel="noopener noreferrer">{details.url}</a></p>
            </div>
          </div>
        </>
      )}
    </ul>
  );
};

export const IconWrapper = ({ icon, label, openModal }) => {
  return (
    <li className="icon-container px-1 py-1 relative" style={{ marginLeft: '0.5rem', position: 'relative' }}>
      {/* ... (rest of the code) */}
        <div className="icon-clickable" onClick={() => openModal(label)} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
          {/* ... */}
        </div>
      {/* ... */}
    </li>
  );
};


