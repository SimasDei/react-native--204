import { useState, useEffect } from 'react';

import { yelp } from '../api';

export const useSearch = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('steak');
  }, []);

  const searchApi = async declaredTerm => {
    const config = {
      params: {
        limit: 50,
        term: declaredTerm,
        location: 'boulder colorado',
      },
    };

    try {
      const { data } = await yelp.get('/search', config);
      setResults(data?.businesses);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Oh oh, stinky 💩');
    }
  };

  return [searchApi, results, errorMessage];
};
