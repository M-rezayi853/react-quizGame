import React from 'react';

import CartQuestion from '../../components/CartQuestion/CartQuestion';
// import CartQuestionBtns from '../../components/CartQuestionBtns/CartQuestionBtns';
import './PlayScreen.scss';

const PlayScreen = () => {
  return (
    <div className='row playScreen'>
      <CartQuestion />

      {/* <CartQuestionBtns /> */}
    </div>
  );
};

export default PlayScreen;
