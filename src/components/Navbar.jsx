import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 
  const navigate = useNavigate();
  console.log(user)
  return (
    <div className='navbar-div'>
      {user && <p className='welcome'>Hello {user.username}!</p> }
      <h1 className="logo"> Guasá 🦖 </h1>
      <ul className='navbar-menu'>
        <li className='navbar-item'><NavLink to="/">Home</NavLink></li>
        {!isLoggedIn && <li className='navbar-item'><NavLink to="/signup">Sign up</NavLink></li>}
        {!isLoggedIn && <li className='navbar-item'><NavLink to="/login">Login</NavLink></li>}
        {isLoggedIn && <li className='navbar-item'><NavLink to="/private">Clients</NavLink></li>}
        {isLoggedIn && <li className='navbar-item'><NavLink to="/list">Lists</NavLink></li>}
        {isLoggedIn && user && <li className='navbar-item'><NavLink to={`/edit/${user._id}`}>Profile</NavLink></li>}
        {isLoggedIn && <li className='navbar-item'><button onClick={() => logOutUser()}>Log out</button></li>}
        <li><button onClick={() => navigate(-1)}>Go back</button></li>
      </ul>
    </div>
  )
}
