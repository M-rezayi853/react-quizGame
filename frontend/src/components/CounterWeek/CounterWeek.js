import React, { useState, useEffect } from 'react';

import './CounterWeek.scss';

const CounterWeek = () => {

  // eslint-disable-next-line
  String.prototype.toPersianDigit = function() {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return this.replace(/[0-9]/g, function(w) {
      return id[+w]
    });
  };

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        روز: `${Math.floor(difference / (1000 * 60 * 60 * 24))}`.toPersianDigit(),
        ساعت: `${Math.floor((difference / (1000 * 60 * 60)) % 24)}`.toPersianDigit(),
        دقیقه: `${Math.floor((difference / 1000 / 60) % 60)}`.toPersianDigit(),
        ثانیه: `${Math.floor((difference / 1000) % 60)}`.toPersianDigit()
      };
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return;
    };
  
    timerComponents.push(
      <span key={i}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className='row'>
      <div className='col-12-sm counterWeek'>
        <h4>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </h4>

        <p>
          مانده به اتمام لیگ هفتگی
        </p>
      </div>
    </div>
  );
};

export default CounterWeek;