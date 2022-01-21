import React from 'react';

import HomeTop from '../../components/HomeTop/HomeTop';
import HomeMiddleTop from '../../components/HomeMiddleTop/HomeMiddleTop';
import HomeMiddleBottom from '../../components/HomeMiddle‌Bottom/HomeMiddle‌Bottom';
import FindPlayer from '../../components/FindPlayer/FindPlayer';
import GiftIconFixed from '../../components/GiftIconFixed/GiftIconFixed';
import TitleBg from '../../components/TitleBg/TitleBg';
import './HomeScreen.scss';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <HomeTop />

      <HomeMiddleTop />

      <HomeMiddleBottom />

      <TitleBg mgt>
        بازی های جدید
      </TitleBg>

      <FindPlayer />

      <GiftIconFixed />
    </div>
  );
};

export default HomeScreen;
