import toggleReducer from "./toggle";
import taskReducer from "./task";
import quotesReducer from "./quots";
import sortTasks from "./sortTask";
import { combineReducers } from "redux";

const allreducers = combineReducers({
	toggleReducer,
	taskReducer,
	quotesReducer,
	sortTasks,
});
export default allreducers;
