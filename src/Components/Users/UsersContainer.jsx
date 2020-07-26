import Users from './Users';
import { connect } from 'react-redux';
import { ToggleFollowAC, setUsersAC } from '../../Redux/Reducer/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    SetUser() {
      dispatch(setUsersAC());
    },
    ToggleFollow() {
      dispatch(ToggleFollowAC());
    }
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;