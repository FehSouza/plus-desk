import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://agenciaeplus.zendesk.com/api/v2/',
  auth: {
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
  },
});
