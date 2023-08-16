


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
  const [modalDetails, setModalDetails] = useState(null);

  const closeModal = () => {
    setModalDetails(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalDetails && !event.target.closest('.icon-container')) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalDetails]);

  return (
    <div className="icon-list-container"> {/* Correct placement for this div */}
      <ul className="icon-list">
        {icons.map((icon, index) => (
          <IconWrapper icon={icon} label={icon.label} key={index} setModalDetails={setModalDetails} />
        ))}
        {modalDetails && (
          <>
            <div className="background-popup popup-common-style"></div>
            <div className="modal-content-container popup-common-style">
              <div className="modal-content">
                <p>{modalDetails.text} <a href={modalDetails.url} target="_blank" rel="noopener noreferrer">{modalDetails.url}</a></p>
              </div>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};


export const IconWrapper = ({ icon, label, setModalDetails }) => {
  const openModal = () => {
    const details = userPopupDetails[label] || { text: "Visit the forum:", url: "https://www.grin.mw" };
    setModalDetails(details);
  };

  return (
    <li className="icon-container px-1 py-1 relative" style={{ marginLeft: '0.5rem', position: 'relative' }}>
      <div className="icon-parent-container" style={{ position: 'relative', padding: '0px' }}>
        <div className="icon-clickable" onClick={openModal} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
          <Icon src={icon.src} alt={icon.alt} />
          <span className="icon-label" style={{ minWidth: '100px' }}>{label}</span>
        </div>
      </div>
    </li>
  );
};


