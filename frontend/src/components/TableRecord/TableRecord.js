import React from 'react';
import PropTypes from 'prop-types';

import './TableRecord.scss';

const TableRecord = ({ weeklyRecord, totalRecord, dailyRecord }) => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  }

  return (
    <div className='row tableRecord'>
      <h4 className='tableRecord__title'>
        رکورد های شما
      </h4>

      <div className='row tableRecord__table'>
        <div className='col-4-sm tableRecord__column'>
          <span className='tableRecord__span'>رکورد هفتگی</span>
          <span>{`${weeklyRecord}`.toPersianDigit()}</span>
        </div>

        <div className='col-4-sm tableRecord__column'>
          <span className='tableRecord__span'>رکورد کل</span>
          <span>{`${totalRecord}`.toPersianDigit()}</span>
        </div>

        <div className='col-4-sm tableRecord__column'>
          <span className='tableRecord__span'>رکورد روزانه</span>
          <span>{`${dailyRecord}`.toPersianDigit()}</span>
        </div>
      </div>
    </div>
  );
};

TableRecord.propTypes = {
  weeklyRecord: PropTypes.number,
  totalRecord: PropTypes.number,
  dailyRecord: PropTypes.number
};

TableRecord.defaultProps = {
  weeklyRecord: 5,
  totalRecord: 5,
  dailyRecord: 5
};

export default TableRecord;
