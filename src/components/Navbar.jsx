import { NavLink } from "react-router-dom";
import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
        </nav>
    );
}

export default Navbar;
