import {ADD_POLL_REQUEST,ADD_POLL_REQUEST_SUCCESS,
  ADD_POLL_REQUEST_ERROR} from '../action/actionType'

const initialState=[{
  isLoading:false,
  isSuccess:false,
  isError:false,
  data:null,
  message:null,
}]

const addPollReducer=(state=initialState, action)=>{
  console.log(action, "reducer");
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
    default:
      return state;
  }
}

export default addPollReducer