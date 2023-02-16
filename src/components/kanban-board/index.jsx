import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TaskContainer from "components/task-container";
import { addToTaskList } from "redux/actions/tasksActions";
import classes from "./kanban-board.module.css";

const KanbanBoard = () => {
  const { taskStatus } = useSelector((state) => state.tasks);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleTaskAdd = () => {
    dispatch(addToTaskList(task));
    setTask("");
  };

  const handleEnterKeyDown = (key) => {
    if (key === "Enter") {
      handleTaskAdd();
    }
  };

  return (
    <>
      <div className={classes.addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => handleEnterKeyDown(e.key)}
          placeholder="Write your task..."
        />
        <button onClick={handleTaskAdd}>Add</button>
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
