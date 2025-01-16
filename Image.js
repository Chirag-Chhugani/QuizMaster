// ChildComponent.js

import React from 'react';

const Image = ({ image }) => {
  return (
    <div>
      {/* Use the image passed as a prop */}
      <img  style={{borderRadius:"5px",width: '150px' }} src={image} alt="Football Quiz Logo"  />
    </div>
  );
};

export default Image;