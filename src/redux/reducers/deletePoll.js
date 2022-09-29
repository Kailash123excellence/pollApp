import {
  DELETE_POLL_REQUEST,
  DELETE_POLL_REQUEST_ERROR,
  DELETE_POLL_REQUEST_SUCCESS,
} from "../action/actionType";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  id: null,
};

const deletePollReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POLL_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case DELETE_POLL_REQUEST_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        id: action.payload,
      };
    case DELETE_POLL_REQUEST_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default deletePollReducer;
