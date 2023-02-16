import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";

//need to pass reducers as a object in combineReducers
const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
