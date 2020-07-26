import React from 'react';
import style from '../Messages.module.css';

const MessageItem = (props) => {
  return (
  <div className={props.id % 2 === 0 ? style.messageFriend : style.messageYou}>
    <span id={props.id} className={style.text}>{props.message}</span>
  </div>
  );
}

export default MessageItem;