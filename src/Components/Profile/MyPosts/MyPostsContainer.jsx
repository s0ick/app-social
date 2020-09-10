import { addPost } from '../../../Redux/Reducer/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {reset} from 'redux-form';

let mapStateToProps = (state) => {
  return {
    posts: state.ProfilePage.posts
  };
};

export default compose(
  connect(mapStateToProps, {addPost, reset})
)(MyPosts);