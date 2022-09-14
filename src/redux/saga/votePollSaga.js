import { call, put } from "redux-saga/effects";
import {
  votePollRequestSuccess,
  votePollRequestError,
  pollRequest,
} from "../action/index";
import axios from "axios";

function* votePollSaga(action) {
  console.log(action,"saga")
  const { id, text } = action.payload;
  
  const token=localStorage.getItem("token")
 


  try {
    
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${text}`,{
        headers:{
          access_token:token
        }
      }
      
    );
      console.log(response,"sagaResponse")
    if (response && response.data && response.data.error === 0) {
      yield put(votePollRequestSuccess({ response: response.data }));

      yield put(pollRequest());
    } else {
      yield put(
        votePollRequestError({
          error: "add poll request fail",
          message: "request fail to add poll",
        })
      );
    }
  } catch (error) {
    yield put(votePollRequestError({ Error: "not added poll" }));
  }
}

export default votePollSaga;
