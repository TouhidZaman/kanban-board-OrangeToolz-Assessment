import { createSlice } from "@reduxjs/toolkit";
import { getItemsByKey, setItemsByKey } from "utils/localDB";

const initialState = {
    taskStatus : ["todo", "in-progress", "done"],
    tasksList: getItemsByKey("tasksList"),
    //Example Task List Items
    // [
    //     {id: 1, title: "My Task 1", status: "done"},
    //     {id: 2, title: "My Task 3", status: "in-progress"},
    //     {id: 3, title: "My Task 2", status: "todo"},
    // ]
    isDragging: false
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, {payload} ) => {
            const newTask = {
                id: Date.now(),
                title: payload,
                status: "todo"
            }
            state.tasksList.push(newTask); // adding new task to the list
            setItemsByKey("tasksList", state.tasksList) // updating local storage
        },
        toggleIsDragging: (state, {payload} ) => {
            state.isDragging=payload
        },
        updateTaskStatus: (state, {payload}) => {
            const {taskId, status} = payload
            state.tasksList.find(task => task.id ===taskId).status = status;
            state.isDragging=false;
            setItemsByKey("tasksList", state.tasksList) // updating local storage
        }
    }
})

export const { addTask, toggleIsDragging, updateTaskStatus } = tasksSlice.actions

export default tasksSlice.reducer;