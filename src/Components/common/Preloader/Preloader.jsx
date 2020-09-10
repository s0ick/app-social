import React from 'react';
import style from './Preloader.module.css';

const Preloader = () => {
  return (
    <div class={style.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};
export default Preloader;