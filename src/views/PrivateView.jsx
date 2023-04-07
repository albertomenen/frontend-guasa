import React, { useState, useEffect } from 'react';
import clientService from '../services/clientService';

export default function PrivateView() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await clientService.getClients();
        CSSConditionRule.log("clients data", data)
        setClients(data);
      } catch (error) {
        console.log("error", error)
        console.error('Error fetching clients:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h5>
        This view can only be seen if the user is logged in because it's inside
        the IsPrivate component.
      </h5>
      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            {client.name} {client.surname}
          </li>
        ))}
      </ul>
    </div>
  );
}
