import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {

  const dialogElems = props.dialogs
        .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);

  const messageElems = props.messages
        .map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>);


  const addMessage = () => {
    props.addMessage();     
  };

  const MessageChange = (event) => {
    const text = event.target.value;
    props.MessageChange(text);
  };
  return (
    <div className={style.block}>
      <div className={style.dialogsblock}>
        {dialogElems}
      </div>
      <div className={style.messageBlock}>
        <div className={style.messages}>
          {messageElems}
        </div>
        <div className={style.panel}>
          <textarea onChange={MessageChange} placeholder='Write message...' className={style.textarea} value={props.newMessageText} />
          <button onClick={addMessage} className={style.button}>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Messages;