import axios from "axios"

class ClientService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}/client`,
    });
    this.api.interceptors.request.use(config => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
          config.headers = { Authorization: `Bearer ${storedToken}` };
        }
        return config;
      });
  }

  getClients() {
    return this.api.get('/').then(({ data }) => data).catch(err => console.error(err))
  }

  getClient(id) {
    return this.api.get(`/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }
// This is the route to get the clients 
  getClientsByUserId(id) {
    return this.api.get(`/user/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }

  createClient(body) {
    return this.api.post('/new', body).then(({ data }) => data).catch(err => console.error(err))
  }

  editClient(id, body) {
    return this.api.put(`/${id}`, body).then(({ data }) => data).catch(err => console.error(err))
  }

  deleteClient(id) {
    return this.api.delete(`/delete/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }

  // async getCourses2() {
  //   try {
  //     const response = await this.api.get('/');
  //     return response.data
  //   } catch (error) {
  //     console.error(err)
  //   }
  // }


}

const clientService = new ClientService();
export default clientService;