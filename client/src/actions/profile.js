import axios from "axios";
import { ACCOUNT_DELETED, CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, GET_PROFILES, GET_GITHUB_REPOS} from "./type";
import { setALERT } from "./alert";
//get profile of current user
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
//get  a profile
export const getUserProfileById = (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/user/${user_id}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
    dispatch(setALERT(error.response.statusText,'danger'));
  }
};
//get all profiles
export const getAllProfiles = () => async dispatch => {
  dispatch({type:CLEAR_PROFILE});
  try{
    const res = await axios.get('/api/profile/');
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
    
  }
  catch(err){
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}
//get repos
export const getGitHubRepos = (username) => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/github/${username}`);
    dispatch({
      type: GET_GITHUB_REPOS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: error.response.statusText, status: error.response.status}
    });
  }
};
//create or update profile
export const createOrUpdateProfile =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/api/profile", formData, config);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
      dispatch(
        setALERT(
          edit ? "Profile Updated Successfully" : "Profile Created Successfully", 'success'
        )
      );
      if (!edit) {
        navigate("/dashboard");
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((err) => dispatch(setALERT(err.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
//Add Experience
export const addExperience = (formData, navigate) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.put('/api/profile/experience', formData, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload:res.data
    });
    dispatch(setALERT('Experience Added Successfully', 'success'));
    navigate('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if(errors){
      errors.forEach(error=> dispatch(setALERT(error.msg,'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status:err.response.status}
    })
  }
};
//ADD Education
export const addEducation = (formData, navigate) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.put('/api/profile/education', formData, config);
    dispatch({
      type:UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setALERT('Education Added Successfully', 'success'));
    navigate('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if(errors){
      errors.forEach(error => dispatch(setALERT(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload:{msg: err.response.statusText, status: err.response.status}
    });
  }
};
//Delete any experience
export const deleteExperience = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setALERT('Experience Removed Successfully', 'success'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: error.response.statusText, status:error.response.status}
    });
    
  }
};
//delete any education
export const deleteEducation = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(setALERT('Education Removed Successfully', 'success'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: error.response.statusText, status:error.response.status}
    });
    
  }
};
//delete account
export const deleteAccount =() => async dispatch => {
  if(window.confirm("Are you sure? This can NOT be undone!")){
    try {
      await axios.delete('/api/profile');
      dispatch({ type: CLEAR_PROFILE  });
      dispatch({type: ACCOUNT_DELETED});
      dispatch(setALERT('Your account has been deleted permanently', 'danger'));
    } catch (error) {
      dispatch({
      type: PROFILE_ERROR,
      payload: {msg: error.response.statusText, status:error.response.status}
    });
    }
  }
}