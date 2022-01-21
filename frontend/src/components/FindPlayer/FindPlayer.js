import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import ProfileImg from '../ProfileImg/ProfileImg';
import CustomBtn from '../CustomBtn/CustomBtn';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { listGameInformations } from '../../redux/actions/gameInformationActions';
import './FindPlayer.scss';

const FindPlayer = ({ userName }) => {
  const dispatch = useDispatch();

  const gameInformationsList = useSelector(state => state.gameInformationsList);
  const { error, loading, gameInformations } = gameInformationsList;

  useEffect(() => {
    dispatch(listGameInformations());
  }, [dispatch]);

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  };

  return (
    <div className='row findPlayer'>
      {loading ? <Loader /> : error ? <Message danger>{Message}</Message> : (
        <>
          {gameInformations.map(gameInformation => (
            <div className='col-12' key={gameInformation._id}>
              <CustomBtn blue>
                <div className='col-4-sm'>
                  <ProfileImg small userImg={gameInformation.opponentProfileSrc} />
                </div>
    
                <div className='col-8-sm'>
                  {gameInformation.myScoreGame ? 
                    <>
                      <h6 className='findPlayer__textTop'>
                        {gameInformation.opponentUserName ? gameInformation.opponentUserName : (
                          'حریف شانسی'
                        )}
                      </h6>
    
                      <div className='findPlayer__textBottom'>
                        شما
                        &nbsp;{`${gameInformation.myScoreGame}`.toPersianDigit()}
                        &nbsp;-&nbsp;
                        {`${gameInformation.opponentScoreGame}`.toPersianDigit()}
                        &nbsp;&nbsp;حریف 
                      </div>
    
                      <span className='findPlayer__textDate'>
                        {`${gameInformation.matchDay === 0 ? '' : (
                          `${gameInformation.matchDay} روز `
                        )}`.toPersianDigit()}
                        {`${gameInformation.matchHour === 0 ? '' : (
                          `${gameInformation.matchHour} ساعت`
                        )}`.toPersianDigit()}
                      </span>
                    </>
                  : <div>{userName && userName}</div>}
                </div>
              </CustomBtn>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

FindPlayer.propTypes = {
  myScore: PropTypes.number,
  opponentScore: PropTypes.number,
  matchDay: PropTypes.number,
  matchHour: PropTypes.number
};

export default FindPlayer;
