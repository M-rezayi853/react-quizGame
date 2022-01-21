import React from 'react';

import groupImg from '../../assets/group-2.png';
import ProfileImg from '../ProfileImg/ProfileImg';
import GroupUserPopup from '../GroupUserPopup/GroupUserPopup';
import './GroupPopup.scss';

const GroupPopup = () => {
  return (
    <div className='row groupPopup'>
      <div className='groupPopup__top'>
        <div className='col-3-sm groupPopup__profile'>
          <ProfileImg small userImg={groupImg} />
        </div>

        <div className='col-5-sm'>
          <div className='groupPopup__flex'>
            <span>نام گروه:</span>
            <span>منتخب شرق</span>
          </div>
          <div className='groupPopup__flex'>
            <span>اعضا گروه:</span>
            <span>۳۲</span>
          </div>
          <div className='groupPopup__flex'>
            <span>حداقل سطح:</span>
            <span>۶</span>
          </div>
        </div>

        <div className='col-4-sm groupPopup__align'>
          <div className='groupPopup__flex'>
            <span>امتیاز:</span>
            <span>۱۰۱۳۹</span>
          </div>
          <div className='groupPopup__flex'>
            <span>وضعیت:</span>
            <span>خصوصی</span>
          </div>
        </div>
      </div>
      <div className='groupPopup__middle'>
        <div className='groupPopup__description'>
          <p>توضیحات گروه: </p>
          <p>ادب و احترام رو رعایت کنید و هرکس فعال باشه داخل گروه معاون میشه.</p>
        </div>
      </div>
      <div className='groupPopup__tab'>
        <div className='col-3-sm'>اهدا هفتگی</div>
        <div className='col-3-sm'>امتیاز</div>
        <div className='col-6-sm'>نام کاربری</div>
      </div>

      <GroupUserPopup />
      <GroupUserPopup />
      <GroupUserPopup />
      <GroupUserPopup />
      <GroupUserPopup />
      <GroupUserPopup />
      <GroupUserPopup />
      <GroupUserPopup />
      <GroupUserPopup />
      <GroupUserPopup />
    </div>
  );
};

export default GroupPopup;
