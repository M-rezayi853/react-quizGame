import React from 'react';

import { ReactComponent as CupIcon } from '../../assets/icons/insights.svg';
import { ReactComponent as LampIcon } from '../../assets/icons/lightbulb-o.svg';
import { ReactComponent as RecordIcon } from '../../assets/icons/pocket.svg';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import TableRecord from '../../components/TableRecord/TableRecord';
import './RecordScreen.scss';

const RecordScreen = () => {
  return (
    <div className='row recordScreen'>
      <div className='recordScreen__flex'>
        <div className='col-9-sm'>
          <CustomBtn primary>
            <CupIcon className='recordScreen__icon' />
            <span>جدول رده بندی</span>
          </CustomBtn> 
        </div>

        <div className='col-3-sm'>
          <CustomBtn white>
            <LampIcon className='recordScreen__icon recordScreen__icon-right' />
          </CustomBtn>
        </div>
      </div>

      <div className='col-12-sm'>
        <TableRecord />
      </div>

      <div className='col-12-sm'>
        <div className='recordScreen__text'>
          <span>آخرین رکورد شما:</span>&nbsp;
          <span>۵</span>
        </div>
        <CustomBtn success>
          <div className='recordScreen__record'>
            <RecordIcon className='recordScreen__icon recordScreen__icon-record' />
          </div>

          <span>رکورد بزن</span>
        </CustomBtn>
      </div>
    </div>
  );
};

export default RecordScreen;
