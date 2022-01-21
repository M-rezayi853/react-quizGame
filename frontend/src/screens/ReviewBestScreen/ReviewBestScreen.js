import React from 'react';
import { Link } from 'react-router-dom';

import TitleBg from '../../components/TitleBg/TitleBg';
import HalfBtnLink from '../../components/HalfBtnLink/HalfBtnLink';
import FindPlayer from '../../components/FindPlayer/FindPlayer';
import './ReviewBestScreen.scss';

const ReviewBestScreen = () => {
  return (
    <div className='reviewBestScreen'>
      <TitleBg>
        برترین آمارها
      </TitleBg>

      <HalfBtnLink type={'rank'}>
        <Link to='/ranksbest'>
          رتبه های برتر
        </Link>
      </HalfBtnLink>
      <HalfBtnLink type={'flag'}>با تجربه ترین ها</HalfBtnLink>
      <HalfBtnLink type={'users'}>
        <Link to='/ranksgroupbest'>
          گروه ها
        </Link>
      </HalfBtnLink>
      <HalfBtnLink type={'star'}>لیگ ستاره</HalfBtnLink>
      <HalfBtnLink type={'league'}>
        <Link to='/ranksweeklybest'>
          لیگ هفتگی
        </Link>
      </HalfBtnLink>
      <HalfBtnLink type={'write'}>برترین طراحان سوال</HalfBtnLink>

      <TitleBg mgt>
        آمار خودت
      </TitleBg>

      <FindPlayer userName={'m_hazara_77'} />
    </div>
  );
};

export default ReviewBestScreen;