import React from "react";
import "../App.css";
import {Link} from "react-router-dom";
import "../styles/custom.css";


function Nav(){

 const navStyle = {
   color: "White"
 };

  return(
    <nav>
      <div class= "logo">
        <h3>Lavar Cole</h3>
        </div>
        <ul className= "nav-links">
        <Link style ={navStyle} to = "/">
            <li>Home</li>
          </Link>
          <Link style ={navStyle} to = "/about">
            <li>About</li>
          </Link>
          <Link style ={navStyle} to = "/projects">
            <li>Projects</li>
          </Link>
          <Link style ={navStyle} to = "/contact">
            <li>Contact</li>
          </Link>
          

        </ul>
        <div class= "burger">
          <div class= "line1"></div>
          <div class= "line2"></div>
          <div class= "line3"></div>
        </div>
    </nav>
  );
}


export default Nav;