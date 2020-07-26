import React from 'react';
import style from'./ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.background__image}>
        <img className={style.image} src="https://miro.medium.com/max/3200/0*cGDKbUrA_8vJC4d3"/>
      </div>
      <div className={style.descriptionLock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;