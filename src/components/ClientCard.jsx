import React from 'react';
import { Link } from 'react-router-dom';

export default function ClientCard({ client, handleDelete }) {
  const { name, surname, phone, email, bill, _id } = client;

  const handleDeleteClient = () => {
    handleDelete(_id);
  };


  return (
    <div className="card">
      <h3>{name} {surname}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <ul>
        <li>Invoice: {bill}</li>
      </ul>
      <button className="btn"><Link to={`/clients/${_id}`}>See more</Link></button>
      <button className="btn" style={{ marginLeft: '10px' }} onClick={handleDeleteClient}>Delete</button>
      <button className="btn" style={{ marginLeft: '10px' }}><Link to={`/edit/${_id}`}>Edit</Link></button>
    </div>
  );
}
