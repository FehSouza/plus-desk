import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://agenciaeplus.zendesk.com/api/v2/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': true,
    'Accept': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN_OAUTH}`
  },
});
