import axios from 'axios';
import {INCREMENT, DECREMENT} from '../constants';
import {FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST,LOAD_USER} from '../constants';


export const increment = () => {
  return {
    type: INCREMENT
  }
};

export const decrement = () => {
  return {
    type: DECREMENT
  }
};

export const fetch_user_failure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error
  };
};

export const fetch_user = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
};

export const fetch_user_request = () => {
  return {
    type: FETCH_USER_REQUEST
  }
};

export const get_user = () => {
  return {
    type: LOAD_USER,
    payload: {
      promise: axios.get("https://randomuser.me/api/")
    }
  };
};
