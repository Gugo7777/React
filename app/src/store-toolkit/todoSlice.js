import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [
            {
                id: 1,
                text: "Learn React-Redux-Toolkit",
                completed: false,
            },
            {
                id: 2, 
                text: "Finish React Course",
                completed: false,
            },
        ],
    },
    reducers: {
        addTodo: (state,action) => {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        completeTodo: (state, action) => {
            let x = state.todos.find((item) => item.id === action.payload);
            x.completed = !x.completed;
        },
    },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;