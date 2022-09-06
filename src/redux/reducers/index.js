
import signUpReducer from "./signUp";
import logInReducer from './logIn';
import pollReducer from "./viewPoll";
import { combineReducers } from "redux";

const rootReducers=combineReducers({
  signUpReducer,
  logInReducer,
  pollReducer

})

export default rootReducers;

