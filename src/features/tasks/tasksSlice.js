import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskStatus : ["todo", "in-progress", "done"],
    tasksList: [
        {id: 1, title: "My Task 1", status: "done"},
        {id: 2, title: "My Task 3", status: "in-progress"},
        {id: 3, title: "My Task 2", status: "todo"},
        {id: 4, title: "My Task 4", status: "todo"},
    ]
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
})


export default tasksSlice.reducer;