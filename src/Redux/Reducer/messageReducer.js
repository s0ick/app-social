const ADD_MESSAGE = 'ADD-MESSAGE',
      MESSAGE_CHANGE = 'MESSAGE-CHANGE';
    
const initialState = {
  dialogs: [
    {id: 1, name: 'Андрей'},
    {id: 2, name: 'Света'},
    {id: 3, name: 'Саша'},
    {id: 4, name: 'Иван'},
    {id: 5, name: 'Кирилл'},
    {id: 6, name: 'Никита'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How your socical-s0ick?'},
    {id: 3, message: 'Cool'}
  ],
  newMessageText: ''
}      
const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return { ...state,
        newMessageText: '',
        messages: [...state.messages, {
          id: state.messages[state.messages.length - 1].id + 1,
          message: state.newMessageText
        }]
      };
    
    case MESSAGE_CHANGE: 
      return { ...state,
        newMessageText: action.messageText
      };
      
    default: return state;
  }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const MessageChangeCreator = (text) => 
  ({type: MESSAGE_CHANGE, messageText: text});

export default messageReducer;