import React from 'react';
import { Link } from 'react-router-dom';

export default function ClientCard({ client, handleDelete, handleAddClient, handleAddClientToList }) {
  const { name, surname, phone, email, bill, _id } = client;

  const handleDeleteClient = () => {
    handleDelete(_id);
  };

  const handleAdd = () => {
    handleAddClientToList(_id);
  };

  return (
    <div className="card">
      <h3>{name} {surname}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <ul>
        <li>Invoice: {bill}</li>
        <button onClick={() => handleAddClientToList(client._id)}>+</button>
        
      </ul>
      <button className="btn"><Link to={`/clients/${_id}`}>See more</Link></button>
      <button className="btn" style={{ marginLeft: '10px' }} onClick={handleDeleteClient}>Delete</button>
      <button className="btn" style={{ marginLeft: '10px' }}><Link to={`/edit/${_id}`}>Edit</Link></button>
      <button className="btn" style={{ marginLeft: '10px' }} onClick={handleAdd}>Add</button>
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={{ marginLeft: '10px' }}
      >
        WhatsApp
      </a>
    </div>
  );
}
