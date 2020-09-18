import React from 'react';
import logo from '../../assets/images/logo.svg';
import style from './Header.module.css';
import avatar from '../../assets/images/user_null.png';
import { NavLink } from 'react-router-dom';

const Header = React.memo(({isAuth, authLogout, photo, login}) => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" className={style.img}/>

      <div className={style.loginBlock}>
        {isAuth ? <span className={style.link}>{login}</span> :
          <NavLink to={'/login'} className={style.link}>Login</NavLink>
        }
        <div className={style.ava}>
          <img className={style.image} src={!photo ? avatar : photo} alt="avatar"/>
        </div>
        {isAuth ? <button onClick={authLogout} className={style.button}>Log out</button> : <></>}
      </div>
    </header>
  )
});

export default Header;