import React from 'react';

const UserIcon2 = ({ className }) => {
  return (
    <div
      className={className} // Added className prop
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        marginLeft: '1px',
        background: `url('https://i.ibb.co/PhrSq2p/Capture.png') no-repeat center/cover`, // Centered and covering the entire div
        overflow: 'hidden' // Ensuring no spill-over
      }}
    />
  );
};

export default UserIcon2;











// ../assets/icons/userIcon2.js

//import React from 'react';

//const UserIcon2 = () => {
//  return <img src="https://i.ibb.co/PhrSq2p/Capture.png" alt="User Icon" style={{ width: '20px', height: '20px', marginLeft: '2px' }} />;
//};

//export default UserIcon2; 

