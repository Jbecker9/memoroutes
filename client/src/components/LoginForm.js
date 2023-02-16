import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserData } from "../reducers/userSlice";

function LoginForm({ closeForm }){
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    });
    const [loginError, setLoginError] = useState(null)
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
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginFormData)
        }).then((response)=>response.json())
            .then(userData => {
                if (userData.error){
                    setLoginError(userData)
                } else {
                    dispatch(updateUserData(userData))
                }
            })
    };
    

    return(
        <div className="Login-Formdiv">
            <h1> User Login </h1>
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
                { loginError ? <h3 className="Login-loginError"> {loginError.error} </h3> : null }
                <button className="Login-submitButton"> Login </button>
            </form>
            <button className="Login-signUpButton" onClick={()=>closeForm()}> Create a New User </button>
        </div>
    );
};

export default LoginForm