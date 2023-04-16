import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clientService from '../services/clientService';

export default function ClientDetails() {
  const { clientId } = useParams();
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log(clientId);

  const getClient = async () => {
    try {
      console.log('Fetching client data...'); // Nuevo mensaje de depuración
      const response = await clientService.getClient(clientId);
      console.log('Response received:', response); // Nuevo mensaje de depuración
      setLoading(false);
      setClientData(response);
      setError(false);
      console.log(response);
    } catch (error) {
      console.error('Error fetching client data:', error); // Nuevo mensaje de depuración
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getClient();
  }, [clientId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && clientData && (
        <div className="client-details-container">
          <h1>Client Details</h1>
          <p>Name: {clientData.name}</p>
          <p>Surname: {clientData.surname}</p>
          <p>Phone: {clientData.phone}</p>
          <p>Email: {clientData.email}</p>
          <p>Description: {clientData.description}</p>
          <p>Bill: {clientData.bill}</p>
        </div>
      )}
      {error && <p>Something went wrong. Couldn't find your client.</p>}
    </div>
  );
}
