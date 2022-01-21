import React from 'react';
import { Link } from 'react-router-dom';

import CustomBtn from '../CustomBtn/CustomBtn';
import { ReactComponent as EnvelopeIcon } from '../../assets/icons/envelope.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/cog.svg';
import './CartHomeRight.scss';

const CartHomeRight = () => {
  return (
    <div className='col-4-sm cartHomeRight'>
      <div className='row cartHomeRight__div cartHomeRight__div-1'>
        <CustomBtn>
          <Link to='/'>
            <EnvelopeIcon className='cartHomeRight__icon' />
          </Link>
        </CustomBtn>
      </div>

      <div className='row cartHomeRight__div'>
        <CustomBtn>
          <Link to='/settingpreview'>
            <SettingIcon className='cartHomeRight__icon' />
          </Link>
        </CustomBtn>
      </div>
    </div>
  );
};

export default CartHomeRight;