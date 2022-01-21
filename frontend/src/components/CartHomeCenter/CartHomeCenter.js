import React from 'react';
import PropTypes from 'prop-types';

import ProfileImg from '../ProfileImg/ProfileImg';
import './CartHomeCenter.scss';

const CartHomeCenter = ({ userName, profileSrc }) => {
  return (
    <div className='col-4-sm cartHomeCenter'>
      <ProfileImg middle userImg={profileSrc} />

      <div className='row cartHomeCenter__userName'>
        {userName}
      </div>
    </div>
  );
};

CartHomeCenter.propTypes = {
  userName: PropTypes.string
};

CartHomeCenter.defaultProps = {
  userName: 'm_hazara_77'
};

export default CartHomeCenter;
