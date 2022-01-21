import React from 'react';
import ProfileImg from '../ProfileImg/ProfileImg';

import './GroupUserPopup.scss';

const GroupUserPopup = () => {
  return (
    <div className='row groupUserPopup'>
      {/* <div className='col-12-sm'> */}
        <div className='col-6-sm'>
          <ProfileImg verySmall />

          <span>mahdi_rezayi_853</span>
        </div>

        <div className='col-3-sm'>
          ۹۴۵۱
        </div>
        <div className='col-3-sm'>
          ۵۰
        </div>
      {/* </div> */}
    </div>
  );
};

export default GroupUserPopup;
