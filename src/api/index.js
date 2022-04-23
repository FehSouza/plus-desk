import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://agenciaeplus.zendesk.com/api/v2/',
  headers: {
    'Content-Type': 'application/json', 
  },
  'Authorization': 'Basic PPuf66XSPuDZZt9i2qz6MT74OSROvi3G84vNjmrbCbs/+sYwQykesi1CvuhcNOkjaPetTFo1XXljFTyQ9CXD0w=='
});
