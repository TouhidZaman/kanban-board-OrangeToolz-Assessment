import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";

import { removeFromTaskList, setDraggingStatus } from "redux/actions/tasksActions";
import classes from "./task-card.module.css";

const TaskCard = forwardRef(({ task, index }, ref) => {
  const dispatch = useDispatch();

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", task.id);
    dispatch(setDraggingStatus(true));
  };

  //Tracking item insert position
  const handleDragEnter = (position) => (ref.current = position);

  //Resetting item insert position
  const handleDragLeave = () => (ref.current = null);

  return (
    <div
      className={classes.taskCard}
      draggable
      onDragEnter={() => handleDragEnter(index)}
      onDragLeave={handleDragLeave}
      onDragStart={handleDragStart}
      onDragEnd={() => dispatch(setDraggingStatus(false))}
    >
      <span onClick={() => dispatch(removeFromTaskList(task.id))}>X</span>
      {task.title}
    </div>
  );
});

export default TaskCard;
