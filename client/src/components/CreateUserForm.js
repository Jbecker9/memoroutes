import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CreateUserForm({ closeForm }){
    const [newUserFormData, setNewUserFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    function handleSubmit(event){
        event.preventDefault();
        fetch("/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserFormData)
        }).then((response)=>response.json())
            .then(() => {
                setNewUserFormData({
                    username: "",
                    password: "",
                    password_confirmation: ""
                })
                closeForm()
            })
    }

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setNewUserFormData({
            ...newUserFormData,
            [name]: value
        });
    };


    return(
        <div className="CreateUserForm-div">
            <button className="CreateUserForm-closeButton" onClick={()=>closeForm()} > X </button>
            <form onSubmit={handleSubmit} >
                <input 
                    onChange={handleChange}
                    name="username"
                    value={newUserFormData.username}
                    placeholder="Username..."
                    className="CreateUserForm-input"
                />
                <input
                    onChange={handleChange}
                    value={newUserFormData.password}
                    name="password"
                    placeholder="Password..."
                    type='password'
                    className="CreateUserForm-input"
                />
                <input
                    onChange={handleChange}
                    value={newUserFormData.password_confirmation}
                    name="password_confirmation"
                    placeholder="Password Confirmation..."
                    type='password'
                    className="CreateUserForm-input"
                />
                <button> Create User </button>
            </form>
        </div>
    )
}

export default CreateUserForm