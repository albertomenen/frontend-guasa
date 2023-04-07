import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import AddClient from '../components/addClient';
import clientService from '../services/clientService';
import axios from 'axios';

export default function Home() {


  const getClients = async() => {
    try {
      const response = await axios.get("http://localhost:8080/client")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getClients()
  }, [])

  const navigate = useNavigate();
  const handleAddClient = async (newClientData) => {
    // Aquí debes implementar la lógica para agregar el cliente a tu base de datos.
    console.log(newClientData);
    try {
      const newClient = await clientService.createClient(newClientData);
      navigate(`/clients/${newClient._id}`)
    } catch (error) {
      console.error(error)
    }
    
  };

  
  return (
    <div className='home-container'>
      <h1>Guasá 🦖</h1>
      <p> Agrega a clientes de todo tipo pudiendo acceder facilmente a todos ellos</p>
      <div className="button-container">
        <AddClient handleAddClient={handleAddClient}/>
        <button className="home-button"> <NavLink to="/addclient">Add a Client </NavLink></button>
        <button className="home-button"> <NavLink to="/ClientCard">Find a Client </NavLink> </button>
      </div>
    </div>
  )
}

