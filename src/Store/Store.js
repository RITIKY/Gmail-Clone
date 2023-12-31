import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// import {logger} from "redux-logger"
import thunk from 'redux-thunk'
import Reducer from "./Reducer";

const store = createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store 