import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="" style={{width:"50px",height:"50px"}} />
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Profile">Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Get">Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li> 
      <li className="nav-item">
        <Link className="nav-link" to="/Singup">Registration</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Logout">Logout</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Cart">Cart</Link>
      </li>
    </ul>
  
  </div>
</nav>
           
        </>
    )
}

export default Navbar;
