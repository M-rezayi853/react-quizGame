import React from 'react';
import { Link } from 'react-router-dom';

import CustomBtn from '../../components/CustomBtn/CustomBtn';
import FullBtnLink from '../../components/FullBtnLink/FullBtnLink';
import TitleBg from '../../components/TitleBg/TitleBg';
import './PlayPreviewScreen.scss';

const PlayPreviewScreen = ({ opponentUserName }) => {
  return (
    <div className='row playPreviewScreen'>
      <TitleBg>
        انتخاب موضوع
        <p>از این موضوع خوشت نمیاد؟</p>

        <div className='col-12-sm'>
          <FullBtnLink coin={80} type='pen' small>
            موضوعات جدید
          </FullBtnLink>
        </div>
      </TitleBg>


      <div className='col-12-sm'>
        <CustomBtn info>
          <Link to='/play'>
            <h3>
              موسیقی
            </h3>
          </Link>
        </CustomBtn>
        <CustomBtn success>
          <Link to='/play'>
            <h3>
              سینما
            </h3>
          </Link>
        </CustomBtn>
        <CustomBtn blue>
          <Link to='/play'>
            <h3>
              فوتبال
            </h3>
          </Link>
        </CustomBtn>
      </div>
    </div>
  );
};

PlayPreviewScreen.defaultProps = {
  opponentUserName: 'ali_baghery33'
};

export default PlayPreviewScreen;
