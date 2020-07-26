import React from 'react';
import style from'./MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
  const postElems = props.posts
      .map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>);


  const addPost = () => {
    props.addPost();
  };
  const PostChange = (event) => {
    const text = event.target.value;
    props.PostChange(text);
  };

  return (
    <div className={style.block}>
    <h3>My post</h3>
    <div className={style.panel}>
      <textarea onChange={PostChange} className={style.textarea}  placeholder='Write message...' value={props.newPostText} />
      <button onClick={addPost} className={style.button}>Add Post</button>
    </div>
    <div>
      {postElems}
    </div>
  </div>
  )
}
export default MyPosts;