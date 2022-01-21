import React from 'react';

import TitleBg from '../../components/TitleBg/TitleBg';
import HalfBtnLink from '../../components/HalfBtnLink/HalfBtnLink';
import './SettingPreviewScreen.scss';

const SettingPreviewScreen = () => {
  return (
    <div className='row settingPreviewScreen'>
      <TitleBg>
        منو تنظیمات
      </TitleBg>

      <HalfBtnLink type={'factory'}>کارخانه سوال</HalfBtnLink>
      <HalfBtnLink type={'gift'}>جایزه بگیرید</HalfBtnLink>
      <HalfBtnLink type={'setting'}>تنظیمات</HalfBtnLink>
      <HalfBtnLink type={'report'}>گزارش مشکل</HalfBtnLink>
      <HalfBtnLink type={'follow'}>ما را دنبال کنید</HalfBtnLink>
      <HalfBtnLink type={'question'}>سوالات متداول</HalfBtnLink>
      <HalfBtnLink type={'read'}>قوانین و مقررات</HalfBtnLink>
      <HalfBtnLink type={'info'}>درباره ما</HalfBtnLink>
    </div>
  );
};

export default SettingPreviewScreen;
