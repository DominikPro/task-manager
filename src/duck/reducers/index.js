import toggleReducer from "./toggle";
import taskReducer from "./task";
import { combineReducers } from "redux";

const allreducers = combineReducers({
	toggleReducer,
	taskReducer,
});
export default allreducers;
