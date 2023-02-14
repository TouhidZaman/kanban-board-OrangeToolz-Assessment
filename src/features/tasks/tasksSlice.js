import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    inProgress: [],
    completed: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
})

export default tasksSlice.reducer;