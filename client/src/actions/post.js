import {GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST, ADD_COMMENT, REMOVE_COMMENT} from './type';
import axios from 'axios';
import { setALERT } from './alert';

//get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    });
  }
}
//GET Post by id
export const getPostById = (postId) => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    });
  }
}
//update likes
export const updateLikes = (postId) => async dispatch => {
  try {
  
    const res = await axios.put(`/api/posts/like/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data}
    })
  } catch (error) {
    dispatch({
      type:POST_ERROR,
      payload: { msg: error.response?.statusText || error.message, status: error.response?.status}
    })
    
  }
}
//delete post
export const deletePost = (postId) => async dispatch => {
  try {
    await axios.delete(`/api/posts/${postId}`);
    dispatch({
      type: DELETE_POST,
      payload: postId
    });
    dispatch(setALERT('Post Deleted', 'success'));
  } catch (error) {
    dispatch({
      type:POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}
//create/add post
export const addPost = (formData) => async dispatch =>{
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(`/api/posts/`, formData,config);
    dispatch({
      type: ADD_POST,
      payload: res.data
    })
    
  } catch (error) {
     dispatch({
      type:POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
    
  }
}
//add comment 
export const addComment = (postId, formData) => async dispatch => {
  try {
    const config = {
    headers:{
      'Content-Type':'application/json'
    }
  };
  const res = await axios.put(`/api/posts/comment/${postId}`, formData, config);
  dispatch({
    type: ADD_COMMENT,
    payload: res.data
  });
  dispatch(setALERT('Added Comment Successfully', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    });
  }
  
}
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
  await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
  dispatch({
    type: REMOVE_COMMENT,
    payload: commentId
  });
  dispatch(setALERT('Comment Removed', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    });
  }
  
}