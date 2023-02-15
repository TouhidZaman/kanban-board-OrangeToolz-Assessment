import React from "react";
import { useSelector } from "react-redux";

import TaskContainer from "components/task-container";
import classes from "./kanban-board.module.css";

const KanbanBoard = () => {
  const { taskStatus } = useSelector((state) => state.tasks);

  return (
    <>
      <div className={classes.addTask}>
        <input type="text" placeholder="Write your task..." />
        <button>Add</button>
      </div>
      <div className={classes.containers}>
        {taskStatus.map((status) => (
          <TaskContainer key={status} status={status} />
        ))}
      </div>
    </>
  );
};

export default KanbanBoard;
