


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

  return (
    <ul className="icon-list">
      {icons.map((icon, index) => (
        <IconWrapper
          icon={icon}
          label={icon.label}
          key={index}
          setModalDetails={setModalDetails}
        />
      ))}
      {modalDetails && (
        <>
          <div className="background-popup popup-common-style"></div>
          <div className="modal-content-container popup-common-style">
            <div className="modal-content">
              <p>
                {modalDetails.text}{' '}
                <a
                  href={modalDetails.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {modalDetails.url}
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </ul>
  );
};

export const IconWrapper = ({ icon, label, setModalDetails }) => {
  const iconAndLabelRef = useRef(null);

  const openModal = () => {
    const details = userPopupDetails[label] || {
      text: 'Visit the forum:',
      url: 'https://www.grin.mw',
    }; // Default if label not found
    setModalDetails(details);
  };

  const closeModal = () => {
    setModalDetails(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalDetails && iconAndLabelRef.current && !iconAndLabelRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalDetails]);

  return (
    // ... (rest of the code)
  );
};


