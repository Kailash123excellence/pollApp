import {
  REQUEST_LOGIN,
  REQUEST_SIGNUP,
  POLL_REQUEST,
  DELETE_POLL_REQUEST,
  EDIT_TITLE_REQUEST,
  NEW_OPTION_REQUEST,
  REMOVE_OPTION_REQUEST,
} from "../action/actionType";



import singUp from "./signUpSaga";
import logIn from "./logInSaga";
import pollShow from "./pollShow";
import deleteSaga from "./deletePollSaga";
import { all, fork, takeLatest } from "redux-saga/effects";
import editTitleSaga from "./editPollSaga";
import newOptionSaga from "./newOptionSaga";
import removeOptionSaga from './removeOptionSaga'



function* signUpUser() {
  yield takeLatest(REQUEST_SIGNUP, singUp);
}

function* loginInUser() {
  yield takeLatest(REQUEST_LOGIN, logIn);
}

function* pollRequest() {
  yield takeLatest(POLL_REQUEST, pollShow);
}

function* deleteRequest() {
  yield takeLatest(DELETE_POLL_REQUEST, deleteSaga);
}

function* editRequest() {
  yield takeLatest(EDIT_TITLE_REQUEST, editTitleSaga);
}

function* newOptionRequest() {
  yield takeLatest(NEW_OPTION_REQUEST, newOptionSaga);
}
function* removeOptionRequest() {
  yield takeLatest(REMOVE_OPTION_REQUEST, removeOptionSaga);
}

export default function* rootSaga() {
  yield all([
    fork(signUpUser),
    fork(loginInUser),
    fork(pollRequest),
    fork(deleteRequest),
    fork(editRequest),
    fork(newOptionRequest),
    fork(removeOptionRequest),
  ]);
}
