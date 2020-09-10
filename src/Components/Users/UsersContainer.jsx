import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, requestUsers, following } from '../../Redux/Reducer/usersReducer';
import  * as Selectors  from '../../Redux/Selectors/usersSelectors';
import User from './User/User';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  }

  onFollowChanged = (id, followed) => {
    this.props.following(followed, id);
  }

  getUsersList = () => {
    return this.props.users
      .map(u => 
        <User id={u.id}
              followed={u.followed} 
              photo_url={u.photos.large}
              fullName={u.name}
              status={u.status}
              country="Russian"
              city="Moscow"
              loading={this.props.isLoading}

              onFollowChanged={this.onFollowChanged}
        />)
  }

  render() {
    return <>
      { this.props.isFetching ? <Preloader /> : 
          <Users getUsersList={this.getUsersList}
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}          
      />}
    </>
  }
}


// let mapStateToProps = (state) => {
//   return {
//     users: state.UsersPage.users,
//     pageSize: state.UsersPage.pageSize,
//     totalUsersCount: state.UsersPage.totalUsersCount,
//     currentPage: state.UsersPage.currentPage,
//     isFetching: state.UsersPage.isFetching,
//     isLoading: state.UsersPage.isLoading
//   };
// };
let mapStateToProps = (state) => {
  return {
    users: Selectors.getUsers(state),
    pageSize: Selectors.getPageSize(state),
    totalUsersCount: Selectors.getTotalUsersCount(state),
    currentPage: Selectors.getCurrentPage(state),
    isFetching: Selectors.getIsFetching(state),
    isLoading: Selectors.getIsLoading(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage, requestUsers, following
  })
)(UsersContainer);