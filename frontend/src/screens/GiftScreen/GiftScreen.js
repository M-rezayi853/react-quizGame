import React from 'react';

import TitleBg from '../../components/TitleBg/TitleBg';
import FullBtnLink from '../../components/FullBtnLink/FullBtnLink';
import './GiftScreen.scss';

const GiftScreen = () => {
  return (
    <div className='row giftScreen'>
      <TitleBg>
        سکه مجانی
      </TitleBg>

      <FullBtnLink coin={30} type={'video'}>مشاهده فیلم</FullBtnLink>
      <FullBtnLink coin={3} type={'maginfier'}>بازرسی سوال</FullBtnLink>
      <FullBtnLink coin={10} type={'pen'}>ثبت سوال جدید</FullBtnLink>
      <FullBtnLink coin={200} type={'email'}>ثبت ایمیل</FullBtnLink>
      <FullBtnLink coin={300} type={'users'}>دعوت دوستان</FullBtnLink>
    </div>
  );
};

export default GiftScreen;