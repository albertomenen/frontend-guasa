import React, { useState } from 'react';

export default function AddList({handleAddClient}) {
  const [listData, setListData] = useState({
    name: '',
    id: '',
    client: ""
  });



  const handleChange = (event) => {
    setListData({ ...listData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddClient(listData);
  };

  return (
    <div className="add-client-container">
      <h1>Add List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          value={listData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Client:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={listData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar Lista</button>
      </form>
    </div>
  );
}
