import React, { useState, useEffect } from 'react';
import ListCard from '../components/ListCard';
import listService from '../services/listService';
import AddList from '../components/addList';


export default function ListView() {

    const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listService.getLists();
        setLists(data);
      } catch (error) {
        console.log("error",)
        console.error('Error fetching clients:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (listId) => {
    try {
      await listService.deleteClient(listId);
      setLists(lists.filter(list => list._id !== listId));
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };
    
  return (
    <div>
    <h5>
      This view can only be seen if the user is logged in because it's inside
      the IsPrivate component.
    </h5>
    <AddList />
    <ul>
      {lists.map((list) => (
        <li key={list._id}>
          <ListCard list={list} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  </div>
  );
}