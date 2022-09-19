
import { call, put } from "redux-saga/effects";
import { userRequestSuccess,userRequestError } from "../action/index";
import axios from "axios";


function* userSaga(){

try{
const response = yield call(
  axios.get,
  `https://secure-refuge-14993.herokuapp.com/list_users`
) ;
if(response && response.data && response.data.error===0){
yield put(userRequestSuccess({response: response.data}))
}else{
  yield put (userRequestError({error:'no user found', response: response.data.message}))
}
}catch(error){
  yield put (userRequestError({error: "no USer found"}))
}

}

export default userSaga