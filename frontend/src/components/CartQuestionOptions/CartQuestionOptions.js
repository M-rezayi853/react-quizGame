import React from 'react';

import CustomBtn from '../CustomBtn/CustomBtn';
import './CartQuestionOptions.scss';

const CartQuestionOptions = ({ option1, option2, option3, option4 }) => {
  return (
    <div className='row'>
      <div className='cartQuestionOptions'>
        <div className='row cartQuestionOptions__flex'>
          <div className='cartQuestionOptions__space cartQuestionOptions__space-left'>
            <CustomBtn>
              {option1}
            </CustomBtn>
          </div>

          <div className='cartQuestionOptions__space cartQuestionOptions__space-right'>
            <CustomBtn>
              {option2}
            </CustomBtn>
          </div>
        </div>

        <div className='row cartQuestionOptions__flex'>
          <div className='cartQuestionOptions__space cartQuestionOptions__space-leftBottom'>
            <CustomBtn>{option3}</CustomBtn>
          </div>

          <div className='cartQuestionOptions__space cartQuestionOptions__space-rightBottom'>
            <CustomBtn>{option4}</CustomBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

CartQuestionOptions.defaultProps = {
  option1: 'پیتر اشمایکل',
  option2: 'ادوین فندرسا',
  option3: 'دیوید دخیا',
  option4: 'دیوید جونز'
};

export default CartQuestionOptions;
