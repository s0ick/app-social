import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import ProfileContainer from '../Components/Profile/ProfileContainer';
import MessagesContainer from '../Components/Messages/MessagesContainer';
import UsersContainer from '../Components/Users/UsersContainer';
import News from '../Components/News/News';
import Music from '../Components/Music/Music';
import Settings from '../Components/Settings/Settings';
import Login from '../Components/Login/Login';

const Routes = (props) => {
  const MessagesComponent = () => <MessagesContainer />;
  const ProfileComponent = () => <ProfileContainer />;
  const UserComponent = () => <UsersContainer />;
  const LoginComponent = () => <Login />;
  if(props.isAuth) {
    return (
      <div className="app-wrapper-content">
        <Route path='/messages' render={MessagesComponent}/>
        <Route path='/profile/:userId?' render={ProfileComponent}/>
        <Route path='/users' render={UserComponent}/>
        <Route path='/news' render={News}/>
        <Route path='/music' render={Music}/>
        <Route path='/settings' render={Settings}/>
        <Redirect to={`/profile/${props.userId}`}/>
      </div>
    )
  } else {
    return (
      <div className="app-wrapper-content">
        <Route path='/login' render={LoginComponent} />
        <Redirect to='/login'/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  }
};

export const RoutesContainer = connect(mapStateToProps, {})(Routes);