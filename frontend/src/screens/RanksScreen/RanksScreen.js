import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CustomBtn from '../../components/CustomBtn/CustomBtn';
import RankUser from '../../components/RankUser/RankUser';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { listRanksMe, listRanksBest } from '../../redux/actions/rankActions';
import { listGroups } from '../../redux/actions/groupActions';
import './RanksScreen.scss';

const RanksScreen = () => {
  const dispatch = useDispatch();

  const ranksMeList = useSelector(state => state.ranksMeList);
  const { error: errorRanksMe, loading: loadingRanksMe, ranksMe } = ranksMeList;

  const ranksBestList = useSelector(state => state.ranksBestList);
  const { error: errorRanksBest, loading: loadingRanksBest, ranksBest } = ranksBestList;

  const groupsList = useSelector(state => state.groupsList);
  const { error: errorGroup, loading: loadingGroup, groups } = groupsList;

  useEffect(() => {
    dispatch(listRanksMe());

    dispatch(listRanksBest());

    dispatch(listGroups());
  }, [dispatch])

  return (
    <div className='row ranksScreen'>
      <div className='col-12-sm ranksScreen__link'>
        {window.location.pathname === '/ranksbest' | window.location.pathname === '/ranksme' ? (
          <>
            <CustomBtn primary>
              <Link to='/ranksbest'>
                برترین ها
              </Link>
            </CustomBtn>

            <CustomBtn primary>
              <Link to='/ranksme'>
                نزدیک من
              </Link>
            </CustomBtn>
          </>
        ) : window.location.pathname === '/ranksgroupbest' | window.location.pathname === '/ranksgroupme' && (
          <>
            <CustomBtn primary>
              <Link to='/ranksgroupbest'>
                برترین ها
              </Link>
            </CustomBtn>

            <CustomBtn primary>
              <Link to='/ranksgroupme'>
                نزدیک من
              </Link>
            </CustomBtn>
          </>
        )}

        {/* <CustomBtn primary>
          {window.location.pathname === '/ranksme' ? (
            <Link to='/ranksme'>
              نزدیک من
            </Link>
          ) : window.location.pathname === '/ranksgroupme' && (
            <Link to='/ranksgroupme'>
              نزدیک من
            </Link>
          )}
        </CustomBtn> */}
      </div>

      <div className='col-12-sm ranksScreen__tab'>
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

      {window.location.pathname === '/ranksme' ? (
        <>
          {loadingRanksMe ? <Loader /> : errorRanksMe ? <Message danger>{errorRanksMe}</Message> : (
            <RankUser listRanks={ranksMe} />
          )}
        </>
      ) : window.location.pathname === '/ranksbest' ? (
        <>
          {loadingRanksBest ? <Loader /> : errorRanksBest ? <Message danger>{errorRanksBest}</Message> : (
            <RankUser listRanks={ranksBest} />
          )}
        </>
      ) : window.location.pathname === '/ranksgroupme' ? (
        <>
          {loadingGroup ? <Loader /> : errorGroup ? <Message danger>{errorGroup}</Message> : (
            <RankUser listRanks={groups} />
          )}
        </>
      ) : window.location.pathname === '/ranksgroupbest' && (
        <>
          {loadingGroup ? <Loader /> : errorGroup ? <Message danger>{errorGroup}</Message> : (
            <RankUser listRanks={groups} />
          )}
        </>
      )}
    </div>
  );
};

export default RanksScreen;
