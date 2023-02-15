import React from "react";
import classes from "./task-card.module.css";

const TaskCard = ({ task }) => {
  return <div className={classes.taskCard}>{task.title}</div>;
};

export default TaskCard;
