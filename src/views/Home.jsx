import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className='home-container'>
      <h1>Guasá 🦖</h1>
      <p> Agrega a clientes de todo tipo pudiendo acceder facilmente a todos ellos</p>
      <div className="button-container">
        <button className="home-button"> <NavLink to="/addclient">Add a Client </NavLink></button>
        <button className="home-button"> <NavLink to="/findClient">Find a Client </NavLink> </button>
      </div>
    </div>
  )
}
