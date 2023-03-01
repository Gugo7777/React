import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()
    function submit(e) {
        e.preventDefault()
        if (login === '123' && password === '123') {
            navigate('/secret')
        } else {
           navigate('/')
        }
    }
    return (
        <form onSubmit={submit}>
            <input type='text' onChange={e => setLogin(e.target.value)}></input> <br />
            <input type='password' onChange={e => setPassword(e.target.value)}></input> <br />
            <button type='submit'>Login</button>
        </form>

    )
}