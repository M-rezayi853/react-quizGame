import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AwardIcon } from '../../assets/icons/award.svg';
import { ReactComponent as RecordIcon } from '../../assets/icons/pocket.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as UsersIcon } from '../../assets/icons/users.svg';
import { ReactComponent as ShopIcon } from '../../assets/icons/shopping-bag.svg';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import './NavbarBottom.scss';

const NavbarBottom = () => {
  return (
    <div className='row navbarBottom'>
      <div className='col-12-sm'>
        <div className='navbarBottom__flex'>
          <Link to='/reviewbest'>
            <CustomBtn secondary>
              <AwardIcon className='navbarBottom__icon' />
            </CustomBtn>
          </Link>

          <Link to='/record'>
            <CustomBtn secondary>
              <RecordIcon className='navbarBottom__icon' />
            </CustomBtn>
          </Link>

          <Link to='/'>
            <CustomBtn secondary>
              <HomeIcon className='navbarBottom__icon' />
            </CustomBtn>
          </Link>

          <Link to='/group'>
            <CustomBtn secondary>
              <UsersIcon className='navbarBottom__icon' />
            </CustomBtn>
          </Link>

          <Link to='/card'>
            <CustomBtn secondary>
              <ShopIcon className='navbarBottom__icon' />
            </CustomBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
