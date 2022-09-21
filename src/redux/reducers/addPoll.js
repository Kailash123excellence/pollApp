import {ADD_POLL_REQUEST,ADD_POLL_REQUEST_SUCCESS,
  ADD_POLL_REQUEST_ERROR,
  CHANGE_POLL_REQUEST} from '../action/actionType'

const initialState=[{
  isLoading:false,
  isSuccess:false,
  isError:false,
  data:null,
  message:null,
}]

const addPollReducer=(state=initialState, action)=>{
  switch(action.type){
    case ADD_POLL_REQUEST:
    return{
      isLoading:true,
      isSuccess:false,
      isError:false,
    }
    case ADD_POLL_REQUEST_SUCCESS:
      return{
        isLoading:false,
        isSuccess:true,
        isError:false,
        data:action.payload.response,
      }
    case ADD_POLL_REQUEST_ERROR:
      return{
        isLoading:false,
        isSuccess:false,
        isError:true,
        message:action.payload.message,
      }
    case CHANGE_POLL_REQUEST:
      return {
        isLoading: false,
        isSuccess: false,
        isError: false,
      };
    
    default:
      return state;
  }
}

export default addPollReducer