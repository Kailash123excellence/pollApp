import { call, put } from "redux-saga/effects";
import {
  newOptionRequestSuccess,
  newOptionRequestError,
  pollRequest,
} from "../action/index";
import axios from "axios";

function* newOptionSaga(action) {
  const { id, text } = action.payload;

  try {
    const response = yield call(
      axios.put,
      `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${text}`
    );

    if (response && response.data && response.data.error === 0) {
      yield put(newOptionRequestSuccess({ response: response.data }));
      yield put(pollRequest());
    } else {
      yield put(
        newOptionRequestError({
          error: "not edited",
          message: response.data.message,
        })
      );
    }
  } catch (error) {
    yield put(newOptionRequestError({ Error: "not edited" }));
  }
}

export default newOptionSaga;
