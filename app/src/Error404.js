import React from "react";
import { Navigate } from "react-router-dom";

export default function Error404(){
    if(10>5){
        return <Navigate to='/' />
    }
    return(
        <div>
            <h1>wrong pageee</h1>
        </div>
    )
}