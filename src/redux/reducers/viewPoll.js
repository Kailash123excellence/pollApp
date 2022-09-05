import { POLL_REQUEST,POLL_REQUEST_SUCCESS,POLL_REQUEST_ERROR } from "../action/actionType"

const initialState={
  isLoading:false,
  isSuccess:false,
  isError:false,
  data:null,
  message:null
}


 function pollReducer(state=initialState,action){
  switch (action.type) {
    case POLL_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case POLL_REQUEST_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case POLL_REQUEST_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
         message: action.payload.message  
      };
    default:
      return state;
  }

 }

 export default pollReducer