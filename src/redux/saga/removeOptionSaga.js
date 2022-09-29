import { call, put } from "redux-saga/effects";
import {
  removeOptionRequestSuccess,
  removeOptionRequestError,
  pollRequest,
} from "../action/index";
import axios from "axios";

function* removeOptionSaga(action) {
  const { id, text } = action.payload;

  try {
    const response = yield call(
      axios.delete,
      `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${id}&option_text=${text}`
    );

    if (response && response.data && response.data.error === 0) {
      yield put(removeOptionRequestSuccess({ response: response.data }));
      yield put(pollRequest());
    } else {
      yield put(
        removeOptionRequestError({
          error: "not edited",
          message: response.data.message,
        })
      );
    }
  } catch (error) {
    yield put(removeOptionRequestError({ Error: "not edited" }));
  }
}

export default removeOptionSaga;
