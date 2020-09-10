import React from 'react';
import style from'./ProfileInfo.module.css';

const ProfileDescp = (props) => {
  return (
    <div className={style.personalInfo}>
      <span className={style.subtitle}>{props.subtitle}</span>
      <p className={style.status}>{props.info}</p>
    </div>
  )
};

export default ProfileDescp;