import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import TaskContainer from "components/task-container";
import classes from "./kanban-board.module.css";
import prepareTask from "redux/thunks/prepareTask";

const KanbanBoard = () => {
  const { taskStatus } = useSelector((state) => state.tasks);
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleTaskAdd = () => {
    if (taskTitle) {
      dispatch(prepareTask(taskTitle));
      setTaskTitle("");
    } else {
      toast.error("Please input task name first", { id: "name" });
    }
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
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
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
