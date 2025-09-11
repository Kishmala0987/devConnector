import {GET_PROFILE, GET_PROFILES,PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_GITHUB_REPOS} from '../actions/type';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  repos: [],
  error: {}
}

const profile = (state=initialState, action) => {
  const {type, payload} =action;
  switch(type){
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return{
        ...state, //this will return the current state
        profile: payload,
        loading: false
      }
    case GET_PROFILES:
      return{
        ...state,
        profiles: payload,
        loading: false
      }
    case GET_GITHUB_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      }

    case PROFILE_ERROR:
      return{
        ...state,
        error: payload,
        loading: false
      }
    case CLEAR_PROFILE:
      return{
        ...state,
        profile:null,
        loading: false
      }
    default:
      return state;
  }
}
export default profile;