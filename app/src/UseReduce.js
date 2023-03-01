import React, { useReducer } from "react";

const reducer = (state,action) => {
    switch (action.type) {
        case "show":
            return{ ...state, show: !state.show}
        case "plus":
            return{ ...state,count: state.count +1}
        case "minus":
            return{ ...state,count: state.count -1} 
        default:
            return state;
    }
};

function useReduce(){
    const[state, dispatch]= useReducer(reducer, {
        count: 0,
        show: false,
    });

    return(
    <>
    <button onClick={()=>{
            dispatch({type: 'show'})
        }}>Show-Hide</button>
    {
        state.show === false
        &&
        <div>
        
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type: 'plus'})
        }}>Plus</button>
        <button onClick={()=>{
            dispatch({type: 'minus'})
        }}>Minus</button>
    </div>
    }
    </>
)}

export default useReduce