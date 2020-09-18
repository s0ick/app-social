import React from 'react';
import style from './MyPosts.module.css';
import { required, maxLengthAC } from '../../../Utils/Validators/validators';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength = maxLengthAC(100);

const AddPostForm = ({handleSubmit}) => {
 return (
  <form onSubmit={handleSubmit} className={style.panel}>
    <Field component={Textarea} 
           name={"newPostBody"} 
           placeholder='Write down your thoughts...' 
           className={style.textarea}
           // validate={[required, maxLength]} 
           />
    <button className={style.button}>Add post</button>
  </form>
 )
};

export default reduxForm({form: 'AddPost'})(AddPostForm);