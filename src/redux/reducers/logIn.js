import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_ERROR,
  REQUEST_LOGIN_SUCCESS,
} from "../action/actionType";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case REQUEST_LOGIN_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data:action.payload.response
      };
    case REQUEST_LOGIN_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default logInReducer
