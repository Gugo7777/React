import React from "react";
import { Navigate } from "react-router-dom";

export default function Secret(props) {
    if(props.password !== 'abc') {
        return <Navigate to='/'/>
    }
    return (
        <div>
            <h1>Hello user you can see secret page</h1>
            <h2>(because your password is true)</h2>
        </div>
    );
}