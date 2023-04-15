import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import clientService from '../services/clientService';

export default function EditClient() {
  const { clientId } = useParams();
  const [client, setClient] = useState({});
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const getClient = async () => {
    try {
      const response = await clientService.getClient(clientId);
      setClient(response);
      setError(false);
      console.log(response);
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  useEffect(() => {
    getClient();
    // eslint-disable-next-line
  }, [clientId])

  const handleChange = (e) => {
    setClient(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await clientService.editClient(clientId, client);
      navigate(`/client/${clientId}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p>Something went wrong. Couldn't find your client</p>}
        <button type="submit" className="btn">Save changes</button>
      </form>
    </div>
  )
}
