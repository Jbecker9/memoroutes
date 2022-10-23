import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CreateUserForm(){
    const [newUserFormData, setNewUserFormData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })
    const dispatch = useDispatch();

    function handleChange(event){
        const key = event.target.name
        const value = event.target.value

        setNewUserFormData({
            ...newUserFormData,
            [key]: value
        });
    };

    function handleSubmit(event){
        event.preventDefault();
        dispatch(fetchUser());
    }

    return(
        <div className="CreateUserForm-div">
            <form onSubmit={handleSubmit} >
                <input 
                    onChange={handleChange}
                    placeholder="Username..."
                    className="CreateUserForm-input"
                />
                <input
                    onChange={handleChange}
                    placeholder="Password..."
                    type='password'
                    className="CreateUserForm-input"
                />
                <input 
                    onChange={handleChange}
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