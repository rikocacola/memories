import * as api from '../api'
import * as type from '../constans/actionTypes';

//Action Creator
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPost();

    dispatch({
      type: type.FETCH_ALL,
      payload: data,
    });

  } catch(err) {
    console.error(err.message);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);

    dispatch({
      type: type.CREATE_POST,
      payload: data
    });
  } catch(err) {
    console.error(err.message);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try{
    const {data} = await api.updatePost(id, post);
    dispatch({
      type: type.UPDATE_POST,
      payload: data
    });
  } catch(err){
    console.error(err.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try{
    await api.deletePost(id);
    dispatch({
      type: type.DELETE_POST,
      payload: id
    });
  } catch(err){
    console.error(err.message);
  }
}

export const likePost = (id) => async (dispatch) => {
  try{
    const {data} = await api.likePost(id);
    dispatch({
      type: type.LIKE_POST,
      payload: data
    })
  } catch(err) {
    console.error(err)
  }
}