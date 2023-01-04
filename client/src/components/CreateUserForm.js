import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../reducers/userSlice";
import "../styles/CreateUserForm.css"

function CreateUserForm({ closeForm, setCreationSuccessMessage }){
    const dispatch = useDispatch();
    const [newUserFormData, setNewUserFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })
    const [creationError, setCreationError] = useState(null)

    function handleSubmit(event){
        event.preventDefault();
        console.log(newUserFormData)
        fetch('/signup', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newUserFormData)
        }).then((response) => response.json())
            .then((userData) => { 
                if (userData.errors){
                    setCreationError(userData)
                } else {
                    console.log(userData)
                }
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

    console.log(creationError)

    return(
        <div className="CreateUserForm-div">
            <h1> Sign Up </h1>
            { creationError ? creationError.errors.map((error) => <h3 key={error} className="CreateUserForm-errors" >{ error }!</h3>) : null }
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
                <button className="CreateUserForm-submitButton"> Create User </button>
            </form>
            <button className="CreateUserForm-returnToLoginButton" onClick={()=>closeForm()} > Return to Log In </button>
        </div>
    )
}

export default CreateUserForm