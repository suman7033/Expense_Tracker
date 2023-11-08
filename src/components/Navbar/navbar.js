import React from 'react'
import {Link} from "react-router-dom";
import './navbar.css'

const navbar = () => {
  const logoutHandler=()=>{
    localStorage.removeItem("idToken");
    localStorage.removeItem("tokenId");
    localStorage.removeItem("email");
}
  return (
     <div>
        <ul className='nav h4 border-4 p-2 border-primary position-relative m-8 fs-2 bg-dark border-bottom border-bottom border-body' data-bs-theme="dark">
          <li>
          <Link className='nav-link text-light bg-dark' aria-current="page" to="/home">Home</Link>
          </li>&nbsp;&nbsp;&nbsp;&nbsp;
          <li><Link className='nav-link text-light bg-dark' aria-current="page" to="/about">About</Link>
          </li>&nbsp;&nbsp;&nbsp;
          <li><Link className="nav-link text-light bg-dark" aria-current="page" to="/products">Products</Link>
          </li>&nbsp;&nbsp;&nbsp;
          <li><Link className="nav-link text-light bg-dark" aria-current="page" to="/login">Login</Link>
          </li>&nbsp;&nbsp;&nbsp;
          <li><Link className="nav-link text-light bg-dark" aria-current="page" to="/profile">Profile</Link>
          </li>&nbsp;&nbsp;&nbsp;
          <button className='logoutBtn'onClick={logoutHandler}>Logout</button>
        </ul>
     </div>
  )
}

export default navbar
