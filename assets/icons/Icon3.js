import React from 'react';

const Icon3 = ({ className }) => {
  return (
    <img
      className={className} // Added className prop
      src="https://i.ibb.co/Bj70xwG/anon.jpg"
      alt="Icon 3"
      style={{ width: '24px', height: '24px', borderRadius: '50%' }}
    />
  );
};

export default Icon3;
