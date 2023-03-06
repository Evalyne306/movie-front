import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar ">
      <div className="container-fluid ">
        <Link className="navbar" to="/">
          Home
        </Link>
        <Link className="navbar" to="/films" >
          Movies
        </Link>
        <Link className="navbar" to="/login">
          Create-Account
        </Link>
        
    
      </div>
    </nav>
  )
}

export default Navbar