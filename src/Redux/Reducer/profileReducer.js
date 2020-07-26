const ADD_POST = 'ADD-POST',
      POST_CHANGE = 'POST-CHANGE';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likeCount: 12},
    {id: 2, message: "It's my first posts", likeCount: 19}
  ],
  newPostText: ''
}      
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: 
      return { ...state,
        newPostText: '',
        posts: [...state.posts, {
          id: state.posts[state.posts.length - 1].id + 1,
          message: state.newPostText,
          likeCount: 0,
        }]
      };
      
    case POST_CHANGE: 
      return { ...state,
        newPostText: action.postText
      };
    
    default: return state;  
  }
};

export const addPostCreator = () => ({type: ADD_POST});
export const PostChangeCreator = (text) => 
  ({type: POST_CHANGE, postText: text});

export default profileReducer;