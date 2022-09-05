
import signUpReducer from "./signUp";
import logInReducer from './logIn'
import { combineReducers } from "redux";

const rootReducers=combineReducers({
  signUpReducer,
  logInReducer
  

})

export default rootReducers;

