import { SORT_TASKS } from "../actions/index";

const sortTasks = (state = "newest", action) => {
    switch (action.type) {
        case SORT_TASKS:
            return state = action.payLoad;
        default:
            return state;
    }
};
export default sortTasks;