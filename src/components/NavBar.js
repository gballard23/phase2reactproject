import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
    <div className="navbar">
        <ul>
            <li>
                <NavLink 
                to="/"
                exact
                activeStyle={{
                    color: "violet"
                }}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                 to="/doglist"
                 exact
                 activeStyle={{
                     color: "violet"
                 }}
                >
                    Dogs
                </NavLink>
            </li>
            <li>
                <NavLink
                 to="/dogform"
                 exact
                 activeStyle={{
                     color: "violet"
                 }}
                >
                    Add Dog
                </NavLink>
            </li>
        </ul>
    </div>    
    )
}

export default NavBar;