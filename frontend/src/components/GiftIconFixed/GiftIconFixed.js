import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as GiftIcon } from '../../assets/icons/gift.svg';
import './GiftIconFixed.scss';

const GiftIconFixed = () => {
  return (
    <div className='giftIcon'>
      <Link to='/gift'>
        <GiftIcon className='giftIcon__icon' />
      </Link>
    </div>
  );
};

export default GiftIconFixed;