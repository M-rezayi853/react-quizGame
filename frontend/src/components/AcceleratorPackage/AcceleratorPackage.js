import React from 'react';
import PropTypes from 'prop-types';

import acceleratorImg from '../../assets/speed-1.png';
import CustomBtn from '../CustomBtn/CustomBtn';
import './AcceleratorPackage.scss';

const AcceleratorPackage = ({ howFast, img, date, coin }) => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  };

  return (
    <div className='acceleratorPackage'>
      <CustomBtn success>
        <div className='acceleratorPackage__howFast'>
          <span>تجربه</span>&nbsp;
          {`${howFast}`.toPersianDigit()}&nbsp;
          <span>برابر</span>
        </div>

        <div className='acceleratorPackage__img'>
          <img src={img} alt='accelerator' />
        </div>

        <div className='acceleratorPackage__date'>
          {`${date}`.toPersianDigit()}&nbsp;
          <span>روزه</span>
        </div>

        <div className='acceleratorPackage__coin'>
          {`${coin.toLocaleString()}`.toPersianDigit()}&nbsp;
          <span>سکه</span>
        </div>
      </CustomBtn>
    </div>
  );
};

AcceleratorPackage.propTypes = {
  howFast: PropTypes.number,
  date: PropTypes.number,
  coin: PropTypes.number
};

AcceleratorPackage.defaultProps = {
  howFast: 1.5,
  date: 1,
  img: acceleratorImg,
  coin: 400
};

export default AcceleratorPackage;