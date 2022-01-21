import React from 'react';

import CartGameScore from '../CartGameScore/CartGameScore';
import './GameBottom.scss';

const GameBottom = () => {
  return (
    <div className='row'>
      <div className='col-12-sm gameBottom'>
        <CartGameScore
          firstAnsMe
          secondAnsMe
          thirdAnsMe
          firstAnsOpponent={false}
          secondAnsOpponent
          thirdAnsOpponent
        >
          ورزشی
        </CartGameScore>

        <CartGameScore
          firstAnsMe={false}
          secondAnsMe={false}
          thirdAnsMe
          firstAnsOpponent={false}
          secondAnsOpponent
          thirdAnsOpponent={false}
        >
          اطلاعات عمومی
        </CartGameScore>

        <CartGameScore
          firstAnsMe={false}
          secondAnsMe={false}
          thirdAnsMe={false}
          firstAnsOpponent
          secondAnsOpponent={false}
          thirdAnsOpponent
        >
          فیلم و سریال
        </CartGameScore>

        <CartGameScore
          firstAnsMe={false}
          secondAnsMe
          thirdAnsMe={false}
          firstAnsOpponent
          secondAnsOpponent={false}
          thirdAnsOpponent={false}
        >
          علم و تکنولوژی
        </CartGameScore>

        <CartGameScore >
          تاریخ و فرهنگ
        </CartGameScore>

        <CartGameScore >
          غذا و طبیعت
        </CartGameScore>
      </div>
    </div>
  );
};

export default GameBottom;
