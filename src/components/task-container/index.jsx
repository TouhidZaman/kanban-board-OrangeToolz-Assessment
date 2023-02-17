import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./task-container.module.css";
import TaskCard from "components/task-card";
import verifyTaskStatusUpdate from "redux/thunks/verifyTaskStatusUpdate";

const TaskContainer = ({ status }) => {
  const { tasksList, isDragging } = useSelector((state) => state.tasks);
  const dragOverItem = useRef(null); // To store current item insert position
  const dispatch = useDispatch();

  // Drag and Drop will not work without this (Preventing default behavior).
  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = +e.dataTransfer.getData("text");
    dispatch(
      verifyTaskStatusUpdate({
        taskId,
        status,
        position: dragOverItem.current,
      })
    );
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`${classes.taskContainer} ${isDragging ? classes.dragging : ""}`}
    >
      <h3 className={classes.status}>{status}</h3>
      {tasksList.map(
        (task, index) =>
          task.status === status && (
            <TaskCard key={task.id} task={task} index={index} ref={dragOverItem} />
          )
      )}
    </div>
  );
};

export default TaskContainer;
