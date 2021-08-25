export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK_TITLE = "EDIT_TASK_TITLE";
export const EDIT_TASK_DESCRYPTION = "EDIT_TASK_DESCRYPTION";
export const CHANGE_PRIORITY = "CHANGE_PRIORITY";
export const SHOW_TASK_INPUT = "SHOW_TASK_INPUT";
export const MODIFY_END_DATE = "MODIFY_END_DATE";
export const TASK_DONE = "TASK_DONE";
export const Add_TO_MY_Day = "Add_TO_MY_Day";
export const SORT_TASKS = "SORT_TASKS";


export const addTask = (newTask) => {
	return {
		type: ADD_TASK,
		payLoad: newTask,
	};
};

export const removeTask = (object) => {
	return {
		type: REMOVE_TASK,
		payLoad: object,
	};
};

export const showTaskInput = (task) => {
	return {
		type: SHOW_TASK_INPUT,
		payLoad: task,
	};
};

export const modifyEndDate = (slecetedDate, id) => {
	return {
		type: MODIFY_END_DATE,
		payLoad: {
			slecetedDate,
			id,
		},
	};
};

export const editTaskTitle = (inputObject) => {
	return {
		type: EDIT_TASK_TITLE,
		payLoad: inputObject,
	};
};

export const editTaskDescryption = (inputvalue) => {
	return {
		type: EDIT_TASK_DESCRYPTION,
		payLoad: inputvalue,
	};
};

export const changePriority = (itemId) => {
	return {
		type: CHANGE_PRIORITY,
		payLoad: itemId,
	};
};

export const taskDone = (itemId) => {
	return {
		type: TASK_DONE,
		payLoad: itemId
	}
}

export const addToMyDay = (itemId) => {
	console.log(itemId)
	return {
		type: Add_TO_MY_Day,
		payLoad: itemId
	}

}

export const sortTasks = (sortingType) => {
	return {
		type: SORT_TASKS,
		payLoad: sortingType
	}
}
