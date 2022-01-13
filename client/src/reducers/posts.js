import * as type from '../constans/actionTypes'

const reducer = (posts = [], action) => {
  switch (action.type){
    case type.FETCH_ALL:
      return action.payload;
    case type.CREATE_POST:
      return [...posts, action.payload];
    case type.UPDATE_POST:
    case type.LIKE_POST:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case type.DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
}

export default reducer;
