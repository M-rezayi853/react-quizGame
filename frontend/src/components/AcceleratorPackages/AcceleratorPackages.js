import React from 'react';

import acceleratorImg from '../../assets/speed-1.png';
import AcceleratorPackage from '../AcceleratorPackage/AcceleratorPackage';
import './AcceleratorPackages.scss';

const AcceleratorPackages = () => {
  return (
    <div className='row acceleratorPackages'>
      <div className='col-4-sm'>
        <AcceleratorPackage />
      </div>

      <div className='col-4-sm'>
        <AcceleratorPackage howFast={1.5} img={acceleratorImg} date={3} coin={1000} />
      </div>

      <div className='col-4-sm'>
        <AcceleratorPackage howFast={1.5} img={acceleratorImg} date={7} coin={2500} />
      </div>

      <div className='col-4-sm'>
        <AcceleratorPackage howFast={2} img={acceleratorImg} date={1} coin={700} />
      </div>

      <div className='col-4-sm'>
        <AcceleratorPackage howFast={2} img={acceleratorImg} date={3} coin={200} />
      </div>

      <div className='col-4-sm'>
        <AcceleratorPackage howFast={2} img={acceleratorImg} date={7} coin={4500} />
      </div>

      <div className='col-4-sm'>
        <AcceleratorPackage howFast={2.5} img={acceleratorImg} date={1} coin={1000} />
      </div>

      <div className='col-4-sm'>
        <AcceleratorPackage howFast={2.5} img={acceleratorImg} date={3} coin={2500} />
      </div>

      <div className='col-4-sm'>
        <AcceleratorPackage howFast={2.5} img={acceleratorImg} date={7} coin={5000} />
      </div>
    </div>
  );
};

export default AcceleratorPackages;