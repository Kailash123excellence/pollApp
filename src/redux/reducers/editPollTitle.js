import {
  EDIT_TITLE_REQUEST,
  EDIT_TITLE_REQUEST_SUCCESS,
  EDIT_TITLE_REQUEST_ERROR,
} from "../action/actionType";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
};

const editPollReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TITLE_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case EDIT_TITLE_REQUEST_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case EDIT_TITLE_REQUEST_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default editPollReducer;
