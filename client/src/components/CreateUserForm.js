import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../reducers/userSlice";

function CreateUserForm({ closeForm }){
    const [newUserFormData, setNewUserFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        console.log(newUserFormData);
        dispatch(createNewUser(newUserFormData));
        setNewUserFormData({
            username: "",
            password: "",
            password_confirmation: ""
        })
    }

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setNewUserFormData({
            ...newUserFormData,
            [name]: value
        });

        closeForm()
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