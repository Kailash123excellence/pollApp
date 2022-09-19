
import signUpReducer from "./signUp";
import logInReducer from './logIn';
import pollReducer from "./viewPoll";
import deletePollReducer from './deletePoll';
import editPollReducer from "./editPollTitle";
import newOptionReducer from "./newOption";
import removeOptionReducer from "./removeOption";
import addPollReducer from "./addPoll";
import votePollReducer from "./votePoll";
import userReducer from "./userPoll";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  signUpReducer,
  logInReducer,
  pollReducer,
  deletePollReducer,
  editPollReducer,
  newOptionReducer,
  removeOptionReducer,
  addPollReducer,
  votePollReducer,
  userReducer,
});

export default rootReducers;

