import React from 'react';

import userImgage from '../../assets/user-1.jpeg';
import './ProfileImg.scss';

const ProfileImg = ({ verySmall, small, middle, userImg }) => {
  return (
    <div className='profileImg'>
      <img className={`profileImg__img ${verySmall && 'verySmall'} ${small && 'small'} ${middle && 'middle'}`} src={userImg} alt='user' />
    </div>
  );
};

ProfileImg.defaultProps = {
  userImg: userImgage
};

export default ProfileImg;
