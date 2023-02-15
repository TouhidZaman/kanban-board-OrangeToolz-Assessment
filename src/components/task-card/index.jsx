import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleIsDragging } from "features/tasks/tasksSlice";

import classes from "./task-card.module.css";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", task.id);
    dispatch(toggleIsDragging(true));
  };

  return (
    <div
      className={classes.taskCard}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={() => dispatch(toggleIsDragging(false))}
    >
      <span onClick={() => dispatch(removeTask(task.id))}>x</span>
      {task.title}
    </div>
  );
};

export default TaskCard;
