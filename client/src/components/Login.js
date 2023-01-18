import React from "react";
import { useState } from "react";
import "../styles/Login.css"
import CreateUserForm from "./CreateUserForm";
import LoginForm from "./LoginForm";

function Login(){
    const [createUserClick, setCreateUserClick] = useState(false);
    const [creationSuccessMessage, setCreationSuccessMessage] = useState(null)

    function closeForm(){
        setCreateUserClick(!createUserClick)
    }

    return(
        <div className="Login-div">
            <div className="Login-loginContainer">
            <h1> Memoroutes </h1>
                { createUserClick ? <CreateUserForm setCreationSuccessMessage={setCreationSuccessMessage} closeForm={closeForm} /> : <LoginForm creationSuccessMessage={creationSuccessMessage} setCreationSuccessMessage={setCreationSuccessMessage} closeForm={closeForm} /> }
            </div>
        </div>
    )
}

export default Login