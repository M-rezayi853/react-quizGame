import React from 'react';

import CountDown from '../CountDown/CountDown';
import CartQuestionOptions from '../CartQuestionOptions/CartQuestionOptions';
import './CartQuestion.scss';
import CartQuestionBtns from '../CartQuestionBtns/CartQuestionBtns';

const CartQuestion = ({ subject, question, questionMaker }) => {
  return (
    <div className='row'>
      <div className='col-12-sm cartQuestion'>
        <div className='cartQuestion__box'>
          <div className='cartQuestion__flex'>
            <div className='cartQuestion__questionMaker'>
              طراح سوال:
              &nbsp;{questionMaker}
            </div>

            <div className='cartQuestion__subject'>
              {subject}
            </div>
          </div>
      
          <h3 className='cartQuestion__title'>
            {question}
          </h3>

          <CountDown />
        </div>

        <CartQuestionOptions />

        <CartQuestionBtns />
      </div>
    </div>
  );
};

CartQuestion.defaultProps = {
  subject: 'فوتبال',
  question: 'کدام یک دروازه بان منچستر یونایتد نبودند؟',
  questionMaker: 'مهدی رضایی'
};

export default CartQuestion;
