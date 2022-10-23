import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../reducers/userSlice";

function LoginForm({ setCreateUserClick }){
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
        dispatch(fetchUser());
    }

    return(
        <div className="LoginForm-div">
            <form onSubmit={handleSubmit} >
                <input 
                    onChange={handleChange}
                    placeholder="Username..."
                    className="LoginForm-input"
                />
                <input 
                    onChange={handleChange}
                    placeholder="Password..."
                    type='password'
                    className="LoginForm-input"
                />
                <button> Login </button>
            </form>
            <button onClick={setCreateUserClick(true)}> Create a New User </button>
        </div>
    );
};

export default LoginForm