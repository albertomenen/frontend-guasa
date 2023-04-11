import React from 'react';
import { Link } from 'react-router-dom';

export default function ListCard({ list, handleDelete, getClientNameById }) {
  const { client, _id } = list;

  const handleDeleteList = () => {
    handleDelete(_id);
  };

  return (
    <div className="card">
      <h3>Client: {getClientNameById(client)}</h3>
      <button onClick={handleDeleteList}>Delete</button>
    </div>
  );
}
