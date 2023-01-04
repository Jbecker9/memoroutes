import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../reducers/userSlice";

function LoginForm({ closeForm, creationSuccessMessage, setCreationSuccessMessage }){
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    });
    const dispatch = useDispatch();

    function handleChange(event){
        const key = event.target.name
        const value = event.target.value

        setLoginFormData({
            ...loginFormData,
            [key]: value
        });
    };

    function handleSubmit(event){
        event.preventDefault();
        dispatch(logInUser(loginFormData));
        setCreationSuccessMessage(false)
    };
    

    return(
        <div className="Login-Formdiv">
            <h1> Log In </h1>
            { creationSuccessMessage ? <h2> User Created ! </h2> : null }
            <form onSubmit={handleSubmit} >
                <input 
                    onChange={handleChange}
                    value={loginFormData.username}
                    name="username"
                    placeholder="Username..."
                    className="Login-formInput"
                />
                <input 
                    onChange={handleChange}
                    value={loginFormData.password}
                    name="password"
                    placeholder="Password..."
                    type='password'
                    className="Login-formInput"
                />
                <button className="Login-submitButton"> Login </button>
            </form>
            <button className="Login-signUpButton" onClick={()=>closeForm()}> Create a New User </button>
        </div>
    );
};

export default LoginForm