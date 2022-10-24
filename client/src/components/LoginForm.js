import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function LoginForm({ closeForm }){
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    });
    const { setUser } = useContext(UserContext);

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
        }).then((r)=>r.json())
            .then((user) => setUser(user))
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