import { put, call } from "redux-saga/effects";
import { requestLoginSuccess, requestLoginError } from "../action/index";
import axios from "axios";

function* logIn(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`
    );
    console.log(response, "login");
    if (response && response.data) {
      yield put(requestLoginSuccess({ response: response.data }));
      // localStorage.setItem("role", response.data.data.role);
    } else {
      yield put(
        requestLoginError({ error: "NO DATA", message: response.data.message })
      );
    }
  } catch (error) {
    yield put(requestLoginError({ error: "NO DATA" }));
  }
}

export default logIn;
