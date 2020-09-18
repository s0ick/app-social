import React from 'react';
import style from './FormControls.module.css';

const FormControl = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={style.FormControl + " " + (hasError ? style.error : "")}>
      {props.children}
      <span className={style.spanError}>{error} <span className={style.ellipse}></span></span>
    </div>
  )
};

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}>
           <textarea {...input} {...restProps} />
         </FormControl>
};

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}>
           <input {...input} {...restProps} />
           <label htmlFor={props.id}>{props.id}:</label>
         </FormControl>
};
