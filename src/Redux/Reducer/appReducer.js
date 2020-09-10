import { AuthMe } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initial = {
  initialized: false,
};

const appReducer = (state = initial, action) => {
  switch(action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state,
        initialized: true
      };

     default: return state; 
  }
}

// ACTION CREATORS
export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

// THUNK CREATORS
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(AuthMe());
  Promise.all([promise])
    .then(() => {
      dispatch(setInitializedSuccess());
    });
};

export default appReducer;