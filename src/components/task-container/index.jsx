import React from "react";
import { useSelector } from "react-redux";

import classes from "./task-container.module.css";
import TaskCard from "components/task-card";

const TaskContainer = ({ status }) => {
  const { tasksList } = useSelector((state) => state.tasks);

  return (
    <div className={classes.taskContainer}>
      <h3 className={classes.status}>{status}</h3>
      {tasksList.map(
        (task) => task.status === status && <TaskCard key={task.id} task={task} />
      )}
    </div>
  );
};

export default TaskContainer;
