import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Redux() {
    const counter = useSelector((state) => {
        console.log(state)
        return state.conter
    })
    const logged = useSelector((state) => state.logged)
    console.log(counter);
    const dispatch = useDispatch();
    console.log(logged);
    return (
        <div>
            <h1>This is a React-REDUX example</h1>
            <h2>Count is {counter}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>

            <hr />
            <hr />
            <h1>Here we know are user logged in.</h1>
            {logged === true ? <h1>Hello user</h1> : <h2>Hello stranger</h2>}
            <button onClick={() => dispatch({ type: 'SIGN_IN' })}>
                {logged ? "Logout" : "Login"}
            </button>
        </div>
    )
}

export default Redux;