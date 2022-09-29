import { put, call } from "redux-saga/effects";
import axios from "axios";
import { requestSingUpSuccess, requestSingUpError } from "../action/index";

function* singUp(action) {
  const { username, password, role } = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`
    );
    if (response && response.data && response.data.error === 0) {
      yield put(requestSingUpSuccess({ response: response.data.data }));
    } else {
      yield put(
        requestSingUpError({ error: "NO DATA", message: response.data.message })
      );
    }
  } catch (error) {
    yield put(requestSingUpError({ error: "NO DATA" }));
  }
}

export default singUp;
