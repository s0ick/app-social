import { createStore, combineReducers } from 'redux';
import profileReducer from './Reducer/profileReducer';
import messageReducer from './Reducer/messageReducer';
import sideBarReducer from './Reducer/sideBarReducer';
import usersReducer from './Reducer/usersReducer';

let reducers = combineReducers({
  ProfilePage: profileReducer,
  MessagesPage: messageReducer,
  SideBar: sideBarReducer,
  UsersPage: usersReducer
});

let store = createStore(reducers);
export default store;