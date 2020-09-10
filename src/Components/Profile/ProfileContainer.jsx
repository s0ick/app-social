import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../Redux/Reducer/profileReducer';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfile(userId, this.props.id);
    this.props.getStatus(userId);
  }

  render() {
    return <>
       { !this.props.profile ? <Preloader /> : 
          <Profile {...this.props} />
       }
    </>
  }
}

let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  id: state.auth.userId,
  status: state.ProfilePage.status
});

export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer);