
import signUpReducer from "./signUp";
import logInReducer from './logIn';
import pollReducer from "./viewPoll";
import deletePollReducer from './deletePoll';
import editPollReducer from "./editPollTitle";
import newOptionReducer from "./newOption";
import removeOptionReducer from "./removeOption";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  signUpReducer,
  logInReducer,
  pollReducer,
  deletePollReducer,
  editPollReducer,
  newOptionReducer,
  removeOptionReducer,
});

export default rootReducers;

