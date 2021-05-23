import toggleReducer from "./toggle";
import taskReducer from "./task";
import quotesReducer from "./quots";
import { combineReducers } from "redux";

const allreducers = combineReducers({
	toggleReducer,
	taskReducer,
	quotesReducer,
});
export default allreducers;
