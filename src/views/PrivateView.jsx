import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ClientCard from '../components/ClientCard';
import clientService from '../services/clientService';
import AddClient from '../components/addClient';

export default function PrivateView() {
  const [clients, setClients] = useState([]);
  const [selectedClients, setSelectedClients] = useState([]);


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

  const handleDelete = async (clientId) => {
    try {
      await clientService.deleteClient(clientId);
      setClients(clients.filter(client => client._id !== clientId));
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };
  const navigate = useNavigate();
  const handleAddClientToList = (clientId) => {
    if (!selectedClients.includes(clientId)) {
      setSelectedClients([...selectedClients, clientId]);
    }
  };
  const getClientNameById = (id) => {
    const client = clients.find(client => client._id === id);
    return client ? `${client.name} ${client.surname}` : '';
  }
  const handleAddClient = async (newClientData) => {
    try {
      const newClient = await clientService.createClient(newClientData);
      navigate(`/clients/${newClient._id}`)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <h5>
        Aqui podemos ver la lista de clientes que tenemos y listas personalizadas
      </h5>
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
            <ClientCard client={client} handleDelete={handleDelete} handleAddClientToList={handleAddClientToList} />
          </li>
        ))}
      </ul>
    </div>
  );
}
