import React from 'react';
import { Link } from 'react-router-dom';


export default function ClientCard({ client, handleDelete, handleAddClient, handleAddClientToList }) {
  const { name, surname, phone, email, description, _id } = client;
  

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
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p> Description {description}</p>
     
    
      <button className="btn">    <Link to={`/client/${client._id}`}>View Details</Link></button>
      <button className="btn"   onClick={handleDeleteClient}>Delete</button>
      <button className="btn" style={{ marginLeft: '10px' }}><Link to={`/edit/${_id}`}>Edit</Link></button>
      <button className="btn" style={{ marginLeft: '10px' }} onClick={handleAdd}>Add</button>
     
    </div>
  );
}
