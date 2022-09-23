import {
  REQUEST_SIGNUP,
  REQUEST_SIGNUP_ERROR,
  REQUEST_SIGNUP_SUCCESS,
} from "../action/actionType";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
  message: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGNUP:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case REQUEST_SIGNUP_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case REQUEST_SIGNUP_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default signUpReducer;
