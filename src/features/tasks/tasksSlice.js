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
            const {taskId, status, position} = payload;
            state.tasksList.find(task => task.id ===taskId).status = status; //updating task status

            //optional position adjustments
            const taskIds = state.tasksList.map(task => task.id);
            const currentIndex = taskIds.indexOf(taskId);
            const currentItem = state.tasksList.splice(currentIndex, 1)[0]; //removing item from current position
            if(position !== null) {
                state.tasksList.splice(position, 0, currentItem) // adding item to new position
            } else {
                state.tasksList.push(currentItem) // adding item to the end of the list as position not defined
            }

            state.isDragging=false;
            setItemsByKey("tasksList", state.tasksList) // updating local storage
        },
        removeTask: (state, {payload} ) => {
            state.tasksList = state.tasksList.filter(task => task.id !== payload)
            setItemsByKey("tasksList", state.tasksList) // updating local storage
        },
    }
})

export const { addTask, toggleIsDragging, updateTaskStatus, removeTask } = tasksSlice.actions

export default tasksSlice.reducer;