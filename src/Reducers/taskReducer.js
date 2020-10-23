import {toast} from "react-toastify";

const taskReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_TASK": {
            toast.success("Added a task");
            return state;
        }

        case "ADD_TASK_ERR":{
            toast.error("An Error occured");
            return state;
        }

        case "REMOVE_TASK": {
            toast.warn("A tas was removed...");
            return state;
        }

        case "REMOVE_TASK_ERR": {
            toast.error("A task remove error occured...");
            return state;
        }

        default: return state
    }
}

export default taskReducer;