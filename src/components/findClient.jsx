import React, { useState, useEffect } from 'react';
import clientItem from './clientItem';

export default function FindClient() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    //setClients(data);
  }

  return (
    <div className='find-client-container'>
      <h1>Find your next Client</h1>
      <ul>
        {clients.map((client) => (
          <clientItem key={client.id} client={client} />
        ))}
      </ul>
    </div>
  );
}
