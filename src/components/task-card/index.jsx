import React from "react";
import { useDispatch } from "react-redux";
import { toggleIsDragging } from "features/tasks/tasksSlice";

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
      {task.title}
    </div>
  );
};

export default TaskCard;
