import {REQUEST_LOGIN,REQUEST_SIGNUP,POLL_REQUEST, DELETE_POLL_REQUEST,EDIT_TITLE_REQUEST} from '../action/actionType'

import singUp from './signUpSaga'
import logIn from'./logInSaga'
import pollShow from './pollShow'
import deleteSaga from './deletePollSaga'
import {all,fork,takeLatest} from 'redux-saga/effects'
import editTitleSaga from './editPollSaga'



function* signUpUser(){
  yield takeLatest(REQUEST_SIGNUP,singUp)
}

function* loginInUser(){
  yield takeLatest(REQUEST_LOGIN,logIn)
}

function* pollRequest(){
  yield takeLatest(POLL_REQUEST,pollShow)
}

function* deleteRequest(){
  yield takeLatest(DELETE_POLL_REQUEST,deleteSaga )
}

function* editRequest(){
  yield takeLatest (EDIT_TITLE_REQUEST,editTitleSaga)
}

export default function* rootSaga(){
    yield all ([fork(signUpUser),fork(loginInUser),fork(pollRequest),
    fork(deleteRequest),fork[editRequest]])
}