import { UserAPI, FollowedAPI } from '../../API/api';

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW',
      SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
      TOTAL_COUNT = 'TOTAL-COUNT',
      TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING',
      FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS',
      SET_USERS = 'SET-USERS';
    
const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 5,
  isFetching: false,
  isLoading: []
};
const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FOLLOW:
      return { ...state,
        users: state.users.map(u => {
          if(u.id == action.userID) return {...u, followed: !u.followed};
          return u;
        })
      };
    
    case SET_USERS:
      return { ...state,
        users: action.users
      };

    case SET_CURRENT_PAGE:
      return {...state,
        currentPage: action.currentPage
      };
      
    case TOTAL_COUNT:
      return {...state,
        totalUsersCount: action.count
      };
   
    case TOGGLE_IS_FETCHING:
      return {...state,
        isFetching: action.isFetching
      };
    
    case FOLLOWING_PROGRESS:
      return { ...state,
        isLoading: action.isLoading 
        ? [...state.isLoading, action.userId]
        : state.isLoading.filter(id => id !== action.userId)

      };  
    
    default: return state;
  }
};

// ACTION CREATORS
export const toggleFollow= (userID) => ({type: TOGGLE_FOLLOW, userID});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersTotalCount = (count) => ({type: TOTAL_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const progressLoading = (isLoading, userId) => ({type: FOLLOWING_PROGRESS, isLoading, userId});

// THUNK CREATORS
export const requestUsers = (currentPage , pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
    
  UserAPI.getUsers(currentPage, pageSize)
    .then(response => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setUsersTotalCount(response.totalCount));
    });
}
export const following = (followed, id) => (dispatch) => {
  const activeToggle = (res) => {
    if(res.resultCode === 0) {
      dispatch(toggleFollow(id));
    } dispatch(progressLoading(false, Number(id)));
  }
  
  dispatch(progressLoading(true, Number(id)));
  if(followed) {
    FollowedAPI.unFollowed(id)
      .then(response => {
        activeToggle(response);
      });
  } else {
    FollowedAPI.followed(id)
      .then(response => {
        activeToggle(response);
      });
  }
}

export default usersReducer;