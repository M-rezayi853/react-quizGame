import React from 'react';

import heartImg from '../../assets/heart-2.png';
import CoinPackage from '../CoinPackage/CoinPackage';
import './HeartPackages.scss';

const HeartPackages = () => {
  return (
    <div className='row heartPackages'>
      <div className='col-4-sm'>
        <CoinPackage heart={6} img={heartImg} price={2000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage heart={35} img={heartImg} price={10000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage heart={120} img={heartImg} price={30000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage heart={180} img={heartImg} price={50000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage heart={250} img={heartImg} price={100000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage heart={500} img={heartImg} price={300000} />
      </div>
    </div>
  );
};

export default HeartPackages;