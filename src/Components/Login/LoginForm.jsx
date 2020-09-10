import React from 'react';
import style from './Login.module.css';
import errorStyle from '../common/FormsControls/FormControls.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthAC } from '../../Utils/Validators/validators';

const maxLength = maxLengthAC(50);

const LoginForm = (props) => {

 return (
  <form onSubmit={props.handleSubmit} className={style.authBlock + " " + (props.error && errorStyle.formSummaryError)}>
    <div className={style.cardContent}>
      <h3 className={style.cardTitle}>Authorization</h3>
      <div className={style.inputBlock}>
        <Field component={Input} validate={[required, maxLength]} id={"Email"} name={"email"} type={"email"} className={style.input} autoComplete={"off"} /> 
      </div>
      <div className={style.inputBlock}>
        <Field component={Input} validate={[required, maxLength]} id={"Password"} name={"password"} type={"password"} className={style.input}/> 
      </div>
      <div className={style.inputBlock}>
        <Field component={"input"}  id={"rememberMe"} name={"rememberMe"} type={"checkbox"} className={style.checkbox}/> 
        <label htmlFor={"rememberMe"} className={style.label}>Remember me</label>
      </div>
    </div>
    <div className={style.cardAction}>
      <button className={style.button} style={{marginRight: 15}}>Sign in</button>
    </div>
    <span className={errorStyle.fromSpanError}>{props.error} <span className={errorStyle.ellipse}></span></span>
  </form>
 )
};

export default reduxForm({form: 'login'})(LoginForm);