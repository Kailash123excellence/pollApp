import { call, put } from "redux-saga/effects";
import { addPollRequestSuccess, addPollRequestError } from "../action/index";
import axios from "axios";

function* addPollSaga(action) {
  console.log(action,"saga");
  const { option,question } = action.payload;

  try {
    const response = yield call(
      axios.put,
`https://secure-refuge-14993.herokuapp.com/add_poll?title=${question}&options=${option[0]}____${option[1]}____${option[2]}____${option[3]}`
      );

    if (response && response.data && response.data.error === 0) {
      yield put(addPollRequestSuccess({ response: response.data }));
    } else {
      yield put(
        addPollRequestError({
          error: "add poll request fail",
          message: "request fail to add poll",
        })
      );
    }
  } catch (error) {
    yield put(addPollRequestError({ Error: "not added poll" }));
  }
}

export default addPollSaga;
