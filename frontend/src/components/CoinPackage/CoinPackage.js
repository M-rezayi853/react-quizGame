import React from 'react';
import PropTypes from 'prop-types';

import coinImg from '../../assets/coin-1.png';
import CustomBtn from '../CustomBtn/CustomBtn';
import './CoinPackage.scss';

const CoinPackage = ({ coin, img, price, heart }) => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  }

  return (
    <div className='coinPackage'>
      <CustomBtn success>
        <div className='coinPackage__coin'>
          {coin && `${coin.toLocaleString()}`.toPersianDigit()}&nbsp;
          {heart && `${heart.toLocaleString()}`.toPersianDigit()}&nbsp;
          {coin && <span>سکه</span>}
          {heart && <span>قلب</span>}
        </div>

        <div className='coinPackage__img'>
          <img src={img} alt='coin' />
        </div>

        <div className='coinPackage__price'>
          {`${price.toLocaleString()}`.toPersianDigit()}&nbsp;
          <span>تومان</span>
        </div>
      </CustomBtn>
    </div>
  );
};

CoinPackage.propTypes = {
  coin: PropTypes.number,
  price: PropTypes.number,
  heart: PropTypes.number
};

CoinPackage.defaultProps = {
  price: 5000,
  img: coinImg
};

export default CoinPackage;