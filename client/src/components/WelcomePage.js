import React from "react";

function WelcomePage(){

    return(
    <div className="WelcomePage-div">
        <h1> Welcome to Memoroutes! </h1>
        <h3> "Memories are a Journey, not a Destination!" </h3>
        <p> Memoroutes is a website designed to expand the traditional navigation service definition of point A to point B</p>
        <p> We give the user an option to record all Pit Stops in-between point A and point B of their road trips! </p>
        <h3> Map </h3>
         <p> This is where you will be able to see your road trip navigation! </p>
         <p> To select an existing road trip from your own trip collection, select a desired trip from the dropdown table! </p>
         <p> If you would like to create a new road trip, simply click the create a new road trip button!</p>
         <p> Once a road trip is selected or created, a table of information will appear giving you the ability to add a destination and add, update, or delete pit stops!</p>
        <h3> Discover Road Trips </h3>
         <p> This is where you will be able to see all of the road trips! </p>
         <p> Information on the road trips are able to be filtered and displayed, such as: the username, the road trip name, the trip distance, and users are able to see the pit stops accompanied with the road trips! </p>
         <p> You can also like a road trip adding to its popularity! </p>
        <h3> Search by State </h3>
         <p> This is where pit stops and destinations will be able to be viewed sorted by their respective cities and states </p>
         <p> Click on a desired state and all available cities will appear with information regarding how many pit stops and destinations each city currently has </p>
         <p> To see the list of pit stops or destinations for a city, click the button labeled "show [destinations/pit stops]" </p>
        <h3> Profile </h3>
         <p> This is where you will be able to see the information for all of your road trips, simply click the button labled "show road trips!"</p>
         <p> If you would like to create a road trip, click the button labled "Create Trip!" and you will be navigated to the map page's new road trip form </p>
         <p> The road trips displayed are all able to be deleted through this page as well! </p>
         <p> To see the road trips respective pit stops, click the button labled "show pit stops!"</p>
         <p> Once the road trips are displayed, you will be able to create or update a pit stop, which will navigate you to the map page on their cooresponding forms</p>
         <p> You are also able to delete pit stops!</p>
         <p> If you would like to continue a trip, find your desired trip, and click the button labled "Set your Active Trip and start your Journey!" and you will be redirected to the map page for you to conitinue your journey! </p>
    </div>
    )
}

export default WelcomePage