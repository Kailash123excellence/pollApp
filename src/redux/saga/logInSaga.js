import { put, call } from "redux-saga/effects";
import { requestLoginSuccess, requestLoginError } from "../action/index";
import axios from "axios";

import jwt_decode from "jwt-decode";

function* logIn(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`
    );

    if (response && response.data && response.data.error === 0) {
      yield put(requestLoginSuccess({ response: response.data }));
      let token = response.data.token;
      let decoded = jwt_decode(token);
      localStorage.setItem("role", decoded.role);
      localStorage.setItem("token", response.data.token);
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
