import { ProfileAPI } from '../../API/api';

const ADD_POST = 'ADD_POST',
      SET_STATUS = 'SET-STATUS',
      SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likeCount: 12},
    {id: 2, message: "It's my first posts It's my first posts It's my first posts It's my first posts It's my first posts It's my first posts It's my first posts", likeCount: 19}
  ],
  profile: null,
  status: ''
}      
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: 
      return { ...state,
        posts: [...state.posts, {
          id: state.posts[state.posts.length - 1].id + 1,
          message: action.newPostBody,
          likeCount: 0,
        }]
      };
      
    case SET_USER_PROFILE:
      return {...state,
        profile: action.profile
      };

    case SET_STATUS:
      return {...state,
        status: action.status
      };  
    
    default: return state;  
  }
};

// ACTIONS CREATOR
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// THUNK CREATORS
export const getProfile = (userId, myId) => (dispatch) => {
  if(!userId) userId = myId;
  ProfileAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response));
    });
};
export const getStatus = (userId, myId) => (dispatch) => {
  if(!userId) userId = myId;
  ProfileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
};

export default profileReducer;