import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../reducers/userSlice";

function CreateUserForm({ closeForm }){
    const dispatch = useDispatch();
    const [newUserFormData, setNewUserFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    function handleSubmit(event){
        event.preventDefault();
        dispatch(createUser(newUserFormData));
        closeForm();
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