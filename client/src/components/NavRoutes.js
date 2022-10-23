import React from "react";

function NavRoutes(){

    function logout(event){
        event.preventDefault()
        fetch("/logout",{
            method: "DELETE"
        })
    }

    return(
        <div className="NavRoutes-div">
            Hello
            <button onClick={logout}> Logout </button>
        </div>
    )
}

export default NavRoutes