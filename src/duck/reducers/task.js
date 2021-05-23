import {
	ADD_TASK,
	REMOVE_TASK,
	EDIT_TASK_DESCRYPTION,
	CHANGE_PRIORITY,
	EDIT_TASK_TITLE,
	SHOW_TASK_INPUT,
	MODIFY_END_DATE,
} from "../actions/index";
import { tasks, quotes } from "./state";

const taskReducer = (state = tasks, action) => {
	let findTaskIdInState = (element) => {
		return element.id == action.payLoad.target.id;
	};
	switch (action.type) {
		case ADD_TASK:
			// break;
			let oldTaskList = [...state];
			oldTaskList.unshift(action.payLoad);
			console.log(action.payLoad);
			console.log(oldTaskList);

			return oldTaskList;
		case REMOVE_TASK:
			let fullTaskList = [...state];
			let removedTaskId = fullTaskList.findIndex(findTaskIdInState);
			fullTaskList.splice(removedTaskId, 1);
			return fullTaskList;

		case SHOW_TASK_INPUT:
			let taskShwoInput = [...state];
			let modTaskShowInput = taskShwoInput.findIndex(findTaskIdInState);
			taskShwoInput[modTaskShowInput].editTaskTitle =
				!taskShwoInput[modTaskShowInput].editTaskTitle;
			return taskShwoInput;

		case MODIFY_END_DATE:
			let taskListEnddate = [...state];

			const itemIndex = taskListEnddate.findIndex((task) => {
				return task.id === action.payLoad.id;
			});
			const modTaskListEnddate = (taskListEnddate[itemIndex].endDate =
				action.payLoad.slecetedDate);
			console.log(taskListEnddate);
			console.log(typeof action.payLoad.id);
			console.log(action.payLoad.slecetedDate);
			console.log(itemIndex);

			return taskListEnddate;

		case EDIT_TASK_TITLE:
			let taskListTitleMod = [...state];
			let modTaskTitleId = taskListTitleMod.findIndex(findTaskIdInState);
			taskListTitleMod[modTaskTitleId].taskTitle = action.payLoad.target.value;
			// taskListTitleMod[modTaskTitleId].editTaskTitle = !taskListTitleMod[modTaskTitleId]
			// 	.editTaskTitle;
			return taskListTitleMod;

		case EDIT_TASK_DESCRYPTION:
			let taskList = [...state];
			taskList[taskList.findIndex(findTaskIdInState)].taskDescription =
				action.payLoad.target.value;

			return taskList;

		case CHANGE_PRIORITY:
			let newTaskList = [...state];
			let taskIdInState = newTaskList.findIndex(findTaskIdInState);

			newTaskList[taskIdInState].priority = !newTaskList[taskIdInState].priority;
			return newTaskList;

		default:
			return state;
	}
};
export default taskReducer;
