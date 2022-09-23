import {
  NEW_OPTION_REQUEST,
  NEW_OPTION_REQUEST_ERROR,
  NEW_OPTION_REQUEST_SUCCESS,
} from "../action/actionType";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
};

const newOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_OPTION_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case NEW_OPTION_REQUEST_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };
    case NEW_OPTION_REQUEST_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default newOptionReducer;
