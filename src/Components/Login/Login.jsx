import React from 'react';
import style from './Login.module.css';
import LoginForm from './LoginForm';
import { authLogin } from '../../Redux/Reducer/authReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';

class LoginContainer extends React.Component {
  onSubmit = (formData) => {
    let { email, password, rememberMe } = formData;
    this.props.authLogin(email, password, rememberMe, false);
  }

  render () {
    return (
      <div className={style.auth}>
        <div className={style.leftColumn}>
          <h3 className={style.title}>Enter the Reactive Network</h3>
          <LoginForm onSubmit={this.onSubmit} />
        </div>
        <div className={style.rightColumn}>
          <h3 className={style.title}>What is this network?</h3>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {}; 

export default compose(connect(null, {authLogin}))(LoginContainer);