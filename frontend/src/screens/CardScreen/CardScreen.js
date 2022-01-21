import React from 'react';

import TitleBg from '../../components/TitleBg/TitleBg';
import CoinPackages from '../../components/CoinPackages/CoinPackages';
import HeartPackages from '../../components/HeartPackage/HeartPackages';
import AcceleratorPackages from '../../components/AcceleratorPackages/AcceleratorPackages';
import './CardScreen.scss';

const CardScreen = () => {
  return (
    <div className='cardScreen'>
      <div id='coin-section'>
        <TitleBg>
          خرید سکه
        </TitleBg>
      </div>

      <CoinPackages />

      <div id='heart-section'>
        <TitleBg mgt>
          خرید قلب
        </TitleBg>
      </div>

      <HeartPackages />

      <div id='accelerator-section'>
        <TitleBg mgt>
          خرید شتاب دهنده
        </TitleBg>
      </div>

      <AcceleratorPackages />
    </div>
  );
};

export default CardScreen;