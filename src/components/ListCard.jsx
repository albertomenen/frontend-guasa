import React from 'react';
import { Link } from 'react-router-dom';

export default function ListCard({ list, handleDelete, getClientNameById }) {
  const { name, _id, client } = list;

  const handleDeleteList = () => {
    handleDelete(_id);
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <ul>
        {client.map((clientId) => (
          <li key={clientId}>{getClientNameById(clientId)}</li>
        ))}
      </ul>
      <button className="btn" onClick={handleDeleteList}>
        Delete
      </button>
      <button className="btn" style={{ marginLeft: '10px' }}>
        <Link to={`/edit/${_id}`}>Edit</Link>
      </button>
    </div>
  );
}
