// import { act } from "react-dom/test-utils";
import { OPEN_COMPOSE,CLOSE_COMPOSE,OPEN_MESSAGE,SIGN_IN,SIGN_OUT } from "./Constants";
import { openMessage } from "./action";
const initialState = {
    composeisopen: false,
    selectedMessage: null,
    value: null,
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_COMPOSE:
      return {
        ...state,
        composeisopen: true,
      };
    case CLOSE_COMPOSE:
      return {
        ...state,
        composeisopen: false,
      };
    case OPEN_MESSAGE:
      return {
        ...state,
        selectedMessage: action.payload,
      };
    case SIGN_IN:
      return {
        ...state,
        value: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        value: null,
      }
    
    default:
      return state;
  }
};

export default Reducer;