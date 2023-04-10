import React from 'react';

export default function ListCard({ list }) {
  return (
    <li>
      {/* Renderiza la información del cliente como desees */}
      <p>{list.name}</p>
      <h2>{list._id}</h2>
      {/* ... */}
    </li>
  );
}
