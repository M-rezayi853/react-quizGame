import React, { useState, useEffect, useRef, useCallback } from 'react';

import CustomBtn from '../CustomBtn/CustomBtn';
import './CountDown.scss';

const CountDown = () => {
  const [num, setNum] = useState(30);
  const [pause, setPause] = useState(false);
  const [over, setOver] = useState(false);

  let intervalRef = useRef();

  const decreaseNum = useCallback(() => {
    setNum(num === 0 ? setOver(true) & setNum(0) : num - 1);
  }, [num]);

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [decreaseNum]);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }

    setPause(!pause);
  };

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  }

  return (
    <div className='row'>
      <div className='col-12-sm countDown'>
        <div className='col-6-sm countDown__flex'>
          <CustomBtn info onClick={handleClick}>{pause ? 'ادامه' : 'توقف'}</CustomBtn>
        </div>

        <div className='col-6-sm'>
          <div className='countDown__num'>{`${num}`.toPersianDigit()}</div>

          <div>{over ? 'وقت شما به پایان رسید' : ''}</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
