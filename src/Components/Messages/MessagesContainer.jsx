import {MessageChangeCreator, addMessageCreator} from '../../Redux/Reducer/messageReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.MessagesPage.dialogs,
    messages: state.MessagesPage.messages,
    newMessageText: state.MessagesPage.newMessageText 
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage() {
      dispatch(addMessageCreator());     
    },
    MessageChange(text) {
      dispatch(MessageChangeCreator(text));
    }
  };
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;