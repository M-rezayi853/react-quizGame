import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as IconCoin } from '../../assets/icons/gg-circle.svg';
import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg';
import { ReactComponent as IconBolt } from '../../assets/icons/bolt1.svg';
import { ReactComponent as IconSun } from '../../assets/icons/sun-o.svg';
import { ReactComponent as IconHeart } from '../../assets/icons/heart.svg';
import CustomBtn from '../CustomBtn/CustomBtn';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { listInformations } from '../../redux/actions/informationActions';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();

  const informationsList = useSelector(state => state.informationsList);
  const { error, loading, informations } = informationsList;

  useEffect(() => {
    dispatch(listInformations());
  }, [dispatch]);

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  }

  return (
    <div className='row navbar'>
      {loading ? <Loader /> : error ? <Message danger>{error}</Message> : (
        <>
          <div className='col-4-sm navbar__left'>
            <Link to='/card#coin-section'>
              <CustomBtn blue>
                <div className='navbar__flex'>
                  <IconCoin className='navbar__icon navbar__icon-yellow' />

                  <span className='navbar__spanLeft'>{`${informations.coins}`.toPersianDigit()}</span>

                  <IconPlus className='navbar__icon navbar__icon-small' />
                </div>
              </CustomBtn>
            </Link>
          </div>

          <div className='col-4-sm navbar__center'>
            <Link to='/card#heart-section'>
              <CustomBtn blue>
                <div className='navbar__flex'>
                  <IconHeart className='navbar__icon navbar__icon-purple' />

                  <span className='navbar__spanLeft'>{`00:${informations.heartTime}:00`.toPersianDigit()}</span>
                  <span className='navbar__numHartSpan'>{`${informations.hearts}`.toPersianDigit()}</span>

                  <div className='navbar__levelHeart'>

                    <IconPlus className='navbar__icon navbar__icon-small' />
                  </div>
                </div>
              </CustomBtn>
            </Link>
          </div>

          <div className='col-4-sm navbar__right'>
            <Link to='/card#accelerator-section'>
              <CustomBtn blue>
                <div className='navbar__flex'>
                  <IconBolt className='navbar__icon navbar__icon-small' />

                  <span className='navbar__spanRight'>{`${informations.levelDetailNum + ' / ' + informations.levelDetailTotalNum}`.toPersianDigit()}</span>

                  <div className='navbar__level'>
                    <span className='navbar__levelSpan'>{`${informations.levelNum}`.toPersianDigit()}</span>

                    <IconSun className='navbar__icon navbar__icon-yellow' />
                  </div>
                </div>
              </CustomBtn>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

Navbar.propTypes = {
  coin: PropTypes.number,
  levelDetailTotal: PropTypes.number,
  levelDetail: PropTypes.number,
  levelNumber: PropTypes.number,
  numberHeart: PropTypes.number
};

export default Navbar;
