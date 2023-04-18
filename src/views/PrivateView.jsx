import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ClientCard from '../components/ClientCard';
import clientService from '../services/clientService';
import AddClient from '../components/addClient';
import listService from '../services/listService';
import {AuthContext} from "../context/AuthContext"

export default function PrivateView() {
  const [clients, setClients] = useState([]);
  const [selectedClients] = useState([]);
  //const [userID, setUserID] = useState('')
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await clientService.getClients();
        setClients(data);
      } catch (error) {
        console.log("error",)
        console.error('Error fetching clients:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // const storedUserId = localStorage.getItem('userId');
  //   // if (storedUserId) {
  //   //   setUserID(storedUserId);
  //   }
  // }, []);

  const handleDelete = async (clientId) => {
    try {
      await clientService.deleteClient(clientId);
      setClients(clients.filter(client => client._id !== clientId));
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };
  const navigate = useNavigate();
  const handleAddClientToList = async (clientID) => {
    
    try {
      const listData = {
        user: user._id,
        client: clientID,
      };

      await listService.addList(listData);
    } catch (error) {
      console.error('Error adding client to list:', error);
    }
  };
  const getClientNameById = (id) => {
    const client = clients.find(client => client._id === id);
    return client ? `${client.name} ${client.surname}` : '';
  }
  const handleAddClient = async (newClientData) => {
    try {
      const newClient = await clientService.createClient(newClientData);
      console.log('New client:', newClient); 
      navigate(`/clients/${newClient._id}`)
    } catch (error) {
      console.error(error)
    }
  };
  

  return (
    <div>
      <AddClient handleAddClient={handleAddClient}/>
      <ul>
      <ul>
      {selectedClients.map((clientId) => (
        <li key={clientId}>{getClientNameById(clientId)}</li>
      ))}
    </ul>

      <h3>All clients:</h3>
        {clients.map((client) => (
          <li key={client._id}>
            <ClientCard client={client} handleDelete={handleDelete} handleAddClientToList={handleAddClientToList} handleAddClient={handleAddClient}  />
          </li>
        ))}
      </ul>
    </div>
  );
}

