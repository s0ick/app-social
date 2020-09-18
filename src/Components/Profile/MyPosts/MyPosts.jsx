import React from 'react';
import style from'./MyPosts.module.css';
import Post from './Posts/Post';
import MyPostForm from './MyPostForm';

const MyPosts = React.memo(({posts, addPost, reset}) => {
  const postElems = [...posts]
      .map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)
      .reverse();

  const addNewPost = (values) => {
    addPost(values.newPostBody);
    reset('AddPost');
  };

  return (
    <div className={style.block}>
      <div className={style.myPostBlock}>
        <h3 className={style.title}>What's new?</h3>
        <MyPostForm onSubmit={addNewPost} />
      </div>
      <div className={style.postsBlock}>
        {postElems}
      </div>
    </div>
  )
});
export default MyPosts;