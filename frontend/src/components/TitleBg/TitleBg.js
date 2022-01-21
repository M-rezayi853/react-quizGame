import React from 'react';

import './TitleBg.scss';

const TitleBg  = ({ children, mgt, mgb }) => {
  return (
    <div className={`row titleBg ${mgt && 'mgt'} ${mgb && 'mgb'}`}>
      <div className='col-12-sm'>
        <h4 className='titleBg__title'>
          {children}
        </h4>
      </div>
    </div>
  );
};

export default TitleBg;