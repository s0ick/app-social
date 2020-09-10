import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }
  return (
    <div className={style.users}>
      <div className={style.user}>
        {props.getUsersList()}
      </div>
      <div>
        <button className={style.button}>Show more</button>
      </div>
      <div className={style.panelContainer}>
        <div className={style.panel}>
          {/* <h3>Panel</h3> */}
          <div className={style.scroll}>
            {pages.map(p => {
              return <span
              onClick={ () => {props.onPageChanged(p)}} 
              className={props.currentPage === p && style.selectedPage}>
                {p}
              </span>
            })}
          </div>
        </div>
      </div>
    </div>
  )
};
export default Users;