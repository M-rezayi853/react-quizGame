import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CoinIcon } from '../../assets/icons/gg-circle.svg';
import { ReactComponent as VideoIcon } from '../../assets/icons/video_library.svg';
import { ReactComponent as MagnifierIcon } from '../../assets/icons/zoom_in.svg';
import { ReactComponent as PenIcon } from '../../assets/icons/create.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/mark_email_read.svg';
import { ReactComponent as UsersIcon } from '../../assets/icons/groups.svg';
import CustomBtn from '../CustomBtn/CustomBtn';
import './FullBtnLink.scss';

const FullBtnLink = ({ coin, type, children, spanChildren, small }) => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  }

  return (
    <div className={`row fullBtnLink ${small && 'small'}`}>
      <div className='col-12-sm'>
        <CustomBtn white>
          <div className='col-3-sm fullBtnLink__flex'>
            <CoinIcon className='fullBtnLink__icon fullBtnLink__icon-left' />

            {`${coin}`.toPersianDigit()}
          </div>

          <div className='col-6-sm'>
            {children}<br />

            {spanChildren && (
              <span className='fullBtnLink__span'>
                {spanChildren}
              </span>
            )}
          </div>

          <div className='col-1-sm'></div>

          <div className='col-2-sm'>
            {type === 'video' && <VideoIcon className='fullBtnLink__icon' /> }
            {type === 'maginfier' && <MagnifierIcon className='fullBtnLink__icon' />}
            {type === 'pen' && <PenIcon className='fullBtnLink__icon' />}
            {type === 'email' && <EmailIcon className='fullBtnLink__icon' />}
            {type === 'users' && <UsersIcon className='fullBtnLink__icon' />}
          </div>
        </CustomBtn>
      </div>
    </div>
  );
};

FullBtnLink.propTypes = {
  coin: PropTypes.number,
  type: PropTypes.string
};

export default FullBtnLink;