import React, { useState, useEffect, useContext } from 'react';
import ListCard from '../components/ListCard';
import listService from '../services/listService';
import clientService from '../services/clientService';
import AddList from '../components/addList';
import { AuthContext } from '../context/AuthContext';


export default function ListView() {

    const [lists, setLists] = useState([]);
    const [clients, setClients] = useState([]);
    const {user} = useContext(AuthContext)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listService.getLists();
        const clientData = await clientService.getClients();
        setLists(data);
        setClients(clientData);
      } catch (error) {
        console.log("error",)
      }
    };

    fetchData();
  }, []);

  const handleAddList = async (newListData) => {
    try {
      const newList = await listService.createList(newListData);
      setLists([...lists, newList]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (listId) => {
    try {
      await listService.deleteList(listId);
      setLists(lists.filter(list => list._id !== listId));
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };
  const getClientNameById = (id) => {
    const client = clients.find((client) => client._id === id);
    return client ? `${client.name} ${client.surname}` : '';
  };
    
  return (
    <div>
    <ul>
      {lists.map((list) => (
        <li key={list._id}>
          <ListCard list={list} handleDelete={handleDelete} getClientNameById={getClientNameById} />
        </li>
      ))}
    </ul>
  </div>
  );
}