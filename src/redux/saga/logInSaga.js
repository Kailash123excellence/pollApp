import { put, call } from "redux-saga/effects";
import { requestLoginSuccess, requestLoginError } from "../action/index";
import axios from "axios";

import { jwtDecode } from "jwt-js-decode";

function* logIn(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`
    );
    // console.log(response.data, "login response");

    if (response && response.data && response.data.error === 0) {
      yield put(requestLoginSuccess({ response: response.data }));
      // console.log(response.data, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      let jwt = jwtDecode(response.data.token);
      // console.log(jwt.payload.role, "get role");
      localStorage.setItem("role", jwt.payload.role);
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
