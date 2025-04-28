import { NavLink } from "react-router-dom";
import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            
            <div className="description" >
               <a className="contacto"
                  href="https://www.linkedin.com/in/nahuel-eduardo-hermosa-035799277/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img  src="icono-linkedin.png" alt="icono linkedin" className="icono1" /> 
                 My Linkedin{" "}
                </a>
           
           
              
            </div>
           
        </nav>
    );
}

export default Navbar;
