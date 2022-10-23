import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Login.css"
import CreateUserForm from "./CreateUserForm";
import LoginForm from "./LoginForm";

function Login(){
    const [createUserClick, setCreateUserClick] = useState(false);
    const dispatch = useDispatch();
    
    function handleChange(state, stateSetter, event){
        const key = event.target.name
        const value = event.target.value

        stateSetter({
            ...state,
            [key]: value
        });
    };

    function handleSubmit(fetch){
        dispatch(fetch);
    }


    return(
        <div className="Login-div">
            <div className="Login-loginContainer">
                { createUserClick ? <CreateUserForm handleChange={handleChange} handleSubmit={handleSubmit} /> : <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} setCreateUserClick={setCreateUserClick} /> }
            </div>
        </div>
    )
}

export default Login