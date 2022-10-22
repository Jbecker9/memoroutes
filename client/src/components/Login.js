import React from "react";
import { useState } from "react";
import "../styles/Login.css"
import LoginForm from "./LoginForm";

function Login(){
    const [createUserClick, setcreateUserClick] = useState(false)

    return(
        <div className="Login-div">
            <div className="Login-loginContainer">
                { createUserClick ? null : <LoginForm /> }
            </div>
        </div>
    )
}

export default Login