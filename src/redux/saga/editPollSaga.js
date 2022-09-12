import { call, put } from "redux-saga/effects";
import {
  editPollTitleRequestSuccess,
  editPollTitleRequestError,
} from "../action/index";
import axios from "axios";

function* editTitleSaga(action) {
  const {id,title} = action.payload;
 
  try {
    const response = yield call(
      axios.put,
      `https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${id}&title=${title}`
    );
    

    if (response && response.data && response.data.error === 0) {
      yield put(editPollTitleRequestSuccess({ response: response.data }));
    } else {
      yield put(
        editPollTitleRequestError({
          error: "not deleted",
          message: response.data.message,
        })
      );
    }
  } catch (error) {
    yield put(editPollTitleRequestError({ Error: "not deleted" }));
  }
}

export default editTitleSaga;
