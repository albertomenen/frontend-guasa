import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 
  const navigate = useNavigate();
  return (
    <div className='navbar-div'>
      {user && <p className='welcome'>Hello {user.username}!</p> }
      <ul className='navbar-menu'>
        <li className='navbar-item'><NavLink to="/">Home</NavLink></li>
        {!isLoggedIn && <li className='navbar-item'><NavLink to="/signup">Sign up</NavLink></li>}
        {!isLoggedIn && <li className='navbar-item'><NavLink to="/login">Login</NavLink></li>}
        {isLoggedIn && <li className='navbar-item'><NavLink to="/private">Private view</NavLink></li>}
        {isLoggedIn && <li className='navbar-item'><button onClick={() => logOutUser()}>Log out</button></li>}
        <li><button onClick={() => navigate(-1)}>Go back</button></li>
      </ul>
    </div>
  )
}
