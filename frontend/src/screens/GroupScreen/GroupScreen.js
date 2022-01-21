import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TitleBg from '../../components/TitleBg/TitleBg';
import CartGroup from '../../components/CartGroup/CartGroup';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { listGroups } from '../../redux/actions/groupActions';
import Popup from '../../components/Popup/Popup';
import GroupPopup from '../../components/GroupPopup/GroupPopup';
import './GroupScreen.scss';

const GroupScreen = () => {
  const dispatch = useDispatch();

  const groupsList = useSelector(state => state.groupsList);
  const { error, loading, groups } = groupsList;

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(listGroups());
  }, [dispatch]);

  return (
    <div className='groupScreen'>
      <TitleBg>
        گروهی بازی کن
        <p>چت کن و جایزه ی بیشتری ببر</p>
      </TitleBg>

      <h6>این لیست ساعت ۲۴ هر روز بروز رسانی میشود</h6>

      {loading ? <Loader /> : error ? <Message danger>{error}</Message> : (
        <>
          {groups.map(group => (
            <CartGroup key={group._id} group={group} onClick={togglePopup} />
          ))}
        </>
      )}

      {isOpen && (
        <Popup onClick={togglePopup}>
          <GroupPopup />
        </Popup>
      )}
    </div>
  );
};

export default GroupScreen;
