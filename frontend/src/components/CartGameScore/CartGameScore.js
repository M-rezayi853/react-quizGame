import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CircleIcon } from '../../assets/icons/stop_circle.svg';
import './CartGameScore.scss';

const CartGameScore = ({ firstAnsMe, secondAnsMe, thirdAnsMe, firstAnsOpponent, secondAnsOpponent, thirdAnsOpponent, children }) => {
  return (
    <div className='col-12-sm cartGameScore'>
      <div className='col-4-sm cartGameScore__circle'>
        {firstAnsMe === true ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-green' />
        ) : firstAnsMe === false ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-red' />
        ) : (
          <CircleIcon className='cartGameScore__icon' />
        )}

        {secondAnsMe === true ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-green' />
        ) : secondAnsMe === false ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-red' />
        ) : (
          <CircleIcon className='cartGameScore__icon' />
        )}

        {thirdAnsMe === true ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-green' />
        ) : thirdAnsMe === false ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-red' />
        ) : (
          <CircleIcon className='cartGameScore__icon' />
        )}
      </div>

      <div className='col-4-sm cartGameScore__subject'>
        {children}
      </div>

      <div className='col-4-sm cartGameScore__circle'>
        {firstAnsOpponent === true ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-green' />
        ) : firstAnsOpponent === false ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-red' />
        ) : (
          <CircleIcon className='cartGameScore__icon' />
        )}

        {secondAnsOpponent === true ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-green' />
        ) : secondAnsOpponent === false ? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-red' />
        ) : (
          <CircleIcon className='cartGameScore__icon' />
        )}

        {thirdAnsOpponent  === true? (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-green' />
        ) : thirdAnsOpponent === false ?  (
          <CircleIcon className='cartGameScore__icon cartGameScore__icon-red' />
        ) : (
          <CircleIcon className='cartGameScore__icon' />
        )}
      </div>
    </div>
  );
};

CartGameScore.propTypes = {
  firstAnsMe: PropTypes.bool,
  secondAnsMe: PropTypes.bool,
  thirdAnsMe: PropTypes.bool,
  firstAnsOpponent: PropTypes.bool,
  secondAnsOpponent: PropTypes.bool,
  thirdAnsOpponent: PropTypes.bool
};

export default CartGameScore;
