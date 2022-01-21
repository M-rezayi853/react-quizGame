import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartHomeLeft from '../CartHomeLeft/CartHomeLeft';
import CartHomeCenter from '../CartHomeCenter/CartHomeCenter';
import CartHomeRight from '../CartHomeRight/CartHomeRight';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { listInformations } from '../../redux/actions/informationActions';
import './HomeTop.scss';

const HomeTop = () => {
  const dispatch = useDispatch();

  const informationsList = useSelector(state => state.informationsList);
  const { error, loading, informations } = informationsList;

  useEffect(() => {
    dispatch(listInformations());
  }, [dispatch]);

  return (
    <div className='row'>
      {loading ? <Loader /> : error ? <Message danger>{error}</Message> : (
        <div className='homeTop'>
          <CartHomeLeft score={informations.score} scoreLeague={informations.scoreLeague} />

          <CartHomeCenter userName={informations.userName} profileSrc={informations.profileSrc} />

          <CartHomeRight />
        </div>
      )}
    </div>
  );
};

export default HomeTop;
