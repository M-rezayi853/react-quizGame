import React from 'react';

import ProfileImg from '../ProfileImg/ProfileImg';
import './RankUser.scss';

const RankUser = ({ listRanks }) => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  };

  return (
    <>
      {listRanks.map(listRank => (
        <div className='col-12-sm rankUser' key={listRank._id}>
          <div className='col-1-sm rankUser__rank'>
            <h5>
              {`${listRank.rank}`.toPersianDigit()}
            </h5>
          </div>
          <div className='col-4-sm rankUser__score'>
            <h5>
              {`${listRank.score ? listRank.score : listRank.groupScore}`.toPersianDigit()}
            </h5>
          </div>
          <div className='col-7-sm rankUser__userName'>
            <h6>
              {listRank.opponentUserName ? listRank.opponentUserName : listRank.groupName}
            </h6>
            <ProfileImg small userImg={listRank.opponentProfileSrc ? listRank.opponentProfileSrc : listRank.groupProfileSrc} />
          </div>
        </div>
      ))}
    </>
  );
};

// RankUser.defaultProps = {
//   rank: 1,
//   score: 1812479,
//   opponentUserName: 'alireza.at.1541',
//   opponentProfileSrc: userImg
// };

export default RankUser;
