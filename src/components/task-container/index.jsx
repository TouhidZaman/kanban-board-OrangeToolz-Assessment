import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./task-container.module.css";
import TaskCard from "components/task-card";
import { updateTaskStatus } from "features/tasks/tasksSlice";

const TaskContainer = ({ status }) => {
  const { tasksList, isDragging } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDragOver = (e) => {
    e.preventDefault(); // Need to stop default behavior to enable drop functionalities
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = +e.dataTransfer.getData("text");
    dispatch(updateTaskStatus({ taskId, status }));
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`${classes.taskContainer} ${isDragging ? classes.dragging : ""}`}
    >
      <h3 className={classes.status}>{status}</h3>
      {tasksList.map(
        (task) => task.status === status && <TaskCard key={task.id} task={task} />
      )}
    </div>
  );
};

export default TaskContainer;
