import React from 'react';
import { Link } from 'react-router-dom';

import TitleBg from '../../components/TitleBg/TitleBg';
import HalfBtnLink from '../../components/HalfBtnLink/HalfBtnLink';
import FullBtnLink from '../../components/FullBtnLink/FullBtnLink';
import './GamePreviewScreen.scss';

const GamePreviewScreen = () => {
  return (
    <div className='row gamePreviewScreen'>
      <TitleBg>
        شروع بازی
      </TitleBg>

      <HalfBtnLink type='magnifier'>
        جست و جو اسم
      </HalfBtnLink>

      <Link to='game'>
        <HalfBtnLink type='play'>
          حریف شانسی
        </HalfBtnLink>
      </Link>

      <TitleBg mgt>
        دوستان
      </TitleBg>

      <FullBtnLink coin={200} type='users' spanChildren='دوستاتو به مسابقه دعوت کن و جایزه بگیر'>
        سکه مجانی
      </FullBtnLink>
    </div>
  );
};

export default GamePreviewScreen;
