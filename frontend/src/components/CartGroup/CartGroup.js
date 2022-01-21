import React from 'react';

import './CartGroup.scss';

const CartGroup = ({ group, onClick }) => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  };

  return (
    <div className='row' onClick={onClick}>
      <div className='col-12-sm cartGroup'>
        <h4 className='cartGroup__title'>
          {group.subject}
        </h4>

        <div className='row cartGroup__table'>
          <div className='col-12-sm cartGroup__flex'>
            <span>نام گروه:</span>
            <span>{group.groupName}</span>
          </div>

          <div className='col-12-sm cartGroup__flex'>
            <span>اعضا گروه:</span>
            <span>{`${group.groupMember}`.toPersianDigit()}</span>
          </div>

          <div className='col-12-sm cartGroup__flex'>
            <span>امتیاز گروه:</span>
            <span>{`${group.groupScore}`.toPersianDigit()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CartGroup.defaultProps = {
  subject: 'تکنولوژی',
  groupName: 'منتخب شرق',
  groupMember: 32,
  groupScore: 9540
};

export default CartGroup;
