import React from 'react';
import style from './Messages.module.css';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthAC } from '../../Utils/Validators/validators';

const maxLength = maxLengthAC(200);

const AddMessageForm = (props) => {
 return (
  <form onSubmit={props.handleSubmit} className={style.panel}>
    <Field component={Textarea} 
           name={"newMessageBody"} 
           placeholder='Write message...' 
           className={style.textarea}
          //  validate={[required, maxLength]} 
          />
    <button className={style.button}>Send</button>
  </form>
 )
};

export default reduxForm({form: 'AddMessage'})(AddMessageForm);