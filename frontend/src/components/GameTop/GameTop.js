import React from 'react';
import PropTypes from 'prop-types';

import userImg2 from '../../assets/user-2.jpeg'
import ProfileImg from '../ProfileImg/ProfileImg';
import './GameTop.scss';

const GameTop = ({ myScore, opponentScore }) => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  }

  return (
    <div className='row'>
      <div className='gameTop'>
        <div className='col-6-sm'>
          <div className='col-6-sm'>
            <ProfileImg small />
          </div>
          <div className='col-6-sm gameTop__flex'>
            <div className='gameTop__userName'>
              m_hazara_77
            </div>

            <div className='gameTop__score'>
              {`${myScore}`.toPersianDigit()}
            </div>
          </div>
        </div>

        <div className='col-6-sm'>
          <div className='col-6-sm gameTop__flex'>
            <div className='gameTop__userName'>
              aliDa_99
            </div>

            <div className='gameTop__score'>
              {`${opponentScore}`.toPersianDigit()}
            </div>
          </div>

          <div className='col-6-sm'>
            <ProfileImg small userImg={userImg2} />
          </div>
        </div>
      </div>
    </div>
  );
};

GameTop.propTypes = {
  myScore: PropTypes.number,
  opponentScore: PropTypes.number
};

GameTop.defaultProps = {
  myScore: 5,
  opponentScore: 3
};

export default GameTop;
