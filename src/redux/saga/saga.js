import {REQUEST_LOGIN,REQUEST_SIGNUP,POLL_REQUEST} from '../action/actionType'

import singUp from './signUpSaga'
import logIn from'./logInSaga'
import pollShow from './pollShow'
import {all,fork,takeLatest} from 'redux-saga/effects'



function* signUpUser(){
  yield takeLatest(REQUEST_SIGNUP,singUp)
}

function* loginInUser(){
  yield takeLatest(REQUEST_LOGIN,logIn)
}

function* pollRequest(){
  yield takeLatest(POLL_REQUEST,pollShow)
}

export default function* rootSaga(){
    yield all ([fork(signUpUser),fork(loginInUser),fork(pollRequest)])
}