import axios from 'axios';

import { API_KEY } from 'react-native-dotenv';

export const yelp = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
