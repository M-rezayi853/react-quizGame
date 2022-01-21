import React from 'react';
import { Link } from 'react-router-dom';

import CustomBtn from '../CustomBtn/CustomBtn';
import { ReactComponent as GroupIcon } from '../../assets/icons/group.svg';
import './HomeMiddleTop.scss';

const HomeMiddleTop = () => {
  return (
    <div className='row'>
      <div className='col-12-sm homeMiddleTop'>
        <div className='homeMiddleTop__btn'>
          <CustomBtn primary>
            <Link to='/group' className='homeMiddleTop__flex'>
              <span className='homeMiddleTop__text'>
                عضو گروهی نیستی
              </span>

              <GroupIcon className='homeMiddleTop__icon' />
            </Link>
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddleTop;