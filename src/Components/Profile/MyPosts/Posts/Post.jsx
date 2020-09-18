import React from 'react';
import style from'./Post.module.css';

const Post = ({id, message, likeCount}) => {
  return (
    <div className={style.item}>
      <div className={style.ava}>
        <img className={style.img} src="https://sun9-20.userapi.com/c830109/v830109019/1b3bf2/Rr6isaQE7tQ.jpg" alt="ava"/>
      </div>
      <div className={style.content}>
        <p id={id} className={style.message}>{message}</p>
      </div>
      <div className={style.likeBlock}>
        <span className={style.like}>{likeCount} Like</span>
      </div>
    </div>
  )
}
export default Post;