import React from 'react';

import { ReactComponent as PeopleIcon } from '../../assets/icons/group 2.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/delete_sweep.svg';
import { ReactComponent as TowIcon } from '../../assets/icons/looks_two.svg';
import { ReactComponent as CoinIcon } from '../../assets/icons/gg-circle.svg';
import CustomBtn from '../CustomBtn/CustomBtn';
import './CartQuestionBtns.scss';

const CartQuestionBtns = () => {
  return (
    <div className='row'>
      <div className='col-12-sm cartQuestionBtns'>
        <CustomBtn blue>
          <PeopleIcon className='cartQuestionBtns__icon' />
          <span className='cartQuestionBtns__text'>
            جواب های مردم
          </span>
          <div className='cartQuestionBtns__coin'>
            <CoinIcon className='cartQuestionBtns__coinIcon' />
            <span>۶۰</span>
          </div>
        </CustomBtn>

        <CustomBtn blue>
          <RemoveIcon className='cartQuestionBtns__icon' />
          <span className='cartQuestionBtns__text'>
            حدف دو گزینه          
          </span>
          <div className='cartQuestionBtns__coin'>
            <CoinIcon className='cartQuestionBtns__coinIcon' />
            <span>۴۰</span>
          </div>
        </CustomBtn>

        <CustomBtn blue>
          <TowIcon className='cartQuestionBtns__icon' />
          <span className='cartQuestionBtns__text'>
            انتخاب دو گزینه
          </span>
          <div className='cartQuestionBtns__coin'>
            <CoinIcon className='cartQuestionBtns__coinIcon' />
            <span>۴۰</span>
          </div>
        </CustomBtn>
      </div>

    </div>
  );
};

export default CartQuestionBtns;