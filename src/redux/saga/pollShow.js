import { put, call } from "redux-saga/effects";
import axios from "axios";
import { pollRequestSuccess, pollRequestError } from "../action/index";

function* pollShow() {
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/list_polls`
    );
    if (response && response.data) {
      yield put(pollRequestSuccess({ response: response.data }));
    } else {
      yield put(
        pollRequestError({ error: "NO DATA", response: response.data.message })
      );
    }
  } catch (error) {
    yield put(pollRequestError({ error: "NO DATA" }));
  }
}

export default pollShow;
