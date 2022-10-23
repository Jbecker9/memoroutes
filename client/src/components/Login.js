import React from "react";
import { useState } from "react";
import "../styles/Login.css"
import CreateUserForm from "./CreateUserForm";
import LoginForm from "./LoginForm";

function Login(){
    const [createUserClick, setCreateUserClick] = useState(false);

    function closeForm(){
        setCreateUserClick(!createUserClick)
    }

    return(
        <div className="Login-div">
            <div className="Login-loginContainer">
                { createUserClick ? <CreateUserForm closeForm={closeForm} /> : <LoginForm closeForm={closeForm} /> }
            </div>
        </div>
    )
}

export default Login