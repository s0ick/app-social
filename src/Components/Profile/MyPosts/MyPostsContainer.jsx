import React from 'react';
import {PostChangeCreator, addPostCreator} from '../../../Redux/Reducer/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.ProfilePage.posts,
    newPostText: state.ProfilePage.newPostText 
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostCreator());     
    },
    PostChange(text) {
      dispatch(PostChangeCreator(text));
    }
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;