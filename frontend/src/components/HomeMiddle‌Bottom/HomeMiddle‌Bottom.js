import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as PlayIcon } from '../../assets/icons/toys.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/whatshot.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/military_tech.svg';
import { ReactComponent as CoinIcon } from '../../assets/icons/all_inclusive.svg';
import CustomBtn from '../CustomBtn/CustomBtn';
import './HomeMiddle‌Bottom.scss';

const HomeMiddleCenter = () => {
  return (
    <div className='row homeMiddle‌Bottom'>
      <div className='col-6-sm homeMiddle‌Bottom__left'>
        <div className='homeMiddle‌Bottom__leftTop'>
          <CustomBtn info>
            <div className='homeMiddle‌Bottom__flexLeft'>
              <span>
                بازی نامحدود
              </span>

              <CoinIcon className='homeMiddle‌Bottom__icon' />
            </div>
          </CustomBtn>
        </div>

        <div className='homeMiddle‌Bottom__leftBottom'>
          <CustomBtn info>
            <div className='homeMiddle‌Bottom__flexLeft'>
              <span>
                لیگ ستاره
              </span>

              <StarIcon className='homeMiddle‌Bottom__icon' />
            </div>
          </CustomBtn>
        </div>
      </div>

      <div className='col-6-sm homeMiddle‌Bottom__right'>
        <CustomBtn success>
          <Link to='/gamepreview'>
            <div className='homeMiddle‌Bottom__flexRight'>
              <PlayIcon className='homeMiddle‌Bottom__icon homeMiddle‌Bottom__icon-right' />
              
              <h5>
                شروع بازی جدید
              </h5>
            </div>
          </Link>
        </CustomBtn>
      </div>
    </div>
  );
};

export default HomeMiddleCenter;