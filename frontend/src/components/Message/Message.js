import React from 'react';

import './Message.scss';

const Message = ({ children, success, info, danger }) => {
  return (
    <div className='row'>
      <div className='col-12-sm'>
        <div className={`message ${success && 'success'} ${info && 'info'} ${danger && 'danger'}`}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
