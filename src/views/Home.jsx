import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'; 
import clientService from '../services/clientService';

export default function Home() {
  const [clients, setClients] = useState([])

  const getClients = async() => {
    try {
      const response = await clientService.getClients();
      console.log(response);
      setClients(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getClients();
  },[]);

 


  // const initialState = {
  //   name: '',
  //   surname: '',
  //   phone: '',
  //   email: "",
  //   bill: 0
  // }

  
// const handleSubmit = (e) => {
//   e.preventDefault();
//   setNewCourse(initialState);
// }
  
  return (
    <div className='home-container'>
      <h1>Guasá 🦖</h1>
      <p> Agrega a clientes de todo tipo pudiendo acceder facilmente a todos ellos</p>
      <div className="button-container">
        <button className="home-button"> <NavLink to="/addclient">Add a Client </NavLink></button>
        <button className="home-button"> <NavLink to="/ClientCard">Find a Client </NavLink> </button>
      </div>
      <div className="client-list">
        <h2>List of Clients:</h2>
        <ul>
          {clients.map(client => (
            <li key={client._id}>
              {client.name} {client.surname} - {client.phone} <button> Add</button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

