import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = React.memo(({item, fullName, isAuth, userId}) => {
  const navBarLinks = item
    .map(l => {
      if (l.url === '/profile') l.url = `${l.url}/${userId}`;
      return (
        <div key={l.url} className={style.item}>
          <NavLink className={style.link} activeClassName={style.active} to={l.url}>{l.link}</NavLink>
        </div>
      )
    });

  const friends = fullName
    .map(n => {
      return (
        <div key={n.secondName} className={style.elem}>
          <span className={style.fullName}>{n.firstName} {n.secondName}</span>
          <NavLink className={style.friend} to='#'>
            <img className={style.img} src="https://sun9-20.userapi.com/c830109/v830109019/1b3bf2/Rr6isaQE7tQ.jpg" alt="friend"/>
          </NavLink>
        </div>
      );
    });

  const arrowLeft = React.createRef(),
        arrowRight = React.createRef(),
        list = React.createRef(),
        friendsBlock = React.createRef();  
  const activeList = () => {
    arrowRight.current.classList.toggle(style.activeRight);
    arrowLeft.current.classList.toggle(style.activeLeft);
    list.current.classList.toggle(style.activeList);
  };  

  if(isAuth) {
    return (
      <nav className={style.navbar}>
        <div className={style.block}>
          {navBarLinks}
        </div>
        <div ref={friendsBlock} className={style.friends}>
          <h3 onClick={activeList} className={style.subtitle}>
            Possible friends
            <span ref={arrowLeft} className={style.arrowLeft}></span>
            <span ref={arrowRight} className={style.arrowRight}></span>
          </h3>
          <div ref={list} className={style.list}>
            {friends}
          </div>
        </div>
      </nav>
    )
  } else {
    return <></>
  }
});
export default Navbar;