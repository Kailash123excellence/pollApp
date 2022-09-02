import {
  ADD_USER,
LOGIN_USER,
CHANGE_USERNAME,
ADD_PASSWORD
} from './actionType';

export const changeUsername = (user) => {
  return {
    type: CHANGE_USERNAME,
    payload: { user },
  };
};

export const changePassword = (pass) => {
  return {
    type: ADD_PASSWORD,
    payload: { pass },
  };
};


export const addUser =(user)=>{
  return{
    type:ADD_USER,
    payload:{user}
  }
};

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: {user},
  };
};