// ClientItem.jsx
import React from 'react';

export default function ClientItem({ client }) {
  return (
    <li>
      {/* Renderiza la información del cliente como desees */}
      <h2>{client.name}</h2>
      <p>{client.email}</p>
      {/* ... */}
    </li>
  );
}
