import {
  ADD_TASK,
  REMOVE_TASK,
  SET_DRAGGING_STATUS,
  TASK_STATUS_UPDATE,
} from "../actionTypes";

export const addToTaskList = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const setDraggingStatus = (isDragging) => {
  return {
    type: SET_DRAGGING_STATUS,
    payload: isDragging,
  };
};

export const updateTaskStatus = (taskUpdateData) => {
  return {
    type: TASK_STATUS_UPDATE,
    payload: taskUpdateData,
  };
};

export const removeFromTaskList = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
};
