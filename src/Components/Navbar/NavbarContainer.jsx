import Navbar from './Navbar';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    item: state.SideBar.item,
    fullName: state.SideBar.fullName, 
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  };
};

export default compose(
  connect(mapStateToProps)
)(Navbar);