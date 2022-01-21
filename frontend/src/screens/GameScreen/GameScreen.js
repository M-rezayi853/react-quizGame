import React from 'react';
import { Link } from 'react-router-dom';

import GameTop from '../../components/GameTop/GameTop';
import GameBottom from '../../components/GameBottom/GameBottom';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import './GameScreen.scss';
// import TitleBg from '../../components/TitleBg/TitleBg';

const GameScreen = () => {
  return (
    <div className='gameScreen'>
      {/* <TitleBg>
        مسابقه
      </TitleBg> */}
      
      <GameTop />

      <GameBottom />

      <div className='row'>
        <div className='col-12-sm'>
          <CustomBtn success>
            <Link to='/playpreview'>
              بازی کن
            </Link>
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
