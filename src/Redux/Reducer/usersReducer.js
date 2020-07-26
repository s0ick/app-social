const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW',
      SET_USERS = 'SET-USERS';
    
const initialState = {
  users: [
    {id: 1, photo_url: 'https://s15.stc.all.kpcdn.net/share/i/12/10616805/inx960x640.jpg', followed: true, fullName: 'Danya', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
    {id: 2, photo_url: 'https://s15.stc.all.kpcdn.net/share/i/12/10616805/inx960x640.jpg', followed: false, fullName: 'Vlad', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
    {id: 3, photo_url: 'https://s15.stc.all.kpcdn.net/share/i/12/10616805/inx960x640.jpg', followed: false, fullName: 'Ivan', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
    {id: 4, photo_url: 'https://s15.stc.all.kpcdn.net/share/i/12/10616805/inx960x640.jpg', followed: true, fullName: 'Nikita', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
  ]
}      
const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FOLLOW:
      return { ...state,
        users: state.map(u => {
          if(u.id === action.userID) return {...u, followed: !u.followed};
        })
      };
    
    case SET_USERS: 
      return { ...state,
        users: [...state.users, ...action.users]
      };
    
    default: return state;
  }
};

export const ToggleFollowAC= (userID) => ({type: TOGGLE_FOLLOW, userID: userID});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersReducer;