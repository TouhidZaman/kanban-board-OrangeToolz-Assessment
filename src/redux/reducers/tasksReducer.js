import { getItemsByKey, setItemsByKey } from "utils/localDB";
import {
  ADD_TASK,
  REMOVE_TASK,
  SET_DRAGGING_STATUS,
  TASK_STATUS_UPDATE,
} from "../actionTypes";

const initialState = {
  taskStatus: ["todo", "in-progress", "done"],
  isDragging: false,
  tasksList: getItemsByKey("tasksList"),
  //Example Task List Items
  // [
  //     {id: 1, title: "My Task 1", status: "done"},
  //     {id: 2, title: "My Task 3", status: "in-progress"},
  //     {id: 3, title: "My Task 2", status: "todo"},
  // ]
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        title: action.payload,
        status: "todo",
      };
      const newTasksList = [...state.tasksList, newTask];
      setItemsByKey("tasksList", newTasksList);
      return {
        ...state,
        tasksList: newTasksList,
      };

    case SET_DRAGGING_STATUS:
      return {
        ...state,
        isDragging: action.payload,
      };

    case TASK_STATUS_UPDATE:
      const { taskId, status, position } = action.payload;
      const updatedTaskList = [...state.tasksList];

      updatedTaskList.find((task) => task.id === taskId).status = status; //updating task status

      //Optional position adjustments
      const taskIds = updatedTaskList.map((task) => task.id);

      //Getting index of the current task
      const currentIndex = taskIds.indexOf(taskId);

      //removing item from current position
      const currentItem = updatedTaskList.splice(currentIndex, 1)[0];

      if (position !== null) {
        // adding item to new position
        updatedTaskList.splice(position, 0, currentItem);
      } else {
        // adding item to the end of the list as position not defined
        updatedTaskList.push(currentItem);
      }

      setItemsByKey("tasksList", updatedTaskList); // updating local storage
      return {
        ...state,
        isDragging: false,
        tasksList: updatedTaskList,
      };

    case REMOVE_TASK:
      const remainingTasks = state.tasksList.filter(
        (task) => task.id !== action.payload
      );
      setItemsByKey("tasksList", remainingTasks);
      return {
        ...state,
        tasksList: remainingTasks,
      };

    default:
      return state;
  }
};
