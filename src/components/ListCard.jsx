import React from 'react';
import { Link } from 'react-router-dom';

export default function ListCard({ list, handleDelete }) {
  const { client, _id } = list;

  const handleDeleteList = () => {
    handleDelete(_id);
  };

  return (
    <div className="card">
      <h3>Client: {client ? `${client.name} ${client.surname} ${client.phone}` : ''}</h3>
      <a
        href={`https://wa.me/${client.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={{ marginLeft: '10px' }}
      >
        WhatsApp
      </a>
      <button onClick={handleDeleteList}>Delete</button>
    </div>
  );
}
