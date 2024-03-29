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
            <h1 className="Login-h1"> Memoroutes </h1>
            <div className="Login-loginContainer">
                { createUserClick ? <CreateUserForm setCreationSuccessMessage={setCreationSuccessMessage} closeForm={closeForm} /> : <LoginForm creationSuccessMessage={creationSuccessMessage} setCreationSuccessMessage={setCreationSuccessMessage} closeForm={closeForm} /> }
            </div>
        </div>
    )
}

export default Login