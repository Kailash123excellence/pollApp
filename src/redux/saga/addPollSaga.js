import { call, put } from "redux-saga/effects";
import { addPollRequestSuccess, addPollRequestError, pollRequest } from "../action/index";
import axios from "axios";

function* addPollSaga(action) {
 
  const { option,question } = action.payload;
  
  let opt='';
option.map((val, index) => {
  if(option.length===index+1){
      opt += `${val.option}`;
  }
  else{
  opt += `${val.option}____`;

  }
});
  

 



  try {
    const response = yield call(
      axios.put,
`https://secure-refuge-14993.herokuapp.com/add_poll?title=${question}&options=${opt}`
      );
        console.log(response,"addsaga");
    if (response && response.data && response.data.error === 0) {
      yield put(addPollRequestSuccess({ response: response.data }));
      yield put(pollRequest())
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
