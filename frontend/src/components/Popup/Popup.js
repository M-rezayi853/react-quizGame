import React from 'react';

import { ReactComponent as CloseIcon1 } from '../../assets/icons/cancel.svg';
import './Popup.scss';

const Popup = ({ onClick, children }) => {
  return (
    <div className='popup'>
      <div className='popup__box'>
        <CloseIcon1
          className='popup__closeIcon'
          onClick={onClick}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;