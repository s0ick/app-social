import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import profileReducer from './Reducer/profileReducer';
import messageReducer from './Reducer/messageReducer';
import sideBarReducer from './Reducer/sideBarReducer';
import usersReducer from './Reducer/usersReducer';
import authReducer from './Reducer/authReducer';
import appReducer from './Reducer/appReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  ProfilePage: profileReducer,
  MessagesPage: messageReducer,
  SideBar: sideBarReducer,
  UsersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;