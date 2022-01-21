import React from 'react';

import coinImg from '../../assets/coin-1.png';
import CoinPackage from '../CoinPackage/CoinPackage';
import './CoinPackages.scss';

const CoinPackages = () => {
  return (
    <div className='row coinPackages'>
      <div className='col-4-sm'>
        <CoinPackage coin={1600} img={coinImg} price={5000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage coin={3400} img={coinImg} price={10000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage coin={7500} img={coinImg} price={20000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage coin={20000} img={coinImg} price={50000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage coin={50000} img={coinImg} price={100000} />
      </div>

      <div className='col-4-sm'>
        <CoinPackage coin={222000} img={coinImg} price={350000} />
      </div>
    </div>
  );
};

export default CoinPackages;