import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CustomBtn from '../../components/CustomBtn/CustomBtn';
import CounterWeek from '../../components/CounterWeek/CounterWeek';
import RankUser from '../../components/RankUser/RankUser';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { listRanksMe, listRanksBest } from '../../redux/actions/rankActions';
import './WeeklyRanksScreen.scss';

const WeeklyRanksScreen = () => {
  const dispatch = useDispatch();

  const ranksMeList = useSelector(state => state.ranksMeList);
  const { error: errorRanksMe, loading: loadingRanksMe, ranksMe } = ranksMeList;

  const ranksBestList = useSelector(state => state.ranksBestList);
  const { error: errorRanksBest, loading: loadingRanksBest, ranksBest } = ranksBestList;

  useEffect(() => {
    dispatch(listRanksMe());

    dispatch(listRanksBest());
  }, [dispatch])

  return (
    <div className='row weeklyRanksScreen'>
      <CounterWeek />

      <div className='col-12-sm weeklyRanksScreen__link'>
        <CustomBtn primary>
          <Link to='/ranksweeklybest'>
            برترین ها
          </Link>
        </CustomBtn>

        <CustomBtn primary>
          <Link to='/ranksweeklyme'>
            نزدیک من
          </Link>
        </CustomBtn>
      </div>

      <div className='col-12-sm weeklyRanksScreen__tab'>
        <div className='col-1-sm'>
          <h5>
            رتبه
          </h5>
        </div>
        <div className='col-4-sm'>
          <h5>
            امتیاز
          </h5>
        </div>
        <div className='col-7-sm'>
          <h6>
            نام کاربری
          </h6>
        </div>
      </div>

      {window.location.pathname === '/ranksweeklyme' ? (
        <>
          {loadingRanksMe ? <Loader /> : errorRanksMe ? <Message danger>{errorRanksMe}</Message> : (
            <RankUser listRanks={ranksMe} />
          )}
        </>
      ) : window.location.pathname === '/ranksweeklybest' && (
        <>
          {loadingRanksBest ? <Loader /> : errorRanksBest ? <Message danger>{errorRanksBest}</Message> : (
            <RankUser listRanks={ranksBest} />
          )}
        </>
      )}
    </div>
  );
};

export default WeeklyRanksScreen;