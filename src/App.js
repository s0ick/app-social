import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import Profile from './Components/Profile/Profile';
import MessagesContainer from './Components/Messages/MessagesContainer';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';


const App = (props) => {
  const MessagesComponent = () => <MessagesContainer />;
  const ProfileComponent = () => <Profile />;  
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-hero">
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path='/messages' render={MessagesComponent}/>
          <Route path='/profile' render={ProfileComponent}/>
          <Route path='/users' render={UsersContainer}/>
          <Route path='/news' render={News}/>
          <Route path='/music' render={Music}/>
          <Route path='/settings' render={Settings}/>
        </div>
      </div>
    </div>
  );
}

export default App;

