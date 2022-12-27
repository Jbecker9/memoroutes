import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../reducers/userSlice";

function LoginForm({ closeForm }){
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
    };
    

    return(
        <div className="LoginForm-div">
            <form onSubmit={handleSubmit} >
                <input 
                    onChange={handleChange}
                    value={loginFormData.username}
                    name="username"
                    placeholder="Username..."
                    className="LoginForm-input"
                />
                <input 
                    onChange={handleChange}
                    value={loginFormData.password}
                    name="password"
                    placeholder="Password..."
                    type='password'
                    className="LoginForm-input"
                />
                <button> Login </button>
            </form>
            <button onClick={()=>closeForm()}> Create a New User </button>
        </div>
    );
};

export default LoginForm