import { ADD_USER,LOGIN_USER,CHANGE_USERNAME,ADD_PASSWORD } from "../action/actionType";
const initialState = {
  profile:{
    username:"",
    password:""
  }
};
const pollReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case ADD_USER:
      return {
        ...state,
        profile:{
          user:action.payload.user,
          password:action.payload.password
        },
      };
    case LOGIN_USER:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default pollReducer;
