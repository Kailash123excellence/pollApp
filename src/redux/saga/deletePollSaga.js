import { call, put } from "redux-saga/effects";
import {
  deletePollRequestSuccess,
  deletePollRequestError,
  pollRequest,
} from "../action/index";
import axios from "axios";

function* deleteSaga(action) {
  const id = action.payload;

  try {
    const response = yield call(
      axios.delete,
      `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`
    );

    if (response && response.data && response.data.error === 0) {
      yield put(deletePollRequestSuccess({ response: response.data }));
      yield put(pollRequest());
    } else {
      yield put(
        deletePollRequestError({
          error: "not deleted",
          message: response.data.message,
        })
      );
    }
  } catch (error) {
    yield put(deletePollRequestError({ Error: "not deleted" }));
  }
}

export default deleteSaga;
