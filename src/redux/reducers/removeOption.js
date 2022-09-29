import {
  REMOVE_OPTION_REQUEST,
  REMOVE_OPTION_REQUEST_ERROR,
  REMOVE_OPTION_REQUEST_SUCCESS,
} from "../action/actionType";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
};

const removeOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_OPTION_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case REMOVE_OPTION_REQUEST_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };
    case REMOVE_OPTION_REQUEST_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default removeOptionReducer;
