import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleIsDragging } from "features/tasks/tasksSlice";

import classes from "./task-card.module.css";

const TaskCard = forwardRef(({ task, index }, ref) => {
  const dispatch = useDispatch();

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", task.id);
    dispatch(toggleIsDragging(true));
  };

  //Tracking item insert position
  const handleDragEnter = (position) => {
    ref.current = position;
    console.log(ref.current);
  };

  //Resetting item insert position
  const handleDragLeave = () => (ref.current = null);

  return (
    <div
      className={classes.taskCard}
      draggable
      onDragEnter={() => handleDragEnter(index)}
      onDragLeave={handleDragLeave}
      onDragStart={handleDragStart}
      onDragEnd={() => dispatch(toggleIsDragging(false))}
    >
      <span onClick={() => dispatch(removeTask(task.id))}>X</span>
      {task.title}
    </div>
  );
});

export default TaskCard;
