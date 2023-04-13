import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';

export default function ListCard({ list, handleDelete }) {
  const { client, _id, } = list;
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };


  const handleDeleteList = () => {
    handleDelete(_id);
  };

  return (
    <div className="card">
      <h3>Client: {client ? `${client.name} ${client.surname}` : ''}</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        className="date-picker"
      />
      <a
        href={`https://wa.me/${client && client.phone ? client.phone : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={{ marginLeft: '10px' }}
      >
        Guasa
      </a>
      <button onClick={handleDeleteList}>Delete</button>
    </div>
  );
}
