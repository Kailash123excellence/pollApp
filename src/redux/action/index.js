import {
  REQUEST_SIGNUP,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_ERROR,
  REQUEST_LOGIN,
  REQUEST_LOGIN_ERROR,
  POLL_REQUEST,
  POLL_REQUEST_SUCCESS,
  POLL_REQUEST_ERROR,
  DELETE_POLL_REQUEST,
  DELETE_POLL_REQUEST_SUCCESS,
  DELETE_POLL_REQUEST_ERROR,
  EDIT_TITLE_REQUEST,
  EDIT_TITLE_REQUEST_SUCCESS,
  EDIT_TITLE_REQUEST_ERROR,
  NEW_OPTION_REQUEST,
  NEW_OPTION_REQUEST_SUCCESS,
  NEW_OPTION_REQUEST_ERROR,
  REMOVE_OPTION_REQUEST,
  REMOVE_OPTION_REQUEST_SUCCESS,
  REMOVE_OPTION_REQUEST_ERROR,
  ADD_POLL_REQUEST,
  ADD_POLL_REQUEST_SUCCESS,
  ADD_POLL_REQUEST_ERROR,
  VOTE_POLL_REQUEST,
  VOTE_POLL_REQUEST_SUCCESS,
  VOTE_POLL_REQUEST_ERROR
} from "./actionType";

export const requestSingUp = (data) => {
  console.log(data)
  return {
    type: REQUEST_SIGNUP,
    payload: data,
  };
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
    payload: data,
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

export const deletePollRequest = (id) => {
  return {
    type: DELETE_POLL_REQUEST,
    payload: id,
  };
};

export const deletePollRequestSuccess = (id) => {
  return {
    type: DELETE_POLL_REQUEST_SUCCESS,
    payload: id,
  };
};

export const deletePollRequestError = (id) => {
  return {
    type: DELETE_POLL_REQUEST_ERROR,
    payload: id,
  };
};

export const editPollTitleRequest = (data) => {
  return {
    type: EDIT_TITLE_REQUEST,
    payload: data,
  };
};

export const editPollTitleRequestSuccess = (data) => {
  return {
    type: EDIT_TITLE_REQUEST_SUCCESS,
    payload: data,
  };
};

export const editPollTitleRequestError = (data) => {
  return {
    type: EDIT_TITLE_REQUEST_ERROR,
    payload: data,
  };
};

export const newOptionRequest = (text) => {
  return {
    type: NEW_OPTION_REQUEST,
    payload: text,
  };
};

export const newOptionRequestSuccess = (text) => {
  return {
    type: NEW_OPTION_REQUEST_SUCCESS,
    payload: text,
  };
};

export const newOptionRequestError = (text) => {
  return {
    type: NEW_OPTION_REQUEST_ERROR,
    payload: text,
  };
};

export const removeOptionRequest = (id,text) => {
 
  return {
    type: REMOVE_OPTION_REQUEST,
    payload:({
      id:id,
      text:text,
    }),
  };
};

export const removeOptionRequestSuccess = (id,text) => {
  return {
    type: REMOVE_OPTION_REQUEST_SUCCESS,
    payload:({
      id:id,
      text:text,
    }),
  };
};

export const removeOptionRequestError = (id,text) => {
  return {
    type: REMOVE_OPTION_REQUEST_ERROR,
    payload:({
      id:id,
      text:text,
    }),
  };
};

export const addPollRequest = (data) => {
  
  return {
    type: ADD_POLL_REQUEST,
    payload: data,
  };
};

export const addPollRequestSuccess = (data) => {
  return {
    type: ADD_POLL_REQUEST_SUCCESS,
    payload: data,
  };
};

export const addPollRequestError = (data) => {
  return {
    type: ADD_POLL_REQUEST_ERROR,
    payload: data,
  };
};


export const votePollRequest = (id,text) => {
  return {
    type: VOTE_POLL_REQUEST,
    payload:({
      id:id,
      text:text,
    }),
  };
};

export const votePollRequestSuccess = (id,text) => {
  return {
    type: VOTE_POLL_REQUEST_SUCCESS,
    payload:({
      id:id,
      text:text,
    }),
  };
};

export const votePollRequestError = (id,text) => {
  return {
    type: VOTE_POLL_REQUEST_ERROR,
    payload: {
      id: id,
      text: text,
    },
  };
};