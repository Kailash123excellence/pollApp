import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
} from "../action/actionType";

const initialState = [
  {
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case USER_REQUEST_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };

    case USER_REQUEST_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default userReducer;
