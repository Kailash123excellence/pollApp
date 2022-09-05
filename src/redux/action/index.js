import {
 REQUEST_SIGNUP,
 REQUEST_LOGIN_SUCCESS,
 REQUEST_SIGNUP_SUCCESS,
 REQUEST_SIGNUP_ERROR,
 REQUEST_LOGIN,
 REQUEST_LOGIN_ERROR,
 POLL_REQUEST,
 POLL_REQUEST_SUCCESS,
 POLL_REQUEST_ERROR
} from './actionType';

export const requestSingUp =(data)=>{
  return{
    type:REQUEST_SIGNUP,
    payload:data,
  }
};

export const requestSingUpSuccess = (data) => {
  return {
    type: REQUEST_SIGNUP_SUCCESS,
    payload: data,
  };
};

export const requestSingUpError = (data) => {
  return {
    type: REQUEST_SIGNUP_ERROR,
    payload: data,
  };
};

export const requestLogin = (data) => {
  return {
    type: REQUEST_LOGIN,
    payload: data,
  };
};

export const requestLoginSuccess = (data) => {
  return {
    type: REQUEST_LOGIN_SUCCESS,
    payload: data,
  };
};

export const requestLoginError = (data) => {
  return {
    type: REQUEST_LOGIN_ERROR,
    payload:data
  };
};


export const pollRequest = (data) => {
  return {
    type: POLL_REQUEST,
    payload: data,
  };
};

export const pollRequestSuccess = (data) => {
  return {
    type: POLL_REQUEST_SUCCESS,
    payload: data,
  };
};

export const pollRequestError = (data) => {
  return {
    type: POLL_REQUEST_ERROR,
    payload: data,
  };
};
