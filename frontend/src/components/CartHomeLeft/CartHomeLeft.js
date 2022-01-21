import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomBtn from '../CustomBtn/CustomBtn';
import './CartHomeLeft.scss';

const CartHomeLeft = ({ score, scoreLeague }) => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  }

  return (
    <div className='col-4-sm cartHomeLeft'>
      <div className='row cartHomeLeft__div'>
        <Link to='/ranksme'>
          <CustomBtn>
            <div className='cartHomeLeft__text'>
              امتیاز
            </div>
            <div className='cartHomeLeft__num'>
              {`${score}`.toPersianDigit()}
            </div>
          </CustomBtn>
        </Link>
      </div>

      <div className='row'>
        <Link to='/ranksweeklyme'>
          <CustomBtn>
            <div className='cartHomeLeft__text'>
              لیگ هفتگی
            </div>

            <div className='cartHomeLeft__num'>
              {`${scoreLeague}`.toPersianDigit()}
            </div>
          </CustomBtn>
        </Link>
      </div>
    </div>
  );
};

CartHomeLeft.propTypes = {
  score: PropTypes.number,
  scoreLeague: PropTypes.number
};

CartHomeLeft.defaultProps = {
  score: 2000,
  scoreLeague: 73161
};

export default CartHomeLeft;
