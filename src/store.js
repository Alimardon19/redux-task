import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import XodimReducer from "./reducer/xodimReducer";
import LavozimReducer from "./reducer/lavozimReducer";
import DarajaReducer from './reducer/darajaReducer';

export default createStore(combineReducers({XodimReducer, LavozimReducer, DarajaReducer}),applyMiddleware(logger));