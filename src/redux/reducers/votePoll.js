import {
  VOTE_POLL_REQUEST,
  VOTE_POLL_REQUEST_SUCCESS,
  VOTE_POLL_REQUEST_ERROR,
} from "../action/actionType";

const initialState = [
  {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: null,
    message: null,
  },
];

const votePollReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTE_POLL_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case VOTE_POLL_REQUEST_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case VOTE_POLL_REQUEST_ERROR:
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

export default votePollReducer;
