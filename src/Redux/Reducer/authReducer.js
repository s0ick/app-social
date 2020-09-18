import { AuthAPI } from '../../API/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'Auth/SET-USER-DATA',
      SET_USER_PHOTO = 'Auth/SET-USER-PHOTO';

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
export const AuthMe = () => async (dispatch) => {
  const response = await AuthAPI.authMe();

  if(response.resultCode === 0) {
    let {id, email, login} = response.data;
    dispatch(setUserData(id, email, login, true));

    const res = await AuthAPI.getMyPhoto(id);
    dispatch(setUserPhoto(res.photos.large));
  }
};
export const authLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await AuthAPI.authLogin(email, password, rememberMe, captcha);

  if(response.data.resultCode === 0) {
    dispatch(AuthMe());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit("login", {_error: message}));
  }
};
export const authLogout = () => async (dispatch) => {
   const response = await AuthAPI.authLogout();

  if(response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
    dispatch(setUserPhoto(""));
  }
};
export default authReducer;