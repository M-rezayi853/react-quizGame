import React from 'react';

import './CustomBtn.scss';

const CustomBtn = ({ children, primary, secondary, success, info, blue, white, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`customBtn ${primary && 'primary'} ${
        secondary && 'secondary'
      } ${success && 'success'} ${info && 'info'} ${blue && 'blue'} ${white && 'white'}`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
