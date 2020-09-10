import { AuthAPI } from '../../API/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA',
      SET_USER_PHOTO = 'SET-USER-PHOTO';

let initial = {
  userId: null,
  email: null,
  login: null,
  photo: '',
  isAuth: false
};

const authReducer = (state = initial, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return { ...state,
        ...action.payload
      };

    case SET_USER_PHOTO:
      return {...state,
        photo: action.photo
      };  

     default: return state; 
  }
}

// ACTION CREATORS
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo});
export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

// THUNK CREATORS
export const AuthMe = () => (dispatch) => {
  return AuthAPI.authMe()
    .then(response => {
      if(response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true));
        AuthAPI.getMyPhoto(id)
          .then(res => {
            dispatch(setUserPhoto(res.photos.large));
          });
      }
  });
};
export const authLogin = (email, password, rememberMe, captcha) => (dispatch) => {

  AuthAPI.authLogin(email, password, rememberMe, captcha)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(AuthMe());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit("login", {_error: message}));
      }
  });
};
export const authLogout = () => (dispatch) => {
  AuthAPI.authLogout()
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
        dispatch(setUserPhoto(""));
      }
  });
};
export default authReducer;