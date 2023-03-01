import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, completeTodo } from "./todoSlice";

function Todo() {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    console.log(todos.length);

    return(
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(text));
                    setText("")
                }}
            >
                Add
            </button>

            {todos.length ? (
                <div>
                    {todos.map((item) => {
                        return(
                            <div key={item.id}>
                                <h1 style={{ color: item.completed ? "red" : "black"}}>
                                    <input
                                        type="checkbox"
                                        onChange={() => {
                                            dispatch(completeTodo(item.id));
                                        }}
                                    />
                                    {item.text}
                                    <button
                                        onClick={() => {
                                            dispatch(removeTodo(item.id));
                                        }}
                                    >
                                        x
                                    </button>
                                </h1>
                            </div>
                        );
                    })}
                </div>
                ): (
                 <h1>No todos</h1>
            )}
        </div>
    );
}

export default Todo;