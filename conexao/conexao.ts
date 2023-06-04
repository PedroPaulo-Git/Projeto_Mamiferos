import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.get('/mamifero/:nome')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

export default api;
