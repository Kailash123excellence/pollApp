import { call, put } from "redux-saga/effects";
import {
  deletePollRequestSuccess,
  deletePollRequestError,
} from "../action/index";
import axios from "axios";

function* deleteSaga(action) {
   

  const id  = action.payload;
   
  
  try {
    const response = yield call(
      axios.delete,
      `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`
    );
    // console.log(response, "deleteresponse");

    if(response && response.data && response.data.error===0){
      yield put (deletePollRequestSuccess({response:response.data}));
    }else{
      yield put (
        deletePollRequestError({error:"not deleted", message: response.data.message})
      )
    }
  } catch (error) {
    yield put(deletePollRequestError({ Error: "not deleted" }));
  }
}

export default deleteSaga;
