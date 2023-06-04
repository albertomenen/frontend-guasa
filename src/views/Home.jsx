import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'; 
import clientService from '../services/clientService';


export default function Home() {
  const [ setClients] = useState([])

  const getClients = async() => {
    try {
      const response = await clientService.getClients();
      setClients(response)
    } catch (error) {
    }
  }

  useEffect(() => {
    getClients();
  },);

 
  
  return (
    <div className='home-container'  >
      <div className="button-container">
        <button className="home-button"> <NavLink to="/private">Add a Client </NavLink></button>
        <button className="home-button"> <NavLink to="/list">Find a Client </NavLink> </button>
      </div>
      <div className="client-list-container">

      <div className='step1-home'>
        <h2> Step 1: Install Whatsapp Web </h2>
        <button className="download-btn">
            <a href="https://www.whatsapp.com/download/?lang=es" target="_blank" rel="noopener noreferrer">
              Download Whatsapp Web
            </a>
        </button>
      </div>

      <div className='step1-home'>
        <h2> Step 2: Agrega tus contactos</h2>
      </div>

      <div className='step1-home'>
        <h2> Step 3: Hazle click al boton guasa</h2>
      </div>

       
      </div>
    </div>
  )
}

