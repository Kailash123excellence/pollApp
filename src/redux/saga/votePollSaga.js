import { call, put } from "redux-saga/effects";
import {
  votePollRequestSuccess,
  votePollRequestError,
  pollRequest,
} from "../action/index";
import axios from "axios";

function* votePollSaga(action) {
  const { id, text } = action.payload;

  try {
    const response = yield call(
      axios.put,
      `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${text}`
    );

    if (response && response.data && response.data.error === 0) {
      yield put(votePollRequestSuccess({ response: response.data }));
      localStorage.setItem("token", response.data.token);
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
